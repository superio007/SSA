import Image from "next/image";
import CraigTiley from "@/assets/CraigTiley.webp";
import StephenFarrow from "@/assets/StephenFarrow.webp";
import CameronPearson from "@/assets/CameronPearson.webp";
const Team = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    image: CraigTiley,
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    image: StephenFarrow,
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    image: CameronPearson,
  },
];
const Programs = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-8 p-6 xl:px-32">
        <div className="flex md:flex-row flex-col w-full justify-between items-start gap-4 md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize relative">
              Meet our professionals{" "}
              <span className="h-2.5 w-2.5 bg-[#99B81B] rounded-full absolute top-2 ml-2"></span>
            </h2>
            <p className="text-[16px] font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
          <div className="bg-[#99B81B] text-sm text-center py-3 px-6 capitalize hover:cursor-pointer hover:opacity-90 text-white rounded-full ">
            register now
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          {Team.map((member, index) => (
            <div key={index} className="flex w-full flex-col gap-3">
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-sm font-light">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Programs;
