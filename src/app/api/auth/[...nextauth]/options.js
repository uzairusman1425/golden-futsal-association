import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/user.model";
import connect from "@/db/connection";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email , password } = credentials;
        console.log(credentials);
        try {
          await connect();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const pass = await bcrypt.compare(password, user.password);
          if (!pass) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error In Authorize", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id,
        token._fullName = user.fullName,
        token._email = user.email,
        token._role = user.role
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user = {
          _id: token._id,
          _fullName: token._fullName,
          _email: token._email,
          _role:token._role
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/",
  },
};
