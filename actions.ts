"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function createPost(
  title: string,
  content: string,
  tags: string[]
) {
  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
}
