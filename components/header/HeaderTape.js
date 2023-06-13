//HeaderTape.js
import IconPhone from "../ui/icons/social/IconPhone"
// import IconTwitter from "../ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "../ui/icons/social/IconFacebook"

const HeaderTape = () => {
  const iconSize = "13"

  return (
    // <div className="headerTape-section">
    <div className="fixed z-50 top-0 px-2 w-full h-12 md:h-6 flex flex-col md:flex-row justify-start md:justify-between bg-headMenuText text-white text-sm ">
      <span className="relative flex items-center justify-between px-2">
        <span className="flex items-center justify-between text-sm">
          <IconPhone width={iconSize} height={iconSize} colorFill="white" /> + 38(050-8580704/068-7892306)
        </span>
        <a className="px-2" href="https://www.facebook.com/profile.php?id=100017742340573">
          <IconFacebook width={iconSize} height={iconSize} colorFill="white" />
        </a>
      </span>
      <span className="px-1 items-center">ВИРОБИ З НЕРЖАВІЙКИ</span>
      {/* ======================================================================== */}
    </div>
  )
}

export default HeaderTape
