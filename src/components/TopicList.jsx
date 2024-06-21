import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// get all data
const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    return res.json();
  } catch (error) {
    console.log(`Error loading the data`, error);
  }
};
export default async function TopicList() {
  const { topics } = await getData();

  return (
    <>
      {topics.length > 0 ? (
        topics.map((val, i) => (
          <div className="w-[80%] mx-auto my-4 px-4 py-2 bg-slate-300 shadow-2xl rounded-lg">
            <div className="flex justify-between my-3 gap-2 border-slate-900 items-start ">
              <div className="text-black">
                <p key={i}>{i + 1}</p>
                <h1 className="px-2 py-2 text-2xl font-semibold">
                  {val.title}
                </h1>
                <div className="px-2 py-2 font-serif">{val.description}</div>
              </div>

              <div className="flex gap-4 ">
                <RemoveButton id={val._id} />
                <Link href={`/editTopic/${val._id}`}>
                  <HiPencilAlt
                    size={35}
                    className="bg-green-700 px-2 py-1 text-3xl rounded-md hover:bg-green-900"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[80%] mx-auto my-4 px-4 py-2 bg-slate-300 shadow-2xl rounded-lg">
          <div className="flex justify-center my-3 gap-2 border-slate-900 items-center">
            <div className="text-black hover:ring-1 cursor-pointer">
              <h1 className="px-2 py-2 text-2xl font-semibold ">
                No data Found
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
