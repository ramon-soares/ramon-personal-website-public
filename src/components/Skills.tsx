
import { BadgeCheck } from "lucide-react";

const skills = [
  { name: "Python", level: "Avançado" },
  { name: "SQL", level: "Avançado" },
  { name: "Análise de Dados", level: "Avançado", description: "Pandas, Numpy, Matplotlib, Plotly, Seaborn, Metabase, Google Analytics" },
  { name: "Machine Learning", level: "Intermediário", description: "Scikit-learn, Keras" },
  { name: "IA Generativa", level: "Intermediário", description: "Large Language Models (LLM), Prompting Engineering" },
  { name: "Engenharia de Dados", level: "Intermediário", description: "Airflow" },
  { name: "Docker", level: "Básico" },
  { name: "Git", level: "Básico" },
  { 
    name: "Outras Ferramentas e Skills", 
    description: "Web Scraping, Automação de Processos, Google Tag Manager" 
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ferramentas e tecnologias que domino</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <BadgeCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  {skill.level && (
                    <p className="text-sm text-gray-600">{skill.level}</p>
                  )}
                  {skill.description && (
                    <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
