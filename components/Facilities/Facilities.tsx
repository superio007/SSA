import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import Trophy from "@/assets/Trophy.webp";
import PosterImage1 from "@/assets/PosterImage1.webp";
import PosterImage2 from "@/assets/PosterImage2.webp";
import PosterImage3 from "@/assets/PosterImage3.webp";
import PosterImage4 from "@/assets/PosterImage4.webp";
import { Play } from "lucide-react";

const Facilitie = [
  {
    name: "Tennis",
    courts: ["9 Clay Courts", "4 Hard Courts "],
    image: PosterImage1,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "Accommodation",
    courts: ["5 Star Hotel"],
    image: PosterImage2,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const Facilitie2 = [
  {
    name: "Fitness",
    courts: ["Gym", "Fitness Room"],
    image: PosterImage3,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "Recovery",
    courts: ["Spa", "Pool", "Massage"],
    image: PosterImage4,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const Facilities = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-8 px-6 xl:px-32 py-18">
        <div className="flex md:flex-row flex-col w-full justify-between items-start gap-4 md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize relative">
              Facilities{" "}
              <span className="h-2.5 w-2.5 bg-[#99B81B] rounded-full absolute top-2 ml-2"></span>
            </h2>
            <p className="text-[16px] font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative hidden xl:flex justify-center items-center"
        style={{
          background:
            "linear-gradient(103.14deg, #002F50 11.16%, #99B81B 111.06%)",
          height: " 683px",
          marginTop: "8rem",
          marginBottom: "23rem",
        }}
      >
        <div
          className="container mx-auto flex absolute justify-start gap-12 items-center"
          style={{ paddingLeft: "12rem", top: "-10rem" }}
        >
          {Facilitie.map((facility, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  className="object-cover rounded-xl"
                />

                {/* Center Play Button */}
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="bg-white rounded-full p-3">
                    <Play className="w-6 h-6 text-black" />
                  </span>
                </button>
              </div>

              <div
                style={{ width: "330px" }}
                className="flex flex-col mt-4 gap-4"
              >
                <h2 className="text-2xl text-white font-medium">
                  {facility.name}
                </h2>
                <div className="flex gap-4">
                  {facility.courts.map((court, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-black p-2 rounded-full"
                    >
                      {court}
                    </span>
                  ))}
                </div>

                <p className="text-white text-[16px] font-light">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="container mx-auto flex absolute justify-start gap-12 items-center"
          style={{ paddingLeft: "12rem", bottom: "-20rem", right: "17rem", width:"max-content" }}
        >
          {Facilitie2.map((facility, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  className="object-cover rounded-xl"
                />

                {/* Center Play Button */}
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="bg-white rounded-full p-3">
                    <Play className="w-6 h-6 text-black" />
                  </span>
                </button>
              </div>

              <div
                style={{ width: "330px" }}
                className="flex flex-col mt-4 gap-4"
              >
                <h2 className="text-2xl font-medium">{facility.name}</h2>
                <div className="flex gap-4">
                  {facility.courts.map((court, idx) => (
                    <span
                      key={idx}
                      className="bg-[#99B81B] text-white p-2 rounded-full"
                    >
                      {court}
                    </span>
                  ))}
                </div>

                <p className=" text-[16px] font-light">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full h-full absolute z-1111 bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: `url(${Trophy.src})` }}
        ></div>
      </div>
      <div
        className="relative xl:hidden flex justify-center items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(103.14deg, #002F50 11.16%, #99B81B 111.06%)",
          height: "683px",
        }}
      >
        <div className="w-full relative z-10 pl-6">
          <div
            className="w-[70%] flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {[...Facilitie, ...Facilitie2].map((facility, index) => (
              <div
                key={index}
                className="relative snap-start shrink-0"
                style={{ width: "330px" }}
              >
                <div className="relative">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    className="w-69.5 md:h-93.25 object-cover rounded-xl"
                  />

                  <button className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white rounded-full p-3">
                      <Play className="w-6 h-6 text-black" />
                    </span>
                  </button>
                </div>

                <div className="flex flex-col mt-4 gap-4">
                  <h2 className="text-2xl text-white font-medium">
                    {facility.name}
                  </h2>

                  <div className="flex gap-4 flex-wrap">
                    {facility.courts.map((court, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-black px-4 py-2 rounded-full text-sm"
                      >
                        {court}
                      </span>
                    ))}
                  </div>

                  <p className="text-white text-[16px] font-light">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-full h-[80%] absolute z-100 bg-no-repeat bg-right bg-contain pointer-events-none"
          style={{ backgroundImage: `url(${Trophy.src})` }}
        ></div>
      </div>
    </>
  );
};
export default Facilities;
