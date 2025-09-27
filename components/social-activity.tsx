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
      title: "Tech Volunteer",
      organization: "BINUS University – TFISC PIONEER",
      period: "2025",
      description:
        "Collaborated with a team to build a tourism website for Desa Bumiaji and facilitated a community workshop on web usage and SEO.",
      activities: ["Web Development", "Community Workshop", "SEO Training", "Team Collaboration"],
    },
    {
      title: "Welfare Volunteer",
      organization: "BINUS University – TFI Program",
      period: "2024",
      description:
        "Conducted interviews with residents of Desa Polehan, Malang, about interfaith tolerance and produced a campaign video based on their stories.",
      activities: ["Community Interview", "Video Campaign", "Public Education"],
    },
    {
      title: "Campaign Volunteer",
      organization: "BINUS University – TFI Program",
      period: "2023",
      description:
        "Raised awareness of SDG 8: Decent Work and Economic Growth through direct engagement and education sessions with campus workers.",
      activities: ["Community Outreach", "Public Education", "SDG Awareness"],
    },
    {
      title: "Community Educator",
      organization: "BINUS University – TFI Program",
      period: "2022",
      description:
        "Conducted an awareness session at Panti Asuhan Sunan Kalijaga Malang, introducing the role of AI in promoting integrity and reducing corruption. Designed the material to be accessible and engaging for orphanage youth.",
      activities: ["Educational Outreach", "Campaigning", "Public Speaking"],
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
            Social Activities
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