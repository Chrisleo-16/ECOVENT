import { NextResponse } from "next/server";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = formSchema.parse(body);

    console.log("Contact form submission:", { name, email, message });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "An unexpected error occured." },
      { status: 500 }
    );
  }
}
