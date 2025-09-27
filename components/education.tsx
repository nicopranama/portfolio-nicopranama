import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
  relevantCourses: string[];
}

const EducationItem = ({
  institution,
  degree,
  period,
  description,
  relevantCourses,
}: EducationItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <GraduationCap className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{institution}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{degree}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {relevantCourses.map((course) => (
            <Badge key={course} variant="secondary" className="rounded-full">
              {course}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      institution: "BINUS University",
      degree: "Bachelor of Computer Science",
      period: "2023 - 2027",
      description:
        "Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices. Focused on algorithms, data structures, and full-stack development.",
      relevantCourses: ["Data Structures & Algorithms", "Software Engineering", "Web Programming", "Mobile App Programming"],
    },
    {
      institution: "SMA Negeri 2 Surabaya",
      degree: "High School Diploma, Science Major",
      period: "2020 - 2023",
      description:
        "Focused on science major, building a strong foundation in mathematics, physics, and logical problem solving.",
      relevantCourses: ["Mathematics", "Physics", "Computer Science Basics"],
    },
  ];

  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            My academic journey and continuous learning in tech.
          </p>
        </div>

        <div className="relative">
          {educations.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;