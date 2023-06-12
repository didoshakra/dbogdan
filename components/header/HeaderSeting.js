//HeaderSeting  /Верхнє меню
//Викликає меню(з іконоками) :UserSwitcher/ThemeSwitcher/LocaleSwitcher

import ThemeSwitcher from "./ThemeSwitcher"

const HeaderSeting = () => {

  return (
    // <div className="headerSeting">
    <div className="h-16 flex justify-between items-center">
      {/* Іконки головного меню Seting */}
      <div className="invisible md:visible">
        {/* тема */}
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default HeaderSeting
