import { Badge } from "@/components/ui/badge";
import { Users, Calendar } from "lucide-react";

interface ActivityItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  activities: string[];
}

const ActivityItem = ({
  title,
  organization,
  period,
  description,
  activities,
}: ActivityItemProps) => {
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
            <Users className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{organization}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <Badge key={activity} variant="secondary" className="rounded-full">
              {activity}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Volunteer = () => {
  const activities = [
    {
      title: "Tech Community Leader",
      organization: "Developer Community Indonesia",
      period: "2022 - Present",
      description:
        "Leading a community of 500+ developers, organizing monthly meetups, and facilitating knowledge sharing sessions on modern web development technologies.",
      activities: ["Community Management", "Event Organization", "Mentoring", "Public Speaking"],
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      period: "2021 - Present",
      description:
        "Actively contributing to open source projects, maintaining documentation, and helping new contributors get started with their first contributions.",
      activities: ["Code Contribution", "Documentation", "Issue Resolution", "Community Support"],
    },
    {
      title: "Student Ambassador",
      organization: "University Tech Club",
      period: "2020 - 2022",
      description:
        "Represented the university in tech competitions, organized coding workshops, and mentored fellow students in programming and software development.",
      activities: ["Workshop Facilitation", "Competition Participation", "Peer Mentoring", "Event Planning"],
    },
  ];

  return (
    <section id="volunteer" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Volunteer
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Volunteer Experience
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Highlights of my volunteer work and community contributions.
          </p>
        </div>

        <div className="relative">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;