import { Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Credit Card Fraud Detection ML Model",
    period: "July 2025",
    description: "Developed a Python 3.10–based fraud detection pipeline using Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, CatBoost, XGBoost, and LightGBM to process 284,807 transactions (0.17% fraud), achieving up to 0.9907 ROC-AUC on validation.",
    highlights: [
      "Advanced ROC/Precision-Recall visualizations",
      "Feature importance analysis",
      "Real-time fraud detection",
      "Reduced false negatives by over 95%"
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "Matplotlib"],
    githubUrl: "#" // User will provide
  },
  {
    title: "Assignment Tracker",
    period: "May 2025",
    description: "Built full-stack task management application using React, Next.js, TypeScript, FastAPI, SQLAlchemy, and Docker, featuring Pomodoro timer, calendar integration, and file attachment system.",
    highlights: [
      "RESTful APIs with CRUD operations",
      "Automated email notifications",
      "Hierarchical task organization",
      "Real-time data synchronization using SWR",
      "Responsive UI with Tailwind CSS"
    ],
    technologies: ["React", "Next.js", "TypeScript", "FastAPI", "SQLAlchemy", "Docker", "Tailwind CSS"],
    githubUrl: "#" // User will provide
  },
  {
    title: "Smart RF Signal Classification",
    period: "August 2024",
    description: "Designed and fine-tuned a YOLOv5 deep learning model to classify 5G and radar signals across 8 frequency bands, achieving over 90% confidence and 85% precision on a labeled dataset of 10,000+ signal samples.",
    highlights: [
      "YOLOv5 deep learning model",
      "90% confidence, 85% precision",
      "Full-stack web application",
      "Real-time signal analysis",
      "Interactive visualizations"
    ],
    technologies: ["Python", "YOLOv5", "Flask", "React.js", "MongoDB", "PyTorch"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 pastel-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg section-hover h-full flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                
                <p className="text-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;