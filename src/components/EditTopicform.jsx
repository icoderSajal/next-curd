"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicform({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Faild to update topic");
      }
      alert(`${newTitle} is updated successfullly`);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[80%] mx-auto my-4 px-4 py-2 bg-slate-300 shadow-2xl rounded-lg">
      <div className="flex justify-between my-3 gap-2 border-slate-900 items-start">
        <form className="w-full" onSubmit={handleUpdate}>
          <div className="flex flex-col justify-center items-center gap-4 ">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              placeholder="Enter Your Topic Name"
              className="h-10 px-4  w-full py-1 rounded-lg"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              type="text"
              placeholder="Enter Your Topic Name"
              className="h-20 w-full px-4 py-1 rounded-lg"
              rows={5}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded-lg "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
