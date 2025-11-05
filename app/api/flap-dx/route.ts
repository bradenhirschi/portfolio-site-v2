import { NextResponse } from "next/server";
import { join } from "path";
import { readFile } from "fs/promises";

export async function GET() {
  const filePath = join(process.cwd(), "public", "flap-dx.gba");
  const file = await readFile(filePath);

  const res = new NextResponse(file, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });

  return res;
}
