import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import User from "@/models/User";
import connectToDb from "@/utils/database";
import { Account, User as AuthUser} from 'next-auth'
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          //Check if the user exists.
          await connectToDb();
  
          try {
            const user = await User.findOne({
              email: credentials.email,
            });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
  
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Password or Email Address incorrect");
              }
            } else {
              throw new Error("User not found, please register");
            }
          } catch (err: any) {
            throw new Error(err);
          }
        },
      }), 
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // }),
    ],
    // callbacks: {
    //     async signIn({ user, account }) {
    //         if (account?.provider == "credentials") {
    //           return true;
    //         }
    // },
    
    pages: {
      error: '/login',
      signOut: '/'
    },
  
  };