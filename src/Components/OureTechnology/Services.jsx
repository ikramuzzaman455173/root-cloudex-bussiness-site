import React from 'react'
import { BiCodeAlt } from "react-icons/bi";
const Services = () => {
  //todo:service array
  const frontednd = ['/src/assets/Images/Technology/frontend/frontend-1.png', '/src/assets/Images/Technology/frontend/frontend-2.png', '/src/assets/Images/Technology/frontend/frontend-3.png', '/src/assets/Images/Technology/frontend/frontend-4.png', '/src/assets/Images/Technology/frontend/frontend-5.png', '/src/assets/Images/Technology/frontend/frontend-6.png', '/src/assets/Images/Technology/frontend/frontend-7.png', '/src/assets/Images/Technology/frontend/frontend-8.png']
  const backend = ['/src/assets/Images/Technology/backend/backend-1.png', '/src/assets/Images/Technology/backend/backend-2.png', '/src/assets/Images/Technology/backend/backend-3.png', '/src/assets/Images/Technology/backend/backend-4.png', '/src/assets/Images/Technology/backend/backend-5.png', '/src/assets/Images/Technology/backend/backend-6.png']
  const tools = ['/src/assets/Images/Technology/tools/tools-1.png', '/src/assets/Images/Technology/tools/tools-2.png', '/src/assets/Images/Technology/tools/tools-3.png', '/src/assets/Images/Technology/tools/tools-4.png', '/src/assets/Images/Technology/tools/tools-5.png', '/src/assets/Images/Technology/tools/tools-6.png', '/src/assets/Images/Technology/tools/tools-7.png']
  const app = ['/src/assets/Images/Technology/app/app-1.png', '/src/assets/Images/Technology/app/app-2.png']
  const payment = ['/src/assets/Images/Technology/payment/payment-1.png', '/src/assets/Images/Technology/payment/payment-2.png']

  return (
    <>
      <section id='service' >
        <div className="container">
          <div className="flex flex-col justify-center">
            <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-color antialiased text-sm font-semibold">
                {/* ====vertical line running through the middle===== */}
                <div className="hidden absolute w-1 sm:block bg-white h-full left-1/2 transform -translate-x-1/2"></div>

                {/* ====left card start===== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-right" data-aos-duration="1200" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          {/* ====frontend development part start===== */}
                          <div className='technology-badge-button right-[15rem] shape-box '>front end development</div>
                          <div className='flex flex-wrap w-[450px] gap-4 h-auto border-white border-[1px] rounded relative right-[15rem] bg-[#0E172D] p-5'>
                            {frontednd?.map((item, i) => <div className=''>
                              <img src={item} className='w-[50px] h-[50px] border-[1px] border-[#0084FF] p-2 rounded-md' alt="" />
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl' />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ====left card end===== */}

                {/* ====right card start===== */}

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-left" data-aos-duration="1200" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          {/* ====frontend development part start===== */}
                          <div className='technology-badge-button left-[5rem] shape-box '>back end development</div>
                          <div className='flex flex-wrap w-[450px] gap-4 h-auto border-white border-[1px] rounded relative left-[5rem] bg-[#0E172D] p-5'>
                            {backend?.map((item, i) => <div className=''>
                              <img src={item} className='w-[50px] h-[50px] border-[1px] border-[#0084FF] p-2 rounded-md' alt="" />
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl' />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ====right card end===== */}


                {/* ====left card start===== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-right" data-aos-duration="1200" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          {/* ====frontend development part start===== */}
                          <div className='technology-badge-button right-[15rem] shape-box '>tools</div>
                          <div className='flex flex-wrap w-[450px] gap-4 h-auto border-white border-[1px] rounded relative right-[15rem] bg-[#0E172D] p-5'>
                            {tools?.map((item, i) => <div className=''>
                              <img src={item} className='w-[50px] h-[50px] border-[1px] border-[#0084FF] p-2 rounded-md' alt="" />
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl' />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ====left card end===== */}

                {/* ====right card start===== */}

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-left" data-aos-duration="1200" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          {/* ====frontend development part start===== */}
                          <div className='technology-badge-button left-[5rem] shape-box '>app</div>
                          <div className='flex flex-wrap w-[450px] gap-4 h-auto border-white border-[1px] rounded relative left-[5rem] bg-[#0E172D] p-5'>
                            {app?.map((item, i) => <div className=''>
                              <img src={item} className='w-[50px] h-[50px] border-[1px] border-[#0084FF] p-2 rounded-md' alt="" />
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl' />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ====right card end===== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-right" data-aos-duration="1200" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          {/* ====frontend development part start===== */}
                          <div className='technology-badge-button right-[15rem] shape-box '>payment</div>
                          <div className='flex flex-wrap w-[450px] gap-4 h-auto border-white border-[1px] rounded relative right-[15rem] bg-[#0E172D] p-5'>
                            {payment?.map((item, i) => <div className=''>
                              <img src={item} className='w-[50px] h-[50px] border-[1px] border-[#0084FF] p-2 rounded-md' alt="" />
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl' />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ====left card end===== */}




              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services


//todo:reused
                {/* ====right card start===== */}
                {/* <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">

                    <div className="flex justify-end w-full mx-auto items-center md:my-0 mb-5">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className="service-left-card p-4 rounded shadow-md group cursor-pointer ease-in duration-150">
                          <h3 className='service-card title-color '>Backend development</h3>
                          <p className='service-card-p text-color'>I will handle server-side development using Node.js and Express.js</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-primaryColor border-4 w-16 h-16 bg-[#0084FF] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                        <BiCodeAlt className='text-white font-[500] text-2xl'/>
                      </figure>
                    </div>



                  </div>
                </div> */}
