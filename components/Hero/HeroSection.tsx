"use client";

import { useState } from "react";
import HeroBack from "@/assets/HeroBack.webp";
import { MoveDown, ChevronsLeft, MapPin, X } from "lucide-react";

type PanelType = "weather" | "matches" | "score" | null;

const HeroSection = () => {
  const [activePanel, setActivePanel] = useState<PanelType>(null);

  const togglePanel = (panel: Exclude<PanelType, null>) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const closePanel = () => setActivePanel(null);

  return (
    <div
      className="w-full h-screen bg-cover bg-center text-center flex flex-col gap-3 justify-center items-center relative"
      style={{ backgroundImage: `url(${HeroBack.src})` }}
    >
      {/* Overlay (click outside closes panel) */}
      {activePanel && (
        <div onClick={closePanel} className="absolute inset-0 z-20" />
      )}

      <p className="text-white text-xl relative z-10">SSA HUNTER VALLEY</p>

      <h1 className="font-light uppercase hidden md:block text-white text-3xl md:text-5xl relative z-10">
        Grow Your Game with the <br />
        <span className="font-bold border-b-2 pb-2 border-white">
          Professionals
        </span>
      </h1>

      <h1 className="font-light uppercase md:hidden text-white text-3xl relative z-10">
        Grow Your Game with the {""}
        <span className="font-bold border-b-2 pb-2 border-white">
          Professionals
        </span>
      </h1>

      <div className="bg-[linear-gradient(90deg,rgba(205,237,78,0)_3.45%,#D2F24F_50.62%,rgba(210,242,79,0)_91.38%)] uppercase p-1 text-white flex justify-center items-center gap-6 text-xl md:text-2xl mt-4 relative z-10">
        <span>adopt</span>
        <span className="w-3 h-3 bg-white rounded-full" />
        <span>nurture</span>
        <span className="w-3 h-3 bg-white rounded-full" />
        <span>deliver</span>
      </div>

      <div className="border border-[#99B81B] text-white text-center px-5 py-2 capitalize rounded-full cursor-pointer mt-3 relative z-10">
        register now
      </div>

      <div className="absolute bottom-16 z-10">
        <MoveDown className="animate-bounce" color="#99B81B" size={36} />
      </div>

      {/* Right Menu */}
      <div className="absolute right-0 bottom-24 flex flex-col gap-3 pr-4 text-left z-30">
        <button
          onClick={() => togglePanel("weather")}
          className="flex gap-2 items-center"
        >
          <ChevronsLeft color="#99B81B" size={18} />
          <span className="uppercase text-white text-xs tracking-widest hover:cursor-pointer hover:text-[#99B81B]">
            weather
          </span>
        </button>

        <button
          onClick={() => togglePanel("matches")}
          className="flex gap-2 items-center"
        >
          <ChevronsLeft color="#99B81B" size={18} />
          <span className="uppercase text-white text-xs tracking-widest hover:cursor-pointer hover:text-[#99B81B]">
            ongoing matches
          </span>
        </button>

        <button
          onClick={() => togglePanel("score")}
          className="flex gap-2 items-center"
        >
          <ChevronsLeft color="#99B81B" size={18} />
          <span className="uppercase text-white text-xs tracking-widest hover:cursor-pointer hover:text-[#99B81B]">
            score
          </span>
        </button>
      </div>

      {/* Panel Box */}
      {activePanel && (
        <div className="absolute right-0 bottom-40 w-[320px] backdrop-blur-sm p-5 text-left z-30">
          <button
            onClick={closePanel}
            className="absolute top-2 right-2 text-white"
          >
            <X size={18} />
          </button>

          {activePanel === "weather" && (
            <div className="bg-[#99B81B]/80 p-5 hover:cursor-pointer -m-5">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={16} />
                <p className="font-semibold">Hunter Valley</p>
              </div>

              <div className="mt-4 flex items-end justify-between text-white">
                <div className="text-5xl font-bold leading-none">
                  19<span className="text-xl align-top">°C</span>
                </div>

                <div className="text-right">
                  <p className="font-semibold">Weather</p>
                  <p className="text-xs opacity-90">Saturday, 8 pm</p>
                </div>
              </div>
            </div>
          )}

          {activePanel === "matches" && (
            <div className="bg-[#99B81B]/80 p-5 hover:cursor-pointer -m-5 text-white">
              <p className="uppercase text-sm font-semibold tracking-widest">
                Ongoing Matches
              </p>

              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Team A vs Team B</span>
                  <span className="text-[#99B81B]">Live</span>
                </div>
                <div className="flex justify-between">
                  <span>Team C vs Team D</span>
                  <span className="text-[#99B81B]">Live</span>
                </div>
              </div>
            </div>
          )}

          {activePanel === "score" && (
            <div className="bg-[#99B81B]/80 p-5 hover:cursor-pointer -m-5 text-white">
              <p className="uppercase text-sm font-semibold tracking-widest">
                Score
              </p>

              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Player 1</span>
                  <span className="font-semibold">21</span>
                </div>
                <div className="flex justify-between">
                  <span>Player 2</span>
                  <span className="font-semibold">18</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
