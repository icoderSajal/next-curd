import Topic from "@/models/topic";
import connectDB from "../../../../lib/mongoDb";
import { NextResponse } from "next/server";

//create the topic
export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

// get the all topics
export async function GET(request) {
  await connectDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// delete the topic
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Tpoic Deleted" }, { status: 200 });
}
