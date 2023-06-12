// import Image from "next/image"
// import Link from "next/link"
import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"
import HeaderSeting from "./HeaderMenu"

export default function Header() {


  return (
    // <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
    // <header className="flex items-center justify-between fixed top-10 h-16 w-full bg-white z-50 ">
    <header className="dark:bg-slate-800 flex items-center justify-between fixed top-10 h-16 w-full bg-white z-50 ">
      <div className="flex items-center justify-begin w-full z-50 ">
        <HeaderLogo />
      </div>
      <div className="flex items-center justify-end ">
        {/*рядок меню */}
        <HeaderMenu />
        {/* іконка мобільного меню/faList/ */}
        {/* <MobileMenuIcon mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle} /> */}
        {/* Налаштування(Теми,Мови)*/}
        {/* <HeaderSeting /> */}
        <span className="font-bold  bg-red-400 hover:bg-red-600 py-2 px-4 rounded-full">Тема</span>
      </div>
      {/* <div className="flex items-center px-4 md:px-12 py-2 justify-end w-full z-50 ">rrrrrrrrrrrrrrrrrrrrrrr</div> */}
    </header>
  )
}
