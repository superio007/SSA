type TabContentProps = {
  data: {
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    buttonText: string;
  };
};
import About from "@/assets/About.webp";
import Image from "next/image";
const TabContent = ({ data }: TabContentProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-12 mt-8">
      {/* Left */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h3 className="font-bold text-4xl relative">
          {data.title || "About Us"}{" "}
          <span className="h-2.5 w-2.5 bg-[#99b81c] rounded-full absolute top-2 ml-2"></span>
        </h3>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          {data.description}
        </p>

        <div className="flex gap-10 flex-wrap mt-2">
          {data.stats.map((item, idx) => (
            <div key={idx} className="flex flex-col text-center">
              <span className="text-3xl font-bold text-[#99b81c]">
                {item.value}
              </span>
              <span className="text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        <button className="w-fit px-6 py-2 rounded-full bg-[#99b81c] text-white font-medium mt-4">
          {data.buttonText}
        </button>
      </div>

      {/* Right (you will place your images grid here later) */}
      <Image
        src={About}
        alt="About"
        className="w-full lg:w-1/2 object-cover rounded-xl"
      />
    </div>
  );
};

export default TabContent;
