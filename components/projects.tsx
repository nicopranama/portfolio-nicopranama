import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  viewDetail?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  viewDetail,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {viewDetail && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={viewDetail} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Detail
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Lumina",
      description:
        "AI-Powered Mobile Application for Personalized Skincare Recommendations",
      image: "/Lumina Logo.png",
      technologies: ["React Native", "Golang", "Python", "MySQL", "Firebase", "Expo", "Flask", "Gin"],
      viewDetail: "https://www.notion.so/Lumina-27cd47ac9ea280c39598dbebfcfc820f?source=copy_link",
      githubUrl: "https://github.com/nicopranama/lumina",
    },
    {
      title: "Desa Wisata Bumiaji Website",
      description:
        "Tourism Village Web Platform with Admin Dashboard for Content Management, developed as part of the Pioneer TFISC program.",
      image: "/Desa Wisata Bumiaji Website Image.png",
      technologies: ["React", "Laravel", "MySQL", "Inertia.js", "Tailwind CSS", "ZOD"],
      viewDetail: "https://www.notion.so/Desa-Wisata-Bumiaji-Website-27cd47ac9ea2810fae17d5238bc216a6?source=copy_link",
      githubUrl: "https://amazingbumiaji.online/",
    },
    {
      title: "Zendora",
      description:
        "automates customer support emails with AI-driven agents and RAG technology for efficient, personalized, high-quality communication.",
      image: "/Zendora.png",
      technologies: ["Python", "Langchain", "Langgraph", "Langserve", "Google Gemini", "Groq", "Google Gmail"],
      viewDetail: "https://www.notion.so/Zendora-27cd47ac9ea28125b466dbad79f4dda8?source=copy_link",
      githubUrl: "https://github.com/nicopranama/zendora",
    },
    {
      title: "HukumAI",
      description:
        "AI-powered legal assistant for Indonesian MSMEs using RAG",
      image: "/HukumAI.png",
      technologies: ["Python", "Langchain", "ChromaDB", "PyMuPDF", "Streamlit", "OpenAI"],
      viewDetail: "https://www.notion.so/HukumAI-27cd47ac9ea281b2b9c8c91f42514e79?source=copy_link",
      githubUrl: "https://github.com/nicopranama/hukumai",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
