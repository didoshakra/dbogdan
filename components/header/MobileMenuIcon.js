//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню

import IconList from "../ui/icons/head/IconListP_thin" //рисочки з крапочками (тонкі)

const MobileMenuIcon = (props) => {
    const themeType = "light"
    const colorIcon = themeType === "light" ? "#82AE46" : "red"
    const iconSize = "25"

  return (
    // Навігація
    <div className="mx-1 flex justify-center aling-center  md:hidden">
      {/* іконка мобільного меню */}
      <p
        className="z-0  flex justify-center aling-center hover:bg-lime-300 rounded-full"
        // onClick={() => props.mobileMenuToggle(props.mobileMenuOpen ? false : true)}
        title="меню"
      >
        <IconList width={iconSize} height={iconSize} colorFill={colorIcon} />
      </p>
    </div>
  )
}

export default MobileMenuIcon
