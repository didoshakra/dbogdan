//HeaderMenu.js

import Link from "next/link"

const HeaderMenu = () => {
  const menu = [
    {
      a: "Головна",
      link: "/",
    },
    {
      a: "Про нас",
      link: "/about",
    },
  ]
  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li
          className="hover:underline pr-1 whitespace-nowrap text-lg font-sans font-bold items-center text-headMenuText "
          key={index}
        >
          <Link href={item.link}>{item.a}</Link>
        </li>
      )
    })
  }

  return (
    <div className=" flex justify-end invisible md:visible ">
      {/* Меню для десктопа */}
      <ul className=" flex justify-end ">{renderMenu()}</ul>
    </div>
  )
}

export default HeaderMenu
