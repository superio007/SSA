import TestimonialsBack from "@/assets/TestimonialsBack.webp";

const Testimonials = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center py-14 md:py-28"
        style={{
          backgroundImage: `url(${TestimonialsBack.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col px-6 gap-7 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            "We have created an environment ideal for <br /> building craft. Our
            goal is to be recognized as the <br /> best tennis performance
            centre in the world."
          </h2>
          <div className="w-1/2 h-px bg-white"></div>
          <div>
            <h3 className="text-white font-medium text-xl">John Doe</h3>
            <p className="text-white font-normal text-[16px]">chairman</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
