export type WorksExperience_T = {
  job: string;
  title: string;
  workStart: string;
  workEnd: string;
  experience: string;
  stack: string[];
};

export type MockExperienceData_T = {
  introduction: string;
  careerPath: string;
  pathDescribe: string;
  challenges: string;
  experience: WorksExperience_T[];
};
