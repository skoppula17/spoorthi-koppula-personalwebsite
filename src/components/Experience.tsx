import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Railinc Corporation",
    position: "Cybersecurity Intern",
    location: "Cary, North Carolina",
    period: "June 2025 - present",
    description: [
      "Designed and maintained reusable Python and Java modules for automated vulnerability scans, integrating Rapid7 InsightVM and container security tools (Docker/Kubernetes), cutting manual scan cycles by 23%.",
      "Automated cloud security posture management by authoring Terraform modules and AWS Config rules, integrating scans with AWS Security Hub and custom Python scripts, reducing misconfiguration incidents by 37% and audit preparation time by 43%.",
      "Conducted comprehensive SBOM testing across 50+ applications and implemented real-time security monitoring using Datadog, improving supply chain transparency and reducing false positives by 29%, while authoring detailed threat models and workflow diagrams for multiple Railinc products."
    ]
  },
  {
    company: "Discover Financial Services",
    position: "Sophomore Spark Program Participant",
    location: "Riverwoods, Illinois",
    period: "May 2025",
    description: [
      "Selected as 1 of 50 nationwide for a competitive early talent program emphasizing applied data science, systems thinking, and enterprise-scale architecture.",
      "Engineered solutions for fraud detection pipelines using SQL-based analysis, Power BI dashboards, and workflow optimization strategies, delivering insights to senior technologists.",
      "Gained 20+ hours of exposure to fintech infrastructure through technical mentorship, collaborative sprint-style case work, and cross-functional problem solving."
    ]
  },
  {
    company: "The Data Mine: Raytheon (RTX)",
    position: "Machine Learning Research Intern",
    location: "West Lafayette, Indiana",
    period: "August 2024",
    description: [
      "Designed and fine-tuned a YOLOv5 deep learning model to classify 5G and radar signals across 8 frequency bands, achieving over 90% confidence and 85% precision on a labeled dataset of 10,000+ signal samples.",
      "Developed a full-stack web app for real-time signal analysis using Flask, React.js, MongoDB, and PyTorch, integrating live ML inference with interactive visualizations and reducing signal review time by 40%."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 pastel-purple">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg section-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                      <Building className="w-5 h-5" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;