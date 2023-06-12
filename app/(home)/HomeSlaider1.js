import Image from "next/image"

export default function HomeSlaider1() {
  return (
    <>
      <div className="relative w-full h-60 md:h-[580px]">
        {/* <div className="relative w-screen h-60 md:h-[580px]"> */}
        <div className="absolute inset-0">
          <Image src="/images/home/DBVorota0.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-green-500"> Вироби з нержавійки на замовлення</h1>
          <p className="mt-4 text-3xl text-yellow-200">Якісно і надійно</p>
        </div>
      </div>
    </>
  )
}
