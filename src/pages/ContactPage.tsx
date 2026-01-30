import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kent", "United Kingdom"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: 07497 023902", "Emergency: 03000 41 11 11"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luke948homes.co.uk"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9am - 5pm", "24/7 emergency line available"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-4">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              Get in touch with our team to discuss referrals, ask questions, or learn more about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                  <div className="bg-black group-hover:bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <info.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white mb-3 sm:mb-4 transition-colors">{info.title}</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Make a Referral */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-black rounded-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Make a Referral</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                To make a referral for a child who needs our support, please contact us using the details below. Our team is ready to discuss your referral and provide guidance through the process.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-black pl-4 sm:pl-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Email</p>
                  <a href="mailto:info@luke948homes.co.uk" className="text-lg sm:text-xl font-bold text-black hover:underline break-all">
                    info@luke948homes.co.uk
                  </a>
                </div>
                
                <div className="border-l-4 border-black pl-4 sm:pl-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Phone</p>
                  <a href="tel:07497023902" className="text-lg sm:text-xl font-bold text-black hover:underline">
                    07497 023902
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Our team typically responds to referrals within 24-48 hours during business hours.</p>
                <p className="text-sm text-gray-600">
                  <strong>Office Hours:</strong> Monday - Friday, 9am - 5pm. For emergencies outside these hours, please contact emergency services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 border-2 border-black rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Emergency Contacts</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                For urgent safeguarding concerns or emergencies:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="border-l-4 border-black pl-3 sm:pl-4">• Police (Emergency): <strong className="text-black">999</strong></li>
                <li className="border-l-4 border-black pl-3 sm:pl-4">• Kent Children's Social Services: <strong className="text-black">03000 41 11 11</strong></li>
                <li className="border-l-4 border-black pl-3 sm:pl-4">• Out of Hours: <strong className="text-black">03000 41 91 91</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}