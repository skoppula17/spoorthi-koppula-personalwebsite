import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-pastel-blue">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e5808f4e-2da5-4ae6-b07c-1321e0561e51.png"
              alt="Spoorthi Koppula"
              className="w-48 h-48 rounded-full mx-auto object-cover object-[60%_25%] shadow-2xl ring-4 ring-white/50 transform scale-125"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Hi, My name is<br />Spoorthi Koppula
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Computer Engineering Student at Purdue University<br />
            Passionate about Software Engineering, AI/ML, and Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;