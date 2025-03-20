import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "https://drive.google.com/file/d/19i8d5uL9gT8osjvQwkIGJEOcE5wgSOax/preview",
  "https://drive.google.com/file/d/1A6oaixZfQ5PZqyzmRouRaVflRaf6irOz/preview",
  "https://drive.google.com/file/d/1XYNbBeqEOjBNx9TcFz6_jmbDGnSz2x01/preview"
];
// const videos = [
//   "5DHuBIMdkNE2lv2Y801Wa02t00bcR00xjmzWUnHEDvhL01jQ",
//   "oXjj00ejWRuPycF7bZdnce00lJFarHB4CUHkrqg8stsiE",
//   "1cWtJapwP02iFug6oQpwpemKsyKs4oBpNSy1jiraQktY"
// ];
export default function VideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center !min-h-[100vh]">
      {/* Left Arrow */}
      <button
        className="absolute left-6 hover:bg-gray-600 p-3 z-10 rounded-full shadow-lg"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Video List */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide  w-full h-full"
      >
        <div className="min-w-full h-full flex items-center gap-24 justify-center">

          {videos.map((pId, index) => (
            <div className="relative w-[300px] overflow-hidden rounded-xl items-center flex justify-center" key={index}>
              {/* <VideoMuxPlayer playbackId={pId} /> */}
              <iframe src={pId} width="640" height="480" allow="autoplay"></iframe>
            </div>
          ))}

          {/* <video width="320" height="240" controls>
            <source src="https://jmp.sh/QyBNuEAW" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-6 hover:bg-gray-600 p-3 z-10 rounded-full shadow-lg"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}