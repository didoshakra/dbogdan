//HeaderLogo.js

import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {

  return (
    // <div className="flex items-center px-4 md:px-12 py-2 justify-begin ">
    <div className="flex justify-begin items-center px-1 md:px-2  ">
      <Link href="/">
        <Image src="/images/home/StainlessSteelBoat.png" width={90} height={60} alt="Logo" />
      </Link>
      <Link href="/">
        {/* <div className="flex items-center px-4 md:px-12 py-2 justify-begin w-full z-50 shadow">DBogdan</div> */}
        <div className=" flex text-2xl font-bold ita.lic text-headMenuText items-center px-4 justify-begin">DBogdan</div>
      </Link>
      {/* ========================================================================== */}
    </div>
  )
}
export default HeaderLogo
