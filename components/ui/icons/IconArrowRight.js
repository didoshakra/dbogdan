// IconArrowRight.js //Flaticon

export default function IconArrowRight(props) {
  const colorFill = props.colorFill || "black";
  // const colorFill = props.colorFill || "red";
  const width = props.width || "64";
  const height = props.height || "64";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      //
      viewBox="0 0 451.847 451.847"
    >
      <path
        fill={colorFill}
        d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
      ></path>
    </svg>
  );
}
