export interface Metric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: Metric[];
  image: ProjectImage;
  featured?: boolean;
}
