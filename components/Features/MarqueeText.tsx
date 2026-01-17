const MarqueeText = () => {
  const items = ["ADOPT", "NURTURE", "DELIVER"];

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {[...items, ...items].map((word, index) => (
          <span
            key={index}
            className={`text-[30px] md:text-[40px] font-extrabold tracking-wide flex items-center gap-7 ${
              word === "NURTURE"
                ? "text-transparent stroke-text"
                : "text-[#99B81B]"
            }`}
          >
            {word}
            <span className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#99B81B] inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
