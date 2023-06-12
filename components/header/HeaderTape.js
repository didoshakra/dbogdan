//HeaderTape.js
// import { useState, useContext } from "react"
// import Link from "next/link"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
// import { faPhoneAlt, faGlobe } from "@fortawesome/free-solid-svg-icons"
import IconPhone from "../ui/icons/social/IconPhone"
// import IconTwitter from "../ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
// import IconFacebook from "../ui/icons/social/IconFacebook"

const HeaderTape = () => {
  //   const [iconFacebookHover, setIconFacebookHover] = useState(false) //Для тоого щоб працював hover
  //   const [iconInstagramHover, setIconInstagramHover] = useState(false) //Для тоого щоб працював hover
  const iconSize = "13"
  const fontSize = "13px"

  return (
    // <div className="headerTape-section">
    <div className="flex items-center justify-between fixed top-10 h-16 w-full bg-white z-50 ">
      <span className="headerTape__social">
        <span className="headerTape__social__text">
          {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
          <IconPhone width={iconSize} height={iconSize} colorFill="green" />+ 38(050-8580704/068-7892306)
        </span>
        {/* <span>
          <a
            href="https://www.instagram.com/roletydaynight"
            className="headerTape__social__icon"
            onMouseEnter={() => setIconInstagramHover(true)}
            onMouseLeave={() => setIconInstagramHover(false)}
          >
            <IconInstagram
              width={iconSize}
              height={iconSize}
              colorFill={iconInstagramHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
              colorFill1={iconInstagramHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
            />
          </a>
        </span>
        <a
          className="headerTape__social__icon"
          href="https://www.facebook.com/profile.php?id=100080681993195"
          onMouseEnter={() => setIconFacebookHover(true)}
          onMouseLeave={() => setIconFacebookHover(false)}
        >
          <IconFacebook
            width={iconSize}
            height={iconSize}
            colorFill={iconFacebookHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
            colorFill1={iconFacebookHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
          />
        </a> */}
      </span>
      <span className="headerTape__announce">Вироби з нержавійки</span>
      {/* ======================================================================== */}
    </div>
  )
}

export default HeaderTape
