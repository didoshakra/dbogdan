//HeaderLogo.js

import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {

  return (
    // <div className="flex items-center px-4 md:px-12 py-2 justify-begin ">
    <div className="flex items-center px-4 md:px-2 justify-begin ">
      <Link href="/">
        <Image src="/images/home/StainlessSteelBoat.png" width={90} height={60} alt="Logo" />
      </Link>
      <Link href="/">
        {/* <div className="flex items-center px-4 md:px-12 py-2 justify-begin w-full z-50 shadow">DBogdan</div> */}
        <div className=" text-3xl font-bold italic text-green-500 items-center px-4 justify-begin">DBogdan</div>
      </Link>
      {/* ========================================================================== */}
    </div>
  )
}
export default HeaderLogo
