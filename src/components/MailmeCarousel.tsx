

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { userComents } from "./Mailme";



interface Props {
  user: userComents[];
}

export function MailmeCarousel({user}:Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs h-80"
    >
      <CarouselContent className=" h-[350px]">
        {user.map((name, index) => (
          <CarouselItem key={index} className=" md:basis-1/2">
            <div className="">
              <Card>
                <CardContent className="flex  items-center justify-center p-1">
                  <img className="rounded-2xl w-10 h-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s" alt="" />
                  <div className="flex flex-col items-center p-2">
                    
                    <span className="text-sm font-bold ">@{name.username}</span>
                    <span className="text-sm ">"{name.comment}"</span>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
