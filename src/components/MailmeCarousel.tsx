

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
          <CarouselItem key={index} className="basis-1/4 md:basis-1/4">
            <div className="">
              <Card className=" bg-blacks border-none ">
                <CardContent className="flex  items-center justify-start">
                 
                  <div className="flex flex-col justify-start  ">
                     <h1 className="text-primary text-[7px] font-body">@{ name.username.toUpperCase()}</h1>
                    
                      <div className="flex items-center  ">
                       
                       <img className="rounded-2xl mx-2 w-5 h-5 border border-2 border-primary " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s" alt="" />
                      <span className="text-sm border bg-primary h-auto py-2 px-10 rounded-xl  font-body">{name.comment}</span>
                      </div>
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
