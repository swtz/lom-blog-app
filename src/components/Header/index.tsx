"use client";

import clsx from "clsx";

export function Header() {
  console.log("Esse aqui é um Client Component!");

  return (
    <h1
      className={clsx(
        { "text-6xl": false },
        "font-bold",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-75"
      )}
      onClick={() => alert("Esse aqui é um Client Component!")}
    >
      Essa aqui é a Homepage
    </h1>
  );
}
