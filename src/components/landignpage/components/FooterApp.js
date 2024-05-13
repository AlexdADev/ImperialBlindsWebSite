import React from "react"
import Mails from './Mails'
import logo2 from './img/logo2.svg'
import facebook from './img/gg_facebook.svg'
import instagram from './img/bi_instagram.svg'
import whatsapp from './img/ic_sharp-whatsapp.svg'

export const Footer = () => <footer className="page-footer font-small blue pt-4 " style={{ backgroundColor: "#1c768f" }}    >
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3 d-flex flex-column align-items-center ">
                <Mails />
            </div>
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-4 mt-md-0 mt-3 d-flex flex-column align-items-center">
                <ul className="list-unstyled">
                    <div id='box1'>
                        <img src={logo2} alt="Logo" />
                    </div>
                </ul>
            </div>

            <div className="col-md-4 mt-md-0 mt-3 d-flex flex-column align-items-center">
                <ul className="list-unstyled">
                    <li className="listas">
                        <div className="d-flex align-items-center">
                            <img src={facebook} alt="Logo Facebook" />
                            <a href='https://www.instagram.com/imperialblinds_miami_texas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="ml-2 link-link">
                                Facebook
                            </a>
                        </div>
                    </li>
                    <li className="listas">
                        <div className="d-flex align-items-center">
                            <img src={instagram} alt="Logo Instagram" />
                            <a href='https://www.instagram.com/imperialblinds_miami_texas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="ml-2 link-link">
                                Instagram
                            </a>
                        </div>
                    </li>
                    <li className="listas">
                        <div className="d-flex align-items-center">
                            <img src={whatsapp} alt="Logo WhatsApp" />
                            <a href='https://wa.link/79uj5d' className="ml-2 link-link">
                                WhatsApp
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
    </div>

</footer>

export default Footer
