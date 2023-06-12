// IconArrowLeft.js //Flaticon

export default function IconArrowLeft(props) {
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
        d="M97.141 225.92c0-8.095 3.091-16.192 9.259-22.366L300.689 9.27c12.359-12.359 32.397-12.359 44.751 0 12.354 12.354 12.354 32.388 0 44.748L173.525 225.92l171.903 171.909c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.386 12.365-44.745 0l-194.29-194.281c-6.167-6.177-9.252-14.274-9.252-22.372z"
      ></path>
    </svg>
  );
}
