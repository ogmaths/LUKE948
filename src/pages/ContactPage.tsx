import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kent", "United Kingdom"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: 01234 567890", "Emergency: 03000 41 11 11"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luke948home.org.uk"],
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

      {/* Contact Form */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Message Us
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 px-4">Send Us a Message</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Complete the form below and we'll respond within 24 hours
              </p>
            </div>

            <Card className="border-2 border-black shadow-xl">
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black font-bold text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-black font-bold text-sm sm:text-base">Organization *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        placeholder="Local Authority / Agency"
                        className="border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black font-bold text-sm sm:text-base">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.smith@example.com"
                        className="border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-black font-bold text-sm sm:text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="01234 567890"
                        className="border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black font-bold text-sm sm:text-base">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Referral Enquiry / General Question"
                      className="border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black font-bold text-sm sm:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please provide details about your enquiry..."
                      className="resize-none border-2 border-gray-300 focus:border-black text-sm sm:text-base"
                    />
                  </div>

                  <div className="bg-gray-50 border-2 border-black rounded-lg p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong className="text-black">Data Protection:</strong> Your information will be handled in accordance with 
                      GDPR and our privacy policy. We will only use your details to respond to your enquiry.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black text-white hover:bg-gray-800 text-sm sm:text-base py-5 sm:py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 sm:mt-8 bg-gray-50 border-2 border-black rounded-lg p-6 sm:p-8">
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