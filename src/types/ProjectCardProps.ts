export interface ProjectCardProps {
  id: number;
  title: string;
  Media: {
    url: string;
    alt: string;
  };
  teaserDescription: string;
  description: string;
  techStack: string[];
}
