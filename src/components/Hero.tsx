"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
    <Carousel opts={{
      align: "start",
      loop: true,
    }} 
    plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    className="relative h-screen w-[94%] overflow-hidden mt-4">
      <CarouselContent className="h-screen">
        <CarouselItem className="h-screen">
          <div className="relative flex justify-center items-center h-11/12">
            <Image
              src="/assets/momos.png"
              alt="Momos"
              fill
              className="object-fill"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-screen">
          <div className="relative flex justify-center items-center h-11/12">
            <Image
              src="/assets/falooda.png"
              alt="Falooda"
              fill
              className="object-fill"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-screen">
          <div className="relative flex justify-center items-center h-11/12">
            <Image
              src="/assets/burgers.png"
              alt="Burger"
              fill
              className="object-fill"
            />
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
    </div>
  );
}