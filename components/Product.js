import Link from "next/link"
import ProductImage from "./ProductImage"

export default function Product({ product }) {
//   console.log("************Product.js/product=", product)
  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage product={product} fill />
      </div>

      {/* <div className="font-semibold flex items-center justify-between mt-4 mb-1"> */}
      <div className="font-semibold flex items-center justify-center mt-4 mb-1">
        {/* <p className="w-44 truncate">{product.title}</p> */}
        <p className="w-44 truncate">{product.title}</p>
        {/* <p>${product.price}</p> */}
      </div>
      {/* <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{product.description}</p> */}
    </Link>
  )
}
