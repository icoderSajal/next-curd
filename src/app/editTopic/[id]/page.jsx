"use client";
import React from "react";
import EditTopicForm from "@/components/EditTopicform";

//get single data
const getSingleData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Topic");
    }
    return res.json();
  } catch (error) {
    console.log(`Error to fetch data ${error}`);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getSingleData(id);
  const { title, description } = topic;

  return (
    <>
      <EditTopicForm id={id} title={title} description={description} />
    </>
  );
}
