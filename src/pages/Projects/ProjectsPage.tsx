import MotionContainer from '@/components/MotionContainer.tsx';
import MainArticle from '@/components/MainArticle.tsx';
import { projectsMockData } from '@/utils/projectsMockData.ts';
import ProjectsView from '@/components/ProjectsView.tsx';

const ProjectsPage = () => {
  const { introduction, conclusion, projects } = projectsMockData;

  return (
    <MotionContainer>
      <div className="text-justify">{introduction}</div>
      <MainArticle>{conclusion}</MainArticle>
      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectsView key={index} projectsItem={project} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default ProjectsPage;
