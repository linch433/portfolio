type ProjectsInfo_T = {
  logoImg: string;
  title: string;
  detailsInfo: string;
  repositoryLink: string;
  deployLink: string;
  stack: string[];
};

export type MockProjectsData_T = {
  introduction: string;
  conclusion: string;
  projects: ProjectsInfo_T[];
};

export interface IProjectsView {
  projectsItem: ProjectsInfo_T;
}
