export default function Button({
  title = "submit",
  type = "button",
  onClick,
  bgColor = "blue",
}) {
  return (
    <button
      class={` ${
        bgColor == "blue"
          ? "bg-blue-500"
          : bgColor == "red"
          ? "bg-red-500"
          : "bg-orange-500"
      } bg-blue-300  text-black font-bold px-10 py-3 m-2 rounded`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
