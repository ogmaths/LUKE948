import { Link } from "react-router-dom";
import { Heart, Shield, Users, Home as HomeIcon, ArrowRight, Target, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const values = [
    {
      icon: Heart,
      title: "Trauma-Informed",
      description: "PACE model (Playfulness, Acceptance, Curiosity, Empathy) and trauma-informed care principles guide everything we do.",
    },
    {
      icon: Shield,
      title: "Safety & Stability",
      description: "Creating a secure, structured environment where children can regulate, rebuild trust, and begin healing.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working in close partnership with social workers, health professionals, educators, and other key stakeholders.",
    },
    {
      icon: HomeIcon,
      title: "Child-Centred",
      description: "Every decision is made with the child's best interests in mind, helping them build confidence, resilience, and hope.",
    },
  ];

  const stats = [
    { icon: Target, value: "100%", label: "Ofsted Compliant" },
    { icon: Award, value: "24/7", label: "Therapeutic Support" },
    { icon: Sparkles, value: "2", label: "Young People" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              Luke 9:48<br/>
              <span className="text-gray-400">Homes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              A specialist children's home in Maidstone, Kent — registered under the Emotional and Behavioural category, supporting one looked after child aged 11–16 with therapeutic care, emotional support, and a structured environment for long-term stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white text-black hover:bg-gray-100 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center py-4 sm:py-0">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-gray-400" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 px-4">Core Values</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Everything we do is guided by our commitment to the wellbeing and development of the children in our care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black group-hover:bg-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white mb-2 sm:mb-3 transition-colors">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-4">Our Mission</h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 px-4">
              We provide homes within a <span className="font-bold text-white">trauma-informed and child-centred framework</span>. We specialise in supporting children with Emotional and Behavioural Difficulties, offering high levels of therapeutic support in nurturing, structured environments designed to help them regulate, rebuild trust, and begin healing.
            </p>
            <div className="mt-8 sm:mt-12">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/about">
                  Discover Our Approach <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  What We Offer
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
                  Alkham House, Maidstone
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our home at 73 Alkham Road (ME14 5PE) provides a therapeutic and structured living environment for children who may require additional support to promote safety, consistency, emotional wellbeing, and long-term stability.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 border-l-4 border-black pl-4 sm:pl-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">PACE Model Approach</h3>
                    <p className="text-sm sm:text-base text-gray-600">Playfulness, Acceptance, Curiosity, and Empathy guide our therapeutic interventions</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 border-l-4 border-black pl-4 sm:pl-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Positive Behaviour Support</h3>
                    <p className="text-sm sm:text-base text-gray-600">De-escalation techniques and attachment-based interventions in a safe environment</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 border-l-4 border-black pl-4 sm:pl-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">Multi-Agency Partnership</h3>
                    <p className="text-sm sm:text-base text-gray-600">Close collaboration with social workers, health professionals, and educators</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-black p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white border-2 border-black p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-black mb-2">🏠 Emotional & Behavioural Support</h4>
                  <p className="text-sm sm:text-base text-gray-600">Specialist care for children with EBD, trauma, and attachment difficulties</p>
                </div>
                <div className="bg-white border-2 border-black p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-black mb-2">📚 Education Coordination</h4>
                  <p className="text-sm sm:text-base text-gray-600">Liaison with schools and support for educational development</p>
                </div>
                <div className="bg-white border-2 border-black p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-black mb-2">🌟 Long-Term Stability</h4>
                  <p className="text-sm sm:text-base text-gray-600">Medium-to-long-term placements for ages 11-16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Need to Make a Referral?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Local authorities can contact us to discuss placements and learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Link to="/apply">Application Process</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}