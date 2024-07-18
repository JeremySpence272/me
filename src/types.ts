export enum ExperienceType {
  project,
  professional,
  education,
}

export type Experience = {
  title: string;
  path: string;
  dateRange: string;
  type: ExperienceType;
  description: string;
  priority: "High" | "Low";
};
