import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"
interface content{
    arr:string[]
}

export function HorizontalCarousel({arr}:content) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:w-full  "
    >
      <CarouselContent>
        {arr.map((name, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                 <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 rounded-2xl  bg-card border border-border hover:border-primary/50 transition-colors duration-300"
                    >
                          <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-3xl font-semibold">{name}</span>
                </CardContent>
              </Card>
                    </motion.div>
                    </ScrollReveal>
           
            
          
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
