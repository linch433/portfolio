import MotionContainer from '@/components/MotionContainer.tsx';
import MainArticle from '@/components/MainArticle.tsx';
import { experienceMockData } from '@/utils/experienceMockData.ts';
import { clsx } from 'clsx';
import ExperienceView from '@/components/ExperienceView.tsx';

const ExperiencePage = () => {
  const { challenges, pathDescribe, careerPath, introduction, experience } =
    experienceMockData;

  return (
    <MotionContainer>
      <div className="text-justify">{introduction}</div>
      <MainArticle>{careerPath}</MainArticle>
      <MainArticle>{pathDescribe}</MainArticle>
      <MainArticle>{challenges}</MainArticle>
      <div className={clsx('mt-10', 'flex flex-col gap-6')}>
        {experience.map((item, index) => (
          <ExperienceView key={index} experienceItem={item} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default ExperiencePage;
