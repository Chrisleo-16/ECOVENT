import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { resolve } from "path";

const prisma = new PrismaClient();

export async function GET() {
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      while (true) {
        const posts = await prisma.post.findMany({
          orderBy: { createdAt: "desc" },
          take: 10,
        });
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(posts)}\n\n`)
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    },
  });

  return new NextResponse(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      'Connection': "keep-alive",
    },
  });
}
