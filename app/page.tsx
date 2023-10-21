import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="sticky m-1 border border-black  bg-white h-20 p-2 shadow-blue shadow-lg">
        header
      </div>
      <div className="grow flex w-full">
        <aside className="w-1/12 bg-blue-400 p-2 mb-1 ml-1 border border-black">
          sidebar
        </aside>
        <section className="w-11/12 bg-yellow-50 p-2 mb-1 mx-1 border border-black">
          content
        </section>
      </div>
    </div>
  );
}
