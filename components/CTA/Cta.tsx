import Link from "next/link";
import { MoveRight } from "lucide-react";
import batmentonGraphics from "@/assets/batmenton-graphics.png";
import CtaBack from "@/assets/CtaBack.png";

const CTA = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div
        className="w-full md:w-1/2 text-white flex flex-col gap-4.5 h-69.5 justify-center  md:px-16 relative overflow-hidden"
        style={{ backgroundImage: `url(${CtaBack.src})` }}
      >
        <div className="relative z-100 flex flex-col gap-4.5 px-6">
          <h2 className="font-bold text-4xl relative">
            Our Coaches{" "}
            <span className="h-2.5 w-2.5 bg-white rounded-full absolute top-2 ml-2"></span>
          </h2>

          <p>
            Lorem Ipsum has been the industry's standard <br /> dummy text ever
            since the 1500s,
          </p>

          <Link
            href="/read-more"
            className="capitalize font-normal text-[16px]"
          >
            read more <MoveRight size={16} className="inline-block ml-1" />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#99b81c] text-white flex flex-col gap-4.5 h-69.5 justify-center  md:px-16 relative overflow-hidden">
        <div className="relative z-100 flex flex-col gap-4.5 px-6">
          <h2 className="font-bold text-4xl relative">
            Events
            <span className="h-2.5 w-2.5 bg-white rounded-full absolute top-2 ml-2"></span>
          </h2>

          <p>
            Lorem Ipsum has been the industry's standard <br /> dummy text ever
            since the 1500s,
          </p>

          <Link
            href="/read-more"
            className="capitalize font-normal text-[16px]"
          >
            read more <MoveRight size={16} className="inline-block ml-1" />
          </Link>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-contain bg-right pointer-events-none"
          style={{ backgroundImage: `url(${batmentonGraphics.src})` }}
        />
      </div>
    </div>
  );
};

export default CTA;
