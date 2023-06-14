import Image from "next/image"
// import BVorota0 from "../../public/images/home/DBVorota0.jpg"

export default function HomeSlaider() {
  return (
    <section className="relative">
      <div
        className="absolute w-full h-[580px] animate-slideHome transition"
        // className="relative w-full h-[580px] animate-slideHome transition"
      >
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
      <div
        className="relative w-full h-[580px] animate-slideHome1"
        // className="absolute w-full h-[580px] animate-slideHome1"
      >
        <div className="absolute w-full h-full">
          <Image src="/images/home/DBVorota1.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold top-4 text-center text-white"> Спроектуємо, виготовимо і встановимо</h1>
          <p className="mt-4 text-3xl text-yellow-200">Використовуємл тільки сталь AISI 304</p>
        </div>
      </div>
    </section>
  )
}
