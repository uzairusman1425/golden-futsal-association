import connect from "@/db/connection";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import bcrypt from "bcrypt"
export async function POST(req) {
    try {
        connect()
        const reqBdoy = await req.json()
        const { fullName, email, password, role } = reqBdoy
        if (!fullName || !email) {
            return NextResponse.json({ message: "all fields required" }, { status: 404 })
        }
        const isUser = await User.findOne({ email })
        if (isUser) {
            return NextResponse.json({ message: "user already exist" }, { status: 400 })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({
            fullName,
            email,
            password: hashPassword,
            role
        })

        const createdUser = await user.save()
        return NextResponse.json({ message: "created user", data: createdUser, Success: true }, { status: 200 })
        // insert user

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}