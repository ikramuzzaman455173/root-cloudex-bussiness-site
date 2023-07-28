import {useEffect} from 'react'

const DevelopSoftware = () => {
  const cardData = [
    {
      id: 1,
      title: "Requirement",
      description: "Gather and document project requirements.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-1.png",
    },
    {
      id: 2,
      title: "Analysis",
      description: "Gather and document project requirements.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-2.png",
    },
    {
      id: 3,
      title: "Design",
      description: "The requirement specifications from first phase are studied in this phase and the system design is prepared. This system design helps in specifying hardware and system requirements and helps in defining the overall system architecture.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-3.png",
    },
    {
      id: 4,
      title: "Coding",
      description: "With inputs from the system design, the system is first developed in small programs called units, which are integrated in the next phase. Each unit is developed and tested for its functionality, which is referred to as Unit Testing",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-4.png",
    },
    {
      id: 5,
      title: "Testing",
      description: "Test the system components and integrate them into a working system.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-5.png",
    },
    {
      id: 6,
      title: "Development",
      description: "Deploy the system to the production environment.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-6.png",
    },
    {
      id: 7,
      title: "Maintenance",
      descruption: "Provide ongoing maintenance and support for the system.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-7.png",
    },
    // Add more objects here for additional cards
  ];

  const [selectTab, setSelectTab] = useState('Requirement')
  useEffect(() => {
    if (selectTab === 'Requirement') {
      setPortfolio(data)
    }
    if (selectTab === 'Analysis') {
      const filterData = data?.filter(item => item.title === 'Analysis')
      setPortfolio(filterData)
    }

    if (selectTab === 'Design') {
      const filterData = data?.filter(item => item.title === 'Design')
      setPortfolio(filterData)
    }
    if (selectTab === 'Coding') {
      const filterData = data?.filter(item => item.title === 'Coding')
      setPortfolio(filterData)
    }
    if (selectTab === 'Testing') {
      const filterData = data?.filter(item => item.title === 'Testing')
      setPortfolio(filterData)
    }

    if (selectTab === 'Development') {
      const filterData = data?.filter(item => item.title === 'Development')
      setPortfolio(filterData)
    }
    if (selectTab === 'Maintenance') {
      const filterData = data?.filter(item => item.title === 'Maintenance')
      setPortfolio(filterData)
    }

  }, [selectTab])

  return (
    <div className='bg-[#020A1C] w-full h-screen'>
      {/* <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Develop software Components 😃</div> */}
      <h3 className='text-2xl text-center text-white font-[500] lg:-mt-20'>How We Develop <span className='text-[#00D0FF] custom-drop-shadow'>Software</span></h3>
      <div className='w-[5rem] h-[6px] rounded-md bg-[#3F83F8] mx-auto mt-2'></div>
      <div className='flex lg:justify-around items-center my-[3rem] lg:gap-20 mt-[6rem]'>
        {/* ====develop softare image data div===== */}
        <div>
          <h3 className='text-[4rem] text-white'>Requirement</h3>
          <p className='text-[#9CA3AF] text-[20px] font-[500]'>Gather and document project requirements.</p>
        </div>
        {/* ====develop softare image div===== */}
        <div>
          {/* ====correct and best pactise for defined image source path===== */}
          {/* <div className='w-[100px] h-[100px] p-5 border-[#00D0FF] border-2 custom-drop-software-develop-section transition duration-300 rounded-lg bg-[#1F323B] flex justify-center items-center hover:cursor-pointer'>
          <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-1.png" className='w-[90%]' alt="software develop png image" />
            </div> */}
          {/* <div className='w-[100px] h-[100px] p-5 border-[#00D0FF] border-2 custom-drop-software-develop-section transition duration-300 rounded-lg bg-[#1F323B] flex justify-center items-center hover:cursor-pointer transform hover:scale-110'>
            <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-1.png" className='w-[90%]' alt="software develop png image" />
          </div> */}

          <div className="grid grid-cols-3 gap-24">
            {cardData.map((card) => (
              <div className='w-[100px] h-[100px] p-5 border-[#00D0FF] border-2 custom-drop-software-develop-section transition duration-300 rounded-lg bg-[#1F323B] flex flex-col justify-center items-center hover:cursor-pointer transform hover:scale-110'>
                <img src={card.imageUrl} className='w-full pt-5' alt="software develop png image" />
                <p className='relative top-10 text-white'>{card.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DevelopSoftware


