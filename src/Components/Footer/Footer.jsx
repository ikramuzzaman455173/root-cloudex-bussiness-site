import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="w-full">
        {/* <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-gradient-to-r from-[#090d18] to-[#0b0024] pt-16 pb-12 text-sm">
          <div className="container mx-auto">
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:items-start md:items-start items-center md:flex-wrap lg:justify-center md:justify-between lg:gap-20 md:gap-10 gap-2">
              <div
                className="flex flex-col lg:justify-start lg:items-start lg:text-left md:justify-center md:items-center md:text-center"
                aria-labelledby="footer-header"
              >
                <a href="#">
                  <img
                    className="lg:w-[10rem] w-[15rem]"
                    src="/src/assets/Images/logo/For Website.png"
                    alt="site logo"
                  />
                </a>
                <p className="w-[350px] text-white pt-4 lg:pb-0 pb-10">
                  Root Cloudex  is a Website Development & Software Development Company in Dhaka, Bangladesh transformed as specialized digital interactive organization.
                </p>
              </div>

              {/* ====social media div===== */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                  <h3 className="footer-heading">Social media</h3>
                  <a href="https://www.facebook.com/RootCloudex/" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#3F83F8]">
                    <FaFacebook />
                    <p>Facebook</p>
                  </a>

                  <a href="https://www.linkedin.com/company/rootcloudex" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#3F83F8]">
                    <FaLinkedin />
                    <p>Linked In</p>
                  </a>

                  <a href="https://www.twitter.com" target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#6994DC]">
                    <FaTwitter />
                    <p>Twitter</p>
                  </a>

                  <a href="https://api.whatsapp.com/send?phone=8801742057743&text=I%20am%20contracted%20with%20your%20website.%20I%20need%20your%20services." target="_blank" className="flex items-center gap-2 my-4 text-[18px] text-[#2EAB80]">
                    <FaWhatsapp />
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
            </div>
            {/* ====footer end part===== */}
          </div>
        </div>
        <div className="border-t-[1px] border-border-c flex justify-center items-center p-2 text-white bg-gradient-to-r from-[#090d18] to-[#0b0024]">© Copyright <span className="font-[500] pl-2 custom-drop-software-develop-section">Root Cloudex</span>. All rights reserved.</div>
      </footer>
      {/* <!-- End Five Columns Footer with Logo --> */}
    </>
  );
};

export default Footer;