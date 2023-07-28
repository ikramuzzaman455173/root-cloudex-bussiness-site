import React from "react";
import {FaFacebook,FaLinkedin,FaTwitter,FaWhatsapp} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="w-full">
        {/* <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-gradient-to-r from-[#10152A] to-[#2B273C] pt-16 pb-12 text-sm">
          <div className="container mx-auto">
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:items-start md:items-start items-center mg:flex-wrap lg:justify-center md:justify-between lg:gap-20 md:gap-10 gap-2">
              <div
                className="flex flex-col lg:justify-start lg:items-start lg:text-left md:justify-center md:items-center md:text-center"
                aria-labelledby="footer-header"
              >
                <a href="#">
                  <img
                    className="w-[8rem]"
                    src="https://thebrightfuture.co/static/media/logo.44f52001f3cd1a27b78c.png"
                    alt="site logo"
                  />
                </a>
                <p className="w-[350px] text-[#808080] pt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam.
                </p>
              </div>

              {/* ====social media div===== */}
              <div>
                <h3 className="footer-heading">Social media</h3>
                <a href="https://www.facebook.com" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#3F83F8]">
                  <FaFacebook/>
                  <p>Facebook</p>
                </a>

                <a href="https://www.linkedin.com" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#3F83F8]">
                  <FaLinkedin/>
                  <p>Linked In</p>
                </a>

                <a href="https://www.twitter.com" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#6994DC]">
                  <FaTwitter/>
                  <p>Twitter</p>
                </a>

                <a href="https://www.whatsapp.com" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#2EAB80]">
                  <FaWhatsapp/>
                  <p>Whatsapp</p>
                </a>

              </div>
              {/* ====our service div===== */}

              <div>
                <h3 className="footer-heading">Our Services</h3>
                <a className="footer-link">
                  <p>Web Apps</p>
                </a>

                <a className="footer-link">
                  <p>ECommerce</p>
                </a>

                <a className="footer-link">
                  <p>Mobile Apps</p>
                </a>

                <a className="footer-link">
                  <p>Entertainment</p>
                </a>

                <a className="footer-link">
                  <p>Portfolio</p>
                </a>
              </div>
              {/* ====our product div===== */}
              <div>
                <h3 className="footer-heading">Our Product</h3>
                <a className="footer-link">
                  <p>Polytactnic Reselt Api</p>
                </a>
                <a className="footer-link">
                  <p>POS</p>
                </a>
                <a className="footer-link">
                  <p>Resume Builder</p>
                </a>
                <a className="footer-link">
                  <p>Portfolio Builder</p>
                </a>
            </div>
            </div>
            {/* ====footer end part===== */}
          </div>
        </div>
            <div className="border-t-[1px] border-border-c flex justify-center items-center p-2 text-[#9197A6] bg-[#171C2B]">© Copyright 2022 Bright Future. All rights reserved.</div>
      </footer>
      {/* <!-- End Five Columns Footer with Logo --> */}
    </>
  );
};

export default Footer;
