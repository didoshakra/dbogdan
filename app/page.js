import Product from "../components/Product"
// import { getAllProducts } from "./api1/data"
import { getAllProducts } from "./data"

export default async function Home() {
  const products = await getAllProducts()
  //   const body = JSON.parse(JSON.stringify(req.body))
  //   const user = Users.find((user) => user.email === body.email && user.password === parseInt(body.password))
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const products = await res.json();
  //   console.log("***------Home()/products=", products)

  return (
    // <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
    <section className="flex flex-col space-y-12 pb-44">
      <h1 className="text-5xl font-bold text-center">Наші вироби - стандартні і художні</h1>
      {/* <h2 className="text-3xl font-bold text-center">Наші вироби</h2> */}
      <h2 className="text-3xl text-center">Використовуємл тільки сталь AISI 304</h2>
      {/* <h2 className="text-3xl text-center">Можемо виготовляти як стандартні так і жудожні </h2> */}
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
    // </main>
  )
}
