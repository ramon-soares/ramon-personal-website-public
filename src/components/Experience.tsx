
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Analista de Dados Pleno",
    company: "MindMiners",
    period: "ago de 2024 - Presente",
  },
  {
    title: "Analista de Dados Junior",
    company: "MindMiners",
    period: "mar de 2023 - ago de 2024",
  },
  {
    title: "Estagiário em Análise de Dados",
    company: "MindMiners",
    period: "jul de 2022 - mar de 2023",
  },
];

const education = [
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal de Catalão (UFCAT)",
    period: "mar de 2019 - mar de 2023",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experiência Profissional</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Minha jornada profissional</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company} • {exp.period}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-16 text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Formação Acadêmica</h2>
          </div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution} • {edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
