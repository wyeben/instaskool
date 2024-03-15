import User from "../../../../models/User";
import connectToDb from "@/utils/database";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { first_name, last_name, phone_number, email, password } =
    await request.json();

  await connectToDb();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    first_name,
    last_name,
    phone_number,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {});
  }
};
