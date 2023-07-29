import { useEffect, useState } from 'react'
import SectionTitle from '../SharedComponents/SectionTitle';

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
      description: "Provide ongoing maintenance and support for the system.",
      imageUrl: "/src/assets/Images/softwareDevelopSectionImg/softwareImg-7.png",
    },
  ];

  const [selectTab, setSelectTab] = useState('Requirement')
  const [softwareCardData, setSoftwareCardData] = useState([])
  useEffect(() => {
    if (selectTab === 'Requirement') {
      const cardDatas = cardData?.filter(item => item.title === 'Requirement')
      setSoftwareCardData(cardDatas)
    }
    if (selectTab === 'Analysis') {
      const cardDatas = cardData?.filter(item => item.title === 'Analysis')
      setSoftwareCardData(cardDatas)
    }

    if (selectTab === 'Design') {
      const cardDatas = cardData?.filter(item => item.title === 'Design')
      setSoftwareCardData(cardDatas)
    }
    if (selectTab === 'Coding') {
      const cardDatas = cardData?.filter(item => item.title === 'Coding')
      setSoftwareCardData(cardDatas)
    }
    if (selectTab === 'Testing') {
      const cardDatas = cardData?.filter(item => item.title === 'Testing')
      setSoftwareCardData(cardDatas)
    }

    if (selectTab === 'Development') {
      const cardDatas = cardData?.filter(item => item.title === 'Development')
      setSoftwareCardData(cardDatas)
    }
    if (selectTab === 'Maintenance') {
      const cardDatas = cardData?.filter(item => item.title === 'Maintenance')
      setSoftwareCardData(cardDatas)
    }

  }, [selectTab])

  return (
    <>
      <div className='lg:mt-20 md:-mt-10'>
      <SectionTitle title={"How We Develop "} info={"Software"} />
      </div>
      <div className='flex lg:justify-around lg:flex-row md:flex-col flex-col  items-center my-[3rem] lg:gap-20 mt-[6rem]'>
        {/* ====develop softare image data div===== */}
        {softwareCardData?.map((card,i)=><div key={i}><div  className='lg:mt-0 md:-mt-12 -mt-16'>
          <h3 className='lg:text-[4rem] md:text-[3rem] text-[2rem] text-white lg:text-left text-center'>{card.title}</h3>
          <p className='text-[#9CA3AF] lg:text-[18px] md:text-[16px] text-[14px] font-[500] lg:w-[350px] md:w-[400px] w-[275px] lg:mb-0 md:mb-16 mb-16 text-center'>{card.description}</p>
        </div></div>)}
        {/* ====develop softare image div===== */}
        <div>
          <div className="grid grid-cols-3 lg:gap-20 md:gap-16 gap-14">
            {/* ====card-1===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Requirement')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-1.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Requirement</p>
            </div>

            {/* ====card-2===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Analysis')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-2.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Analysis</p>
            </div>

            {/* ====card-3===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Design')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-3.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Design</p>
            </div>

            {/* ====card-4===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Coding')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-4.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Coding</p>
            </div>

            {/* ====card-5===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Testing')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-5.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Testing</p>
            </div>

            {/* ====card-6===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Development')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-6.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Development</p>
            </div>

            {/* ====card-7===== */}
            <div className='software-card-style custom-drop-software-develop-section' onClick={() => setSelectTab('Maintenance')}>
              <img src="/src/assets/Images/softwareDevelopSectionImg/softwareImg-7.png" className='w-full pt-5' alt="software develop png image" />
              <p className='relative top-10 text-white'>Maintenance</p>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default DevelopSoftware
