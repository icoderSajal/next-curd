"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description is required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        alert(`${title} is created successfullly`);
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create Topic");
      }
    } catch (error) {
      console.log(`Error to create Data ${error}`);
    }
  };
  return (
    <>
      <div className="w-[80%] mx-auto my-4 px-4 py-2 bg-slate-300 shadow-2xl rounded-lg">
        <div className="flex justify-between my-3 gap-2 border-slate-900 items-start">
          <form className="w-full" onSubmit={handleSubmit}>
            {/* <p>{JSON.stringify(title)}</p> */}
            {/* <p>{JSON.stringify(description)}</p> */}
            <div className="flex flex-col justify-center items-center gap-4 ">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="Enter Your Topic Name"
                className="h-10 px-4  w-full py-1 rounded-lg"
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
                placeholder="Enter Your Topic Name"
                className="h-20 w-full px-4 py-1 rounded-lg"
                rows={5}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 rounded-lg "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
