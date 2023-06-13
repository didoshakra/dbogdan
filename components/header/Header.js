import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"
import HeaderSeting from "./HeaderSeting"
import MobileMenuIcon from "./MobileMenuIcon"

export default function Header() {


  return (
    <header className="px-2 dark:bg-slate-800 flex justify-between items-center  fixed top-12 md:top-6 h-16 w-full bg-white z-50 ">
    {/* <header className="  bg-red-400 z-50 w-full fixed top-12 md:top-6 h-16 px-0  flex flex-auto justify-between items-center   "> */}
      {/* <div className="flex items-center justify-begin min-w-[250px] "> */}
      <HeaderLogo />
      {/* </div> */}
      <div className=" flex  items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* іконка мобільного меню/faList/ */}
        {/* <MobileMenuIcon mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle} /> */}
        <MobileMenuIcon />
        {/* Налаштування(Теми,Мови)*/}
        <HeaderSeting />
      </div>
    </header>
  )
}
