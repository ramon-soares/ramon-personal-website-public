
import { Youtube, Instagram, Music2 } from "lucide-react";

const social = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@codandoamatrix365",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/codandoamatrix/",
  },
  {
    name: "TikTok",
    icon: Music2,
    url: "https://www.tiktok.com/@codandoamatrix",
  },
];

const Social = () => {
  return (
    <section id="social" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Redes Sociais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            No Codando a Matrix, compartilho conhecimentos e experiências sobre análise de dados, programação e tecnologia. 
            O canal no YouTube é focado em tutoriais práticos e aprofundados, enquanto mantenho presença no Instagram e TikTok 
            para alcançar diferentes públicos interessados em tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
