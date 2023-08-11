import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import SectionTitle from '../SharedComponents/SectionTitle';
const Products = () => {
  const products = [
    {
      "pName": "CRM Management Software",
      "pType": "Accounting",
      "price": 20000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-1.jpg",
      "demoUrl": "https://crm.rootcloudex.xyz"
    },
    {
      "pName": "School management software",
      "pType": "Accounting",
      "price": 20000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-2.jpg",
      "demoUrl": "https://school.rootcloudex.xyz"

    },
    {
      "pName": "Hospital management software",
      "pType": "Accounting",
      "price": 20000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-3.jpg",
      "demoUrl": "https://hospital.rootcloudex.xyz"
    },
    {
      "pName": "Computer Mobile Shop/Pos Software",
      "pType": "Accounting",
      "price": 20000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-4.jpg",
      "demoUrl": "https://pos.rootcloudex.xyz"
    },
    {
      "pName": "Pharmacy management software",
      "pType": "Accounting",
      "price": 20000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-5.jpg",
      "demoUrl": "https://pharmacy.rootcloudex.xyz"
    },
    {
      "pName": "Multi Branch Computer Mobile Shop/Pos Software",
      "pType": "Accounting",
      "price": 30000,
      "desc": "A short product description here",
      "pImg": "./assets/Products/product-4.jpg",
      "demoUrl": "https://pos.rootcloudex.xyz"
    }
  ]
  return (
    <>
      <div className="pt-[9rem]" data-aos="fade-up" data-aos-duration="1000">
        <div className='lg:pt-20 md:pb-10 pb-10'>
          <SectionTitle title="Our Awesome " info="Products" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-5 mx-5" data-aos="fade-up" data-aos-duration="1500">
          {/* Product  */}

          {products?.map((item, i) => <div data-aos="fade-up" data-aos-duration="2000" key={i} className="w-full rounded-md shadow-md border-2 border-[#0084FF] p-5 flex lg:flex-row md:flex-col flex-col mb-8 lg:justify-between md:justify-center justify-start items-center ">
            <div className="p-3 bg-[#0D1A36] rounded-md custom-drop-product-section">
              <img src={item.pImg} alt="product img" className="object-cover object-center lg:w-[450px] md:w-[1050px] sm:w-[768px] w-full rounded-t-md h-72 rounded-md" />
            </div>

            {/* ====product info part start===== */}
            <div className='lg:pl-5 pl-0'>
              <h3 className='lg:text-[22px] md:text-xl text-[20px] lg:pt-0 pt-4 font-bold text-white'>{item.pName}</h3>
              <p className='font-bold py-2 text-[16px] tracking-wider text-[#ddd]'>{item.pType}</p>
              <p className='font-bold pb-2 text-2xl text-white mb-[1px]'>One Time: <span className='contact-containter-drop-shadow'>৳</span> {item.price}</p>
              <div className="flex justify-start items-center">
                <p className="text-[17px] tracking-wider pl-2 font-medium text-white">Rating:</p>
                <Rating placeholderRating={5} readonly placeholderSymbol={<FaStar />} className='text-rose-500 pl-2 pt-[5px]' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />}>
                </Rating>
              </div>
              <hr />
              {/* <p className='mt-2 xl:text-[16px] lg:text-[17px] text-[15px] tracking-wide italic text-[#ddd] font-medium'>{item.desc}</p> */}
              <div className='flex justify-center items-center gap-4 mt-7'>
                <a href={item.demoUrl} target='_blank'>
                  <button className='border-2 p-2 bg-rose-500 rounded-md text-white text-[17px] font-bold tracking-wider'>View Demo</button>
                </a>
                <button className='border-2 p-2 hover:bg-[#5129d2b6] rounded-md text-white text-[17px] font-bold tracking-wider'>Buy Now</button>
              </div>
              {/* ====react rating ===== */}

            </div>
            {/* ====product info part end===== */}
          </div>)}


        </div>
      </div>
    </>
  )
}

export default Products