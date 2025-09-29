import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <Badge variant="secondary" className="mb-4 mx-auto md:mx-0">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden mx-auto" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful app experiences
            </h2>
            <p className="text-muted-foreground mb-6 mr-2 text-justify">
              As a Computer Science student, I focus on learning and building
              scalable applications using modern technologies. My journey includes
              exploring React, Node.js, and cloud architecture. I&apos;m passionate about
              creating elegant solutions to real problems and continuously growing as a developer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild className="rounded-full">
                <a
                  href="https://github.com/nicopranama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo className="mr-2 h-4 w-4" />
                  View Github
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="/NicoPranamaHadi_CV_Academy2025.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-60 h-60 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/Profile Image.png" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
