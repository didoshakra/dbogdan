import Image from "next/image"
// import BVorota0 from "../../public/images/home/DBVorota0.jpg"

export default function HomeSlaider() {
  return (
    <section className="relative ">
      {/* absolute  */}
      {/* <div className="absolute w-full h-[400px] md:h-[580px] animate-slideHome"> */}
      <div className="absolute w-full h-screen animate-slideHome">
        <div className="absolute w-full h-full ">
          <Image
            src="/images/home/DBBalkon1-900-600.jpg"
            // src="/images/home/DBBalkon1-900-600.webp"
            alt="background image"
            fill
            // style={{ objectFit: "contain" }} //Збереження пропоруцій і  зміна розмірів картинки
            style={{ objectFit: "cover" }} //Збереження пропоруцій і розмірів з обрізанням картинки
          />
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Спроектуємо, виготовимо і встановимо</h1>
          <p className="mt-4 text-center text-3xl  text-yellow-200">Використовуєм тільки із сталі AISI 304</p>
        </div>
      </div>
      <div className="relative w-full h-screen animate-slideHome1">
        <div className="absolute w-full h-full ">
          <Image src="/images/home/DBVorota0-900-600.jpg" alt="background image" fill style={{ objectFit: "cover" }} />
          {/* <Image src="/images/home/DBVorota0-900-600.webp" alt="background image" fill style={{ objectFit: "cover" }} /> */}
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Вироби з нержавійки на замовлення</h1>
          <p className="mt-4 text-center text-3xl  text-yellow-200">Якісно і надійно</p>
        </div>
      </div>
    </section>
  )
}
