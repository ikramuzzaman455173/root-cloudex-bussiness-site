import SectionTitle from "../SharedComponents/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceProvider = () => {
  const serviceCard = [
    {
      id: 1,
      Image: 'https://www.thebrightfuture.co/static/media/ui.7a931547ddca0b390b85.gif',
      name: "UI/UX Design",
      desc: "Transform your digital presence with our top-notch UI/UX design services. We create visually stunning interfaces using Figma, ensuring high-quality and user-friendly designs. Let us enhance your user experience and create a visually appealing product that captivates your audience."
    },
    {
      id: 2,
      Image: 'https://www.thebrightfuture.co/static/media/web.5c602247244d97e532f4.gif',
      name: "Web Development",
      desc: "Empower your business with our comprehensive web development services. From dynamic websites to web applications, we deliver solutions tailored to your needs. Our skilled developers prioritize responsive design and intuitive navigation, ensuring a seamless experience for your visitors."
    },
    {
      id: 3,
      Image: 'https://www.thebrightfuture.co/static/media/app.28b5bc3b870092ee9f76.gif',
      name: "App Development",
      desc: "Step into mobile innovation with our expert app development services. We create feature-rich apps for iOS and Android, prioritizing functionality and user experience. Let us turn your app idea into a reality and propel your business to new heights."
    }
  ];

  return (
    <>
      {/* Gradient overlay */}
      {/* SectionTitle component */}
        <div className="relative mt-32 z-[40]"><SectionTitle title={"Services We "} info={"Provide"} /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 mx-5 ">
          {/* ====card part start===== */}
          {serviceCard?.map((item) => <ServiceCard key={item.id} item={item} />)}
        </div>
    </>
  );
};

export default ServiceProvider;