import { Users, Award, Heart, BookOpen, Globe, Home, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const services = [
    {
      icon: Heart,
      title: "Trauma-Informed Care",
      description: "Specialized support from staff trained in trauma-informed practices and cultural sensitivity.",
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Assistance with school enrollment, language learning, and educational development.",
    },
    {
      icon: Users,
      title: "Therapeutic Services",
      description: "Access to counseling, mental health support, and therapeutic interventions.",
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Programs that honor cultural backgrounds while supporting integration into the community.",
    },
    {
      icon: Home,
      title: "Life Skills",
      description: "Training in daily living skills, independence, and preparation for adulthood.",
    },
    {
      icon: Award,
      title: "Advocacy",
      description: "Support with legal processes, asylum applications, and accessing essential services.",
    },
  ];

  const directors = [
    {
      name: "Clinton",
      role: "Service Manager & Co-Founder",
      image: "/images/IMG_1982 3.jpg",
      bio: "My passion for care began long before my journey in business. As a teenager, I became a full-time carer for my late father — an experience that taught me the true meaning of compassion, patience, and responsibility. Later, while working in a nursery, I discovered how much I loved creating safe, nurturing spaces where children could grow, feel supported, and thrive.\n\nThose early experiences shaped my purpose to build environments where people feel at home, understood, and valued. Over the years, I've carried that same heart into everything I do, combining my hands-on experience in care with my ability to build and manage homes that promote wellbeing and belonging.\n\nI believe that a child's environment shapes their entire future — their values, confidence, and sense of identity. Having cared for my father and faced loss at a young age, I understand the lifelong impact that love, structure, and emotional stability can create. That's why I'm dedicated to building a children's home where care isn't occasional — it's constant. A place where every child feels seen, supported, and loved 100% of the time."
    },
    {
      name: "Ezekiel",
      role: "Responsible Individual & Co-Founder",
      image: "/images/WhatsApp Image 2025-10-22 at 18.06.05.jpeg",
      bio: "My name is Ezekiel Bademosi, and my journey has always been rooted in helping children reach their full potential. I began my career working in a primary school, where I spent over five years supporting children from diverse backgrounds including those with special educational needs, learning difficulties, and challenging family circumstances.\n\nDuring that time, I developed a deep passion for supporting young people, especially those who've faced difficult upbringings. I saw firsthand how the right environment, care, and encouragement can completely change a child's path in life.\n\nAfter leaving my full-time role in education, I transitioned into property investment and development, building my own rental portfolio and learning the ins and outs of creating safe, comfortable, and nurturing spaces.\n\nNow, I'm combining both of my passions-property and child development through the creation of a children's home. This project represents more than just a professional venture for me; it's a personal mission. My goal is to create a home where every child feels safe, valued, and supported, and where they can grow into confident, capable individuals with hope for the future.\n\nFor me, this work is deeply fulfilling, it allows me to use my skills to make a lasting impact in the lives of children who need it most. Every child deserves a better future, a safer home, and a caring environment where they can thrive and that's exactly what I aim to provide."
    }
  ];

  const team = [
    {
      role: "Registered Manager",
      description: "Oversees all aspects of the home with extensive experience in children's residential care.",
      icon: Target
    },
    {
      role: "Deputy Manager",
      description: "Supports daily operations and ensures high standards of care are maintained.",
      icon: Award
    },
    {
      role: "Residential Care Workers",
      description: "Dedicated team providing 24/7 support, guidance, and care to all young people.",
      icon: Users
    },
    {
      role: "Education Coordinator",
      description: "Facilitates educational opportunities and liaises with schools and training providers.",
      icon: BookOpen
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              About Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
              About Luke 9:48<br/>Children's Home
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              A specialist children's home in Maidstone dedicated to supporting unaccompanied asylum-seeking children aged 13-17
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 px-4">Who We Are</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                  <div className="bg-black group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <Home className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white mb-2 sm:mb-3 transition-colors">Purpose-Built</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                    Specifically designed to meet the unique needs of unaccompanied asylum-seeking children
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                  <div className="bg-black group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white mb-2 sm:mb-3 transition-colors">Ofsted Registered</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                    Operating in full compliance with all regulatory requirements and highest standards
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                  <div className="bg-black group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white mb-2 sm:mb-3 transition-colors">Individualized Care</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                    Trauma-informed and culturally sensitive approach tailored to each young person
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 border-2 border-black rounded-lg p-6 sm:p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Luke 9:48 Children's Home is a purpose-built children's home in Maidstone, Kent, specifically designed 
                  to meet the unique needs of unaccompanied asylum-seeking children. We provide a safe, 
                  stable environment where young people can begin to heal from their experiences and build 
                  positive futures.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We understand that each young person who comes to us has their own unique story, culture, 
                  and needs. Our approach is individualized, trauma-informed, and culturally sensitive, 
                  ensuring that every child receives the specific support they need to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Our Directors</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Meet the founders dedicated to creating a home where every child feels valued
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {directors.map((director, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/3">
                  <div className="relative aspect-square rounded-lg overflow-hidden border-2 sm:border-4 border-white max-w-sm mx-auto lg:max-w-none">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white text-black rounded-lg p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{director.name}</h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 font-semibold">{director.role}</p>
                    <div className="prose prose-lg max-w-none">
                      {director.bio.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              What We Provide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Support Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive care and support tailored to the needs of each young person
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-white bg-white hover:bg-gray-50 transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Meet Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced, qualified professionals committed to providing exceptional care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-black group-hover:bg-white w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <member.icon className="h-7 w-7 text-white group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 transition-colors">{member.role}</h3>
                      <p className="text-gray-600 group-hover:text-gray-300 transition-colors">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 border-2 border-black rounded-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Our Commitment</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All staff members are carefully recruited, thoroughly vetted, and receive ongoing training 
                  in safeguarding, trauma-informed care, cultural competency, and working with unaccompanied 
                  asylum-seeking children. We are committed to continuous professional development to ensure 
                  we provide the highest quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us to discuss placements or learn more about our approach to care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-base px-8 py-6">
              <Link to="/safeguarding">Safeguarding</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}