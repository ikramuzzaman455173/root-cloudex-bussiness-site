import SectionTitle from "../SharedComponents/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceProvider = () => {
  const serviceCard = [
    {
      id: 1,
      Image: './assets/service/service-1.gif',
      name: "Thumbnail Design",
      desc: "Craft eye-catching and professional thumbnails that grab attention and entice viewers to click, boosting your content's visibility and engagement."
    },
    {
      id: 2,
      Image: './assets/service/service-2.gif',
      name: "Video Edit",
      desc: "Polish and refine your videos with expert editing techniques, enhancing visual appeal, storytelling, and overall quality to leave a lasting impact on your audience."
    },
    {
      id: 3,
      Image: './assets/service/service-3.gif',
      name: "Short Edit",
      desc: "Transform your raw footage into captivating short videos optimized for mobile consumption, perfect for social media platforms and capturing audience attention in a fast-paced world."
    },
    {
      id: 4,
      Image: './assets/service/service-2.gif',
      name: "YouTube SEO",
      desc: "Boost your YouTube channel's visibility and ranking with proven SEO strategies tailored to optimize your content, attract more viewers, and drive organic growth."
    },
  ];


  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      {/* Gradient overlay */}
      {/* SectionTitle component */}
      <div className="relative lg:mt-[15rem] md:mt-[10rem] mt-[7rem]" data-aos="fade-up" data-aos-duration="1500"><SectionTitle title={"Services We "} info={"Provide"} /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-24 mx-5 ">
        {/* ====card part start===== */}
        {serviceCard?.map((item) => <ServiceCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default ServiceProvider;