"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <>
      <button onClick={removeTopic}>
        <HiOutlineTrash
          size={35}
          className="bg-red-700 px-2 py-1 text-3xl rounded-md hover:bg-red-900"
        />
      </button>
    </>
  );
}
