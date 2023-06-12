//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню
//список меню з масиву props.menu

import IconList from "../ui/icons/head/IconListP_thin" //рисочки з крапочками (тонкі)

const MobileMenuIcon = (props) => {
  //   const themeType = "dark"
  const themeType = "light"
  const headIcon = themeType === "light" ? "#82AE46" : "red"
  const iconSize = "25"


  return (
    // Навігація
    // <div className="mobileMenuIcon">
    <div className="flex justify-center items-center mr-2 visible md:invisible ">
      {/* іконка мобільного меню */}
      <p className=" z-0  flex justify-center aling-center hover:bg-lime-300 rounded-full" title="Меню">
        <IconList width={iconSize} height={iconSize} colorFill={headIcon} />
      </p>

      {/* <style jsx>{`
        .mobileMenuIcon {
          margin: 0;
          margin-right: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headMobileIcon};
          background: ${theme.colors.headBackground};
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 40px;
          width: 40px;
          height: 40px;
        }

        .mobileMenuIcon__icon {
          margin-right: 5px; //Відступ від кожного елемента зліва
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
        }

        .mobileMenuIcon__icon:hover {
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }

        @media (min-width: 960px) {
          .mobileMenuIcon {
            display: none;
          }
        }
      `}</style> */}
    </div>
  )
}

export default MobileMenuIcon
