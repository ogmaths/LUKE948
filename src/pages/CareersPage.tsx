import { Shield, Users, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function CareersPage() {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/252921982726062";
    script.async = true;
    
    const formContainer = document.getElementById("jotform-container");
    if (formContainer) {
      formContainer.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (formContainer && script.parentNode) {
        formContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Careers</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Make a meaningful difference in the lives of young people who need it most
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Why Work With Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-600">
                Be part of a dedicated team making a real difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Heart className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">Meaningful Work</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Make a real difference in the lives of vulnerable young people every single day
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Award className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">Professional Development</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Ongoing training and development opportunities to advance your career
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Users className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">Supportive Team</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Work alongside experienced professionals in a collaborative environment
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Shield className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">Safe Environment</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Work in a well-supported, safe environment with clear policies and procedures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-black rounded-lg p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Safeguarding Commitment</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Luke 9:48 Children's Home is committed to safeguarding and promoting the welfare of children and young people. 
                    We expect all staff and volunteers to share this commitment.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    All applicants will be subject to a thorough recruitment process including:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start border-l-4 border-black pl-4">
                      <span>• Enhanced DBS (Disclosure and Barring Service) check</span>
                    </li>
                    <li className="flex items-start border-l-4 border-black pl-4">
                      <span>• Comprehensive reference checks</span>
                    </li>
                    <li className="flex items-start border-l-4 border-black pl-4">
                      <span>• Verification of qualifications and employment history</span>
                    </li>
                    <li className="flex items-start border-l-4 border-black pl-4">
                      <span>• Safeguarding training and assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Apply Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Submit Your Application</h2>
              <p className="text-xl text-gray-600">
                Complete the form below to apply for a position at Luke 9:48 Children's Home
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-lg p-8 shadow-xl">
              <div id="jotform-container"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
