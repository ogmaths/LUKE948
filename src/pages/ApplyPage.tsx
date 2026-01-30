import { FileText, CheckCircle, Users, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ApplyPage() {
  const steps = [
    {
      number: 1,
      title: "Initial Contact",
      description: "Contact us to discuss the needs of the young person and availability of placements.",
    },
    {
      number: 2,
      title: "Information Sharing",
      description: "Provide relevant information about the child's background, needs, and circumstances.",
    },
    {
      number: 3,
      title: "Assessment",
      description: "We assess whether we can meet the child's needs and discuss the placement plan.",
    },
    {
      number: 4,
      title: "Placement Agreement",
      description: "Formal placement agreement is completed with all necessary documentation.",
    },
    {
      number: 5,
      title: "Introduction",
      description: "Carefully planned introduction process to help the young person settle in.",
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Regular reviews and communication to ensure the placement is meeting the child's needs.",
    },
  ];

  const requirements = [
    "Completed referral form with full background information",
    "Risk assessment and care plan",
    "Education, health, and immigration status information",
    "Details of any ongoing legal proceedings",
    "Contact information for social worker and other professionals",
    "Funding arrangements and placement agreement",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Referrals
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Application Process</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Information for local authorities and social workers about making referrals to Luke 948 Children's Home
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Eligibility
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Who Can Apply</h2>
              <p className="text-lg text-gray-600">
                We accept referrals from local authorities for unaccompanied asylum-seeking children aged 13-17
              </p>
            </div>

            <Card className="border-2 border-black shadow-xl">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-black mb-6">Eligibility Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex items-start border-l-4 border-black pl-6">
                    <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">Unaccompanied asylum-seeking children aged 13-17 years</span>
                  </li>
                  <li className="flex items-start border-l-4 border-black pl-6">
                    <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">Referrals must be made by local authority children's services</span>
                  </li>
                  <li className="flex items-start border-l-4 border-black pl-6">
                    <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">Full background information and risk assessment must be provided</span>
                  </li>
                  <li className="flex items-start border-l-4 border-black pl-6">
                    <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">Funding arrangements must be agreed before placement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Application Steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our straightforward process ensures smooth placements for young people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step) => (
              <Card key={step.number} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black group-hover:bg-white text-white group-hover:text-black w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Information */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Documentation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Required Information</h2>
              <p className="text-lg text-gray-600">
                Please ensure you have the following information ready when making a referral
              </p>
            </div>

            <Card className="border-2 border-black shadow-xl">
              <CardContent className="pt-8 pb-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-lg border-l-4 border-black pl-6">
                      <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="mt-8 bg-gray-50 border-2 border-black rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-3">Important Note</h3>
              <p className="text-gray-700 leading-relaxed">
                All referrals are subject to availability and our assessment of whether we can appropriately 
                meet the young person's needs. We will respond to all referrals within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Phone className="h-16 w-16 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Referral?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Contact us to discuss a potential placement or to request our referral pack
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}