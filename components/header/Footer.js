//Footer.js ff
import IconHeart from "../../components/ui/icons/IconHeart"
import IconMapMarker from "../../components/ui/icons/IconMapMarker"
import IconPhone from "../../components/ui/icons/social/IconPhone"
import IconMail from "../../components/ui/icons/social/IconMail"
import IconFacebook from "../../components/ui/icons/social/IconFacebook"
import IconShevronUp from "../../components/ui/icons/IconShevronUp" //^Стрілка вверх

const Footer = () => {
  return (
    <section className=" p-2 relative">
      {/* <div className="footer-mouse"> */}
      {/* <div className="absolute">
        <a href="#" className="footer-mouse-icon">
          <div className="footer-mouse-wheel">
            <span className="ion-ios-arrow-up">
              <IconShevronUp width="14" height="14" />
            </span>
          </div>
        </a>
      </div> */}
      {/* </div> */}
      {/* <div className="footer-context-row"> */}
      <div className="flex flex-row flex-auto justify-between items-center">
        {/* <div className="footer-context-item-col"> */}
        <div className="relative w-full flex flex-col justify-start items-start text-left">
          <h2 className="">DBogdan</h2>
          <p>Нержавійка - стійка до корозії в атмосфері й агресивних середовищах сталь із вмістом хрому.</p>
          <ul className="flex justify-between items-center">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100017742340573">
                <span className="icon-social">
                  <IconFacebook width="26" height="26" />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="relative w-full flex flex-col justify-start items-start text-left">
          <h2 className="flex flex-row justify-center items-center">Є запитання?</h2>
          <ul>
            <li className="px-4 mx-2 flex flex-row justify-start items-center">
              <IconMapMarker width="15" height="15" colorFill="#000" colorStroke="#000" />
              <span className="px-2"> вул. Гулака 7, Калуш, Україна</span>
            </li>
            <li className="px-4 mx-2 flex flex-row justify-start items-center">
              <IconPhone width="15" height="15" />
              <span className="px-2">+ 38(050-8580704)</span>
            </li>
            <li className="px-4 mx-2 flex flex-row justify-start items-center">
              <IconPhone width="15" height="15" />
              <span className="px-2">+ 38(068-7892306)</span>
            </li>
            <li className="px-4 mx-2 flex flex-row justify-start items-center">
              <IconMail width="15" height="15" />
              <span className="px-2">bogdandrogomirezkiy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full pt-10 flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          Copyright © {new Date().getFullYear()}
          <IconHeart width="15" height="15" colorFill="#000" colorStroke="#000" />
        </div>
      </div>
    </section>
  )
}
export default Footer
