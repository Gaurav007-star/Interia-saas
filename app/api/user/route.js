import { db } from "@/config/db";
import { User } from "@/config/schema";
import { eq } from "drizzle-orm";

export const POST = async (request) => {
  const { user } = await request.json();

  try {

    // Check that the user exists in database or not
    const UserExists = await db
      .select()
      .from(User)
      .where(eq(User.email, user?.primaryEmailAddress.emailAddress));
        
    // save user data
    if (UserExists.length == 0) {
      const CreateUser = await db.insert(User).values({
        name: user.fullName,
        image: user.imageUrl,
        email: user.primaryEmailAddress.emailAddress
      }).returning({User})

      return new Response(
        JSON.stringify({
          success: true,
          message: "User register successfully",
          user:CreateUser[0]
        }),
        { status: 200 }
      );
      
    }

    // if user already exists then this response return
    return new Response(
      JSON.stringify({
        success: true,
        message: "User already exists",
        user:UserExists[0]
      }),
      { status: 200 }
    );


  } catch (error) {
    return new Response(
      JSON.stringify({
        error:error.message
      })
    );
  }
};
