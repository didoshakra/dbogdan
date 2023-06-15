import Image from "next/image"
// import BVorota0 from "../../public/images/home/DBVorota0.jpg"

export default function HomeSlaider() {
  return (
    <section className="relative ">
      {/* absolute  */}
      {/* <div className="absolute w-full h-[400px] md:h-[580px] animate-slideHome"> */}
      <div className="absolute w-full h-full md:h-[580px] animate-slideHome">
        <div className="absolute w-full h-full ">
          <Image
            src="/images/home/DBVorota-900-600.jpg"
            alt="background image"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"  //не прпцює???
            // style={{ objectFit: "contain" }} //Збереження пропоруцій і  зміна розмірів картинки
            style={{ objectFit: "cover" }} //Збереження пропоруцій і розмірів з обрізанням картинки
          />
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Вироби з нержавійки на замовлення</h1>
          <p className="mt-4 text-center text-3xl  text-yellow-200">Використовуєм тільки із сталі AISI 304</p>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[580px] animate-slideHome1">
        <div className="absolute w-full h-full ">
          <Image src="/images/home/DBVorota1-900-600.jpg" alt="background image" fill style={{ objectFit: "cover" }} />
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Спроектуємо, виготовимо і встановимо</h1>
          <p className="mt-4 text-center text-3xl  text-yellow-200">Використовуєм тільки із сталі AISI 304</p>
        </div>
      </div>
    </section>
  )
}
