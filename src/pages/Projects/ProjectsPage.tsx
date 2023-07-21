import MotionContainer from '@/components/MotionContainer.tsx';
import MainArticle from '@/components/MainArticle.tsx';
import { projectsMockData } from '@/utils/projectsMockData.ts';

const ProjectsPage = () => {
  const { introduction, conclusion } = projectsMockData;
  return (
    <MotionContainer>
      <div className="text-justify">{introduction}</div>
      <MainArticle>{conclusion}</MainArticle>
    </MotionContainer>
  );
};

export default ProjectsPage;
