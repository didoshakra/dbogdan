import Image from "next/image"
import BVorota0 from "../../public/images/home/DBVorota0.jpg"

export default function HomeSlaider() {
  return (
    <>
      {/* <div className="relative w-full h-60 md:h-[580px]"> */}
      <div className="relative w-full h-[580px]">
        {/* <div className="relative w-screen h-60 md:h-[580px]"> */}
        <div className="absolute w-full h-full">
          <Image src="/images/home/DBVorota0.jpg" alt="background image" fill />
          {/* Авторозмір - імпорт свого зображення*/}
          {/* <Image src={BVorota0} alt="background image" /> */}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Вироби з нержавійки на замовлення</h1>
          <p className="mt-4 text-3xl text-yellow-200">Якісно і надійно</p>
        </div>
      </div>
    </>
  )
}
