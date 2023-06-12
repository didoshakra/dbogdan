import Product from "../../components/Product"
import { getAllProducts } from "../data"
// import HomeSlaider from "./HomeSlaider"
import HomeSlaider1 from "./HomeSlaider1"

export default async function Home() {
  const products = await getAllProducts()
  return (
    // <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
    <main className="container px-4 mx-auto py-4 ">
      {/* <HomeSlaider /> */}
      <HomeSlaider1 />
      <section className="flex flex-col py-14 space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-green-500 text-center">Наші вироби - стандартні і художні</h1>
        <h2 className="text-3xl italic text-center text-red-500">Використовуєм тільки сталь AISI 304</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
