import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth(); 
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Create a new course in the database
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    // Return the created course as a JSON response
    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSES]", error); // Log the error
    return new NextResponse("Internal Error", { status: 500 });
  }
}
