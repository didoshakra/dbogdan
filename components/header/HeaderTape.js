//HeaderTape.js
import IconPhone from "../ui/icons/social/IconPhone"
// import IconTwitter from "../ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "../ui/icons/social/IconFacebook"

const HeaderTape = () => {
  const iconSize = "13"

  return (
    // <div className="headerTape-section">
    // <div className="fixed z-50 top-0 w-full h-16 md:h-6 flex flex-col md:flex-row justify-start md:justify-between bg-headMenuText text-white text-sm ">
    <div className="px-2 w-full h-16 md:h-6 flex flex-col md:flex-row justify-start md:justify-between bg-headMenuText text-white text-sm ">
      <div className=" relative flex items-center justify-between ">
        <div className="relative flex flex-col md:flex-row items-center justify-between ">
          {/* <span className="px-2 flex items-center justify-between text-sm"> */}
          <a className="px-2 flex items-center justify-between text-sm" href="tel:+30508580704">
            + 38(050-8580704)
            <IconPhone width={iconSize} height={iconSize} colorFill="white" /> + 38(050-8580704)
          </a>
          <a className="px-2 flex items-center justify-between text-sm" href="tel:+380687832306">
            + 38(050-8580704)
            <IconPhone width={iconSize} height={iconSize} colorFill="white" /> 38(068-7832306)
          </a>
          {/* </span> */}
          {/* <span className="px-2 flex items-center justify-between text-sm">
            <IconPhone width={iconSize} height={iconSize} colorFill="white" /> + 38(068-7832306)
          </span> */}
        </div>
        <a className="px-2" href="https://www.facebook.com/profile.php?id=100017742340573">
          <IconFacebook width={iconSize} height={iconSize} colorFill="white" />
        </a>
      </div>
      <span className="px-2 items-center">ВИРОБИ З НЕРЖАВІЙКИ</span>
      {/* ======================================================================== */}
    </div>
  )
}

export default HeaderTape
