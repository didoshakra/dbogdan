export async function getAllProducts() {
  const promise = new Promise((res) => setTimeout(() => res(PRODUCTS), 1500))
  return await promise
}

export async function getProductById(id) {
    const a = parseFloat(id)
  const promise = new Promise((res) => {
    setTimeout(() => res(PRODUCTS.find((x) => x.id === parseFloat(id))), 1500)

  })
  return await promise
}

export const PRODUCTS = [
  {
    id: 1,
    title: "Балкон кутовий",
    image: "/images/products/DBBalkon1.jpg",
    description:"Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 2,
    title: " Балкон ",
    image: "/images/products/DBBalkon2.jpg",
    price: 128.0,
    discontProc: 30,
  },
  {
    id: 3,
    title: "Бвлкон",
    image: "/images/products/DBBalkon3.jpg",
    price: 120.0,
    discontProc: 0,
  },
  {
    id: 4,
    title: "Балкон",
    image: "/images/products/DBBalkon4.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 5,
    title: "Тираса",
    image: "/images/products/DBVeranda.jpg",
    price: 20.0,
    discontProc: 30,
  },
  {
    id: 6,
    title: "Балкон навіс",
    image: "/images/products/DBBalkonNavis.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 7,
    title: "Веранда",
    image: "/images/products/DBVerandaVn.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 8,
    title: "Опора під виноград",
    image: "/images/products/BDVunograd.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 9,
    title: "Ворота",
    image: "/images/products/DBVorota.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 10,
    title: "Ворота",
    image: "/images/products/DBVorota1.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 11,
    title: "Решітка на вікно",
    image: "/images/products/DBVikno.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 12,
    title: "Лавка",
    image: "/images/products/DBLavka.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 13,
    title: "Паркан",
    image: "/images/products/DBParkan.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 14,
    title: "Паркан",
    image: "/images/products/DBParkan1.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 15,
    title: "Паркан",
    image: "/images/products/DBParkan2.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 16,
    title: "Перила",
    image: "/images/products/DBPerulaZovn.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 17,
    title: "Сушилка",
    image: "/images/products/DBSushilka.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 18,
    title: "Сушилка",
    image: "/images/products/DBSushilka1.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 19,
    title: "Сушилка",
    image: "/images/products/DBSushilka2.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 20,
    title: "Сушилка",
    image: "/images/products/DBSushilka3.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 21,
    title: "Сушилка",
    image: "/images/products/DBSushilka4.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 22,
    title: "Перила",
    image: "/images/products/DBShodu.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 23,
    title: "Перила",
    image: "/images/products/DBShoduVn.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id:24,
    title: "Перила",
    image: "/images/products/DBShoduVn1.jpg",
    price: 20.0,
    discontProc: 0,
  },
]
