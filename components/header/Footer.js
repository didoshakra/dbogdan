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
      <div className="flex flex-col flex-auto justify-between items-center">
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

        <div className="footer-context-item-col">
          <h2 className="ftco-heading-2">Є запитання?</h2>
          <ul className="list-unstyled">
            <li>
              <span className="item-questions__icon">
                <IconMapMarker width="15" height="15" colorFill="#000" colorStroke="#000" />
              </span>
              <span className="text"> вул. Гулака 7, Калуш, Україна</span>
            </li>
            <li>
              <a href="#">
                <span className="item-questions__icon">
                  <IconPhone width="15" height="15" />
                </span>
                <span className="text">+ 38(050-8580704)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item-questions__icon">
                  <IconPhone width="15" height="15" />
                </span>
                <span className="text">+ 38(068-7892306)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item-questions__icon">
                  <IconMail width="15" height="15" />
                </span>
                <span className="text">bogdandrogomirezkiy@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="footer-copyright-row">
            <p>
              Copyright © {new Date().getFullYear()}
              <IconHeart width="15" height="15" colorFill="#000" colorStroke="#000" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer
