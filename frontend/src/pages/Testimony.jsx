import "../App.css";
import Header from "@/components/Header.jsx";
import ImgPerson from "../assets/person.jpg";
import FeedbacksImage from "@/assets/feedbacks.jpg";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import Footer from "@/components/Footer.jsx";

export default function Testimony() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Marketing Director",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "The level of service and attention to detail is outstanding. They're helped us transform our marketing operations.",
    },
    {
      name: "Michael Cross",
      company: "CEO, CrossTech",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "Exceptional product and even better support team. Couldn't be happier with our decision.",
    },
    {
      name: "Emily Rodriguez",
      company: "Operations Manager",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "Their platform has streamlined our workflow and increased productivity by 35%.",
    },
    {
      name: "David Kim",
      company: "Tech Startup Founder",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "The best decision we made for our business this year. Would recommend without hesitation.",
    },
    {
      name: "Lisa Thompson",
      company: "Product Manager",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "No matter what we need to design and implement, customer support is highly recommended.",
    },
    {
      name: "James Wilson",
      company: "Financial Advisor",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "Their solution has transformed how we handle our daily operations. Simply amazing.",
    },
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "12K+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24/7", label: "Support Provided" },
  ];

  return (
    <>
      <main>
        <div
          style={{ backgroundImage: `url(${testimonials})` }}
          className={`h-screen w-screen bg-cover bg-blend-darken bg-black bg-opacity-60`}
        >
          <Header IsTransparent={true} />
          <div className="space-y-12">
            <section className="relative text-white">
              <div className="container mx-auto px-4 py-16 md:py-24 text-center">
                <h1 className="text-3xl md:text-4xl font-bold  mb-2">
                  What Our Customers Say
                </h1>
                <p>Real stories from real customers</p>
              </div>
            </section>
            <section className="container mx-auto px-4 -mt-10 md:-mt-16">
              <div className="bg-[#EDE2D8] rounded-none shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Working with this team has been an absolute game-changer
                  for our business. Their innovative solutions and dedicated
                  support have helped us achieve unprecedented growth.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={ImgPerson}
                      alt="John Anderson"
                      width={48}
                      height={48}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">John Anderson</p>
                      <p className="text-sm text-gray-500">
                        CTO, Innovate Solutions
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none bg-gradient-to-br border-transparent from-[#6B389E] to-[#A96E3F] text-white"
                  >
                    Verified
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-[#D8E3ED]">
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#EDE2D8] border border-black rounded-none shadow-sm p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={ImgPerson}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl md:text-4xl font-bold text-red-500">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider  mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-12 md:py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Ready to join our satisfied customers?
            </h2>
            <p className="text-gray-600 mb-8">
              Start your journey with us today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-red-500 rounded-none">Get Started</Button>
              <Button
                variant="outline"
                className="border-gray-300 rounded-none"
              >
                Contact Sales
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
