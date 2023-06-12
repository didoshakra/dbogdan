// import Image from "next/image"
// import Link from "next/link"
import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"
import HeaderSeting from "./HeaderSeting"
import MobileMenuIcon from "./MobileMenuIcon"

export default function Header() {


  return (
    // <header className="px-2 dark:bg-slate-800 flex justify-between items-center  fixed top-12 md:top-6 h-16 w-full bg-white z-50 ">
    <header className="px-0 dark:bg-slate-800 flex justify-between items-center w-full fixed top-12 md:top-6 h-16 bg-white z-50 ">
      {/* <div className="flex items-center justify-begin min-w-[250px] "> */}
        <HeaderLogo />
      {/* </div> */}
      <div className="flex items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* іконка мобільного меню/faList/ */}
        {/* <MobileMenuIcon mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle} /> */}
        <MobileMenuIcon />
        {/* Налаштування(Теми,Мови)*/}
        <HeaderSeting />
        {/* <span className="font-bold  bg-red-400 hover:bg-red-600 py-2 px-4 rounded-full">Тема</span> */}
      </div>
      {/* <div className="flex items-center px-4 md:px-12 py-2 justify-end w-full z-50 ">rrrrrrrrrrrrrrrrrrrrrrr</div> */}
    </header>
  )
}
