
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <p className="text-primary font-medium mb-4 animate-fade-in">Transformando dados em histórias</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ramon Soares
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Analista de Dados apaixonado por tecnologia e sua capacidade de transformar o mundo
        </p>
        <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://github.com/ramon-soares" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ramon-soares-54926933a/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
