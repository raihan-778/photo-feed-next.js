import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const photosData = await getAllPhotos();

  return NextResponse.json(photosData);
};
