"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

export default function Testimony() {
    const testimonials = [
        {
            quote: "The pani puri here is absolutely amazing! Crispy, flavorful, and the perfect amount of spice. I come here every week!",
            name: "Priya Sharma",
            role: "Food Blogger"
        },
        {
            quote: "Best street snacks in town! The momos are to die for, and the service is always friendly and quick.",
            name: "Rahul Mehta",
            role: "Regular Customer"
        },
        {
            quote: "Authentic taste that reminds me of home. The bhel puri and sev puri are made perfectly every single time.",
            name: "Anjali Patel",
            role: "Food Enthusiast"
        },
        {
            quote: "The UFO burgers are unique and delicious! Love the creativity and quality of ingredients used here.",
            name: "Mike Johnson",
            role: "Local Foodie"
        },
        {
            quote: "Fresh, tasty, and affordable. The deep fried snacks are crispy perfection. Highly recommend the mirchi bajji!",
            name: "Sneha Reddy",
            role: "Happy Customer"
        },
        {
            quote: "The falooda is the best I've had outside of India. Rich, creamy, and absolutely refreshing!",
            name: "Arjun Singh",
            role: "Dessert Lover"
        }
    ];

    return (
        <div className="py-16 px-4">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 text-wp-red">
                        What Our Customers Say
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our happy customers
                    </p>
                    <div className="mt-6 h-1 w-24 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="max-w-7xl mx-auto">
                <Carousel 
                    opts={{
                        align: "start",
                        loop: true,
                    }} 
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="relative"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="relative mx-auto w-full h-full border-2 transition-all duration-300 hover:shadow-xl bg-amber-100">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-3 shadow-lg">
                                            <Quote className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    
                                    <CardHeader className="text-center pt-8 pb-6 px-6">
                                        {/* Testimonial Text */}
                                        <CardTitle className="text-lg font-medium text-gray-700 leading-relaxed mb-6 min-h-30 flex items-center justify-center">
                                            "{testimonial.quote}"
                                        </CardTitle>
                                        
                                        {/* Divider */}
                                        <div className="w-16 h-0.5 bg-linear-to-r from-orange-400 to-red-400 mx-auto mb-4"></div>
                                        
                                        {/* Customer Info */}
                                        <div>
                                            <CardDescription className="text-base font-semibold text-gray-900 mb-1">
                                                {testimonial.name}
                                            </CardDescription>
                                            <CardDescription className="text-sm text-orange-600">
                                                {testimonial.role}
                                            </CardDescription>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex justify-center mt-4 gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation Buttons */}
                    <CarouselPrevious className="left-0 -translate-x-1/2 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all" />
                    <CarouselNext className="right-0 translate-x-1/2 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all" />
                </Carousel>
            </div>
        </div>
    );
}