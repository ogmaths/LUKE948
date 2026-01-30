import { Shield, Phone, AlertCircle, FileText, Users, Lock, CheckCircle, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SafeguardingPage() {
  const policies = [
    {
      icon: Shield,
      title: "Child Protection",
      description: "Comprehensive policies ensuring the safety and wellbeing of all children in our care.",
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "All staff receive regular safeguarding training and are DBS checked.",
    },
    {
      icon: Lock,
      title: "Safe Recruitment",
      description: "Rigorous recruitment processes to ensure only suitable individuals work with children.",
    },
    {
      icon: FileText,
      title: "Record Keeping",
      description: "Detailed, secure documentation of all safeguarding concerns and actions taken.",
    },
  ];

  const procedures = [
    {
      title: "Recognition",
      description: "Staff are trained to recognize signs of abuse, neglect, or exploitation.",
      icon: Eye
    },
    {
      title: "Reporting",
      description: "Clear procedures for reporting concerns immediately to the designated safeguarding lead.",
      icon: AlertCircle
    },
    {
      title: "Response",
      description: "Swift action taken to protect children, including liaison with relevant authorities.",
      icon: Shield
    },
    {
      title: "Review",
      description: "Regular review of incidents and procedures to continuously improve our practice.",
      icon: CheckCircle
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white text-black rounded-full">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Our Priority</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Safeguarding
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The safety and wellbeing of every child in our care is our absolute priority
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Alert className="border-2 border-black bg-white shadow-xl">
              <AlertCircle className="h-6 w-6 text-black" />
              <AlertDescription className="text-base ml-2">
                <strong className="text-black text-lg block mb-4">If you have immediate concerns about a child's safety:</strong>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black text-white rounded-lg p-6 text-center">
                    <p className="font-bold mb-2">Emergency</p>
                    <p className="text-3xl font-black">999</p>
                  </div>
                  <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
                    <p className="font-bold mb-2">Social Services</p>
                    <p className="text-2xl font-black">03000 41 11 11</p>
                  </div>
                  <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
                    <p className="font-bold mb-2">Out of Hours</p>
                    <p className="text-2xl font-black">03000 41 91 91</p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Safeguarding Statement */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Our Promise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Safeguarding Commitment</h2>
            </div>

            <div className="bg-gray-50 border-2 border-black rounded-lg p-8 md:p-12 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Luke 948 Homes is committed to safeguarding and promoting the welfare of all 
                  children and young people in our care. We recognise that safeguarding is everyone's 
                  responsibility and that all children have the right to be protected from harm.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We operate in full compliance with the Children Act 1989, the Children Act 2004, Working 
                  Together to Safeguard Children 2018, and all relevant Ofsted regulations. Our safeguarding 
                  policies and procedures are regularly reviewed and updated to reflect current best practice 
                  and legislative requirements.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are particularly mindful of the additional vulnerabilities faced by children with 
                  Emotional and Behavioural Difficulties, including those who have experienced trauma, 
                  attachment disruptions, or instability. We have specialised procedures in place to 
                  protect them and support their emotional wellbeing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Shield className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-white mb-2 transition-colors">100%</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 font-semibold transition-colors">Compliant</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Users className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-white mb-2 transition-colors">24/7</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 font-semibold transition-colors">Monitoring</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <CheckCircle className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-white mb-2 transition-colors">DBS</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 font-semibold transition-colors">Checked Staff</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
              Our Framework
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Safeguarding Policies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive frameworks to ensure the safety of every child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {policies.map((policy, index) => (
              <Card key={index} className="border-2 border-white bg-white hover:bg-gray-50 transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <policy.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Safety Procedures</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clear processes for identifying and responding to safeguarding concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {procedures.map((procedure, index) => (
              <Card key={index} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="bg-black group-hover:bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <procedure.icon className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div className="bg-black group-hover:bg-white text-white group-hover:text-black w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold transition-colors">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-white transition-colors">{procedure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">{procedure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Phone className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Designated Safeguarding Lead</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Our Designated Safeguarding Lead is available to discuss any safeguarding concerns. 
              All concerns are taken seriously and responded to promptly.
            </p>
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-black">
              <p className="text-lg font-semibold mb-4">For safeguarding concerns, please contact:</p>
              <p className="text-5xl md:text-6xl font-bold mb-2">
                03000 41 11 11
              </p>
              <p className="text-gray-600 font-bold text-lg">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}