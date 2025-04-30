import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          { "text-6xl": false },
          "font-bold",
          "hover:text-blue-50",
          "hover:bg-blue-500",
          "transition",
          "duration-75"
        )}
      >
        Essa aqui é a Homepage
      </h1>
    </div>
  );
}
