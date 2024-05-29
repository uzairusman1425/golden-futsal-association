// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
  

   
//     const token = await getToken({ req, secret: process.env.JWT_SECRET });
//     const isPath= path==='/'
   

//     // If no token, redirect to the home page
//     if (!token) {
//         console.log("No token found, redirecting to home page");
//         return NextResponse.redirect(new URL('/', req.url));
//     }

//     if(token  && ){
//         return NextResponse.redirect(new URL('/', req.url));

//     }

//     // Extract the role from the token
//     const role = token._role;
//     console.log("Role:", role);

//     // Redirect based on the user role
//     if (role === 'manager') {
//         console.log("Redirecting to /manager/myteam");
//         return NextResponse.redirect(new URL('/manager/myteam/squad', req.url));
//     } else {
//         console.log("Redirecting to home page");
//         return NextResponse.redirect(new URL('/', req.url));
//     }
// }

// // Apply the middleware to specific routes
// export const config = {
//     matcher:[
//     "/teams/:path*",
//     "/manager/:path*",
//     "/superadmin/:path*"
//     ],
// };
