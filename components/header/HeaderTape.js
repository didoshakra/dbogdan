//HeaderTape.js
import IconPhone from "../ui/icons/social/IconPhone"
// import IconTwitter from "../ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "../ui/icons/social/IconFacebook"

const HeaderTape = () => {
  const iconSize = "13"

  return (
    // <div className="headerTape-section">
    <div className="fixed w-full h-6 z-50 bg-headMenuText text-white text-sm dark:bg-slate-800 flex flex-col items-center justify-between md:flex-row  top-0   ">
      {/* <div className="flex items-center justify-between fixed py-0 h-16 w-full bg-white z-50 "> */}
      {/* <span className="headerTape__social"> */}
      <span className="relative flex items-center justify-between px-2">
        <span className="flex items-center justify-between">
          <IconPhone width={iconSize} height={iconSize} colorFill="white" /> + 38(050-8580704/068-7892306)
        </span>
        <span className="px-2" href="https://www.facebook.com/profile.php?id=100017742340573">
          <IconFacebook width={iconSize} height={iconSize} colorFill="white" />
        </span>
      </span>
      <span className="headerTape__announce">Вироби з нержавійки</span>
      {/* ======================================================================== */}
    </div>
  )
}

export default HeaderTape
