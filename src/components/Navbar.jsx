import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 text-white px-5 py-2 flex justify-between items-center w-[80%] mx-auto my-4 rounded-lg shadow-gray-600">
        <div>
          <h1>
            <Link href="/">Curd App</Link>
          </h1>
        </div>
        <div>
          <Link
            className="text-xl  rounded-md px-4 py-2 bg-green-400 hover:bg-green-800 text-gray-100 "
            href="/addTopic"
          >
            Add
          </Link>
        </div>
      </div>
    </>
  );
}
