import MotionContainer from '@/components/MotionContainer.tsx';
import MainArticle from '@/components/MainArticle.tsx';
import { projectsMockData } from '@/utils/projectsMockData.ts';
import ProjectsView from '@/components/ProjectsView.tsx';
import { clsx } from 'clsx';

const ProjectsPage = () => {
  const { introduction, conclusion, projects } = projectsMockData;

  return (
    <MotionContainer>
      <div className="text-justify">{introduction}</div>
      <MainArticle>{conclusion}</MainArticle>
      <div
        className={clsx(
          'mt-10 space-y-4',
          'grid-cols-1',
          'sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0',
          'md:grid-cols-1',
        )}
      >
        {projects.map((project, index) => (
          <ProjectsView key={index} projectsItem={project} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default ProjectsPage;
