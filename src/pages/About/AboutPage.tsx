import MotionContainer from '@/components/MotionContainer.tsx';
import animeBackground from '@/assets/bg-an.png';
import { aboutMockData } from '@/utils/aboutMockData.ts';
import MainArticle from '@/components/MainArticle.tsx';

const AboutPage = () => {
  const { headingMessage, greetingMessage, skills, graduation } = aboutMockData;
  return (
    <MotionContainer>
      <div>{greetingMessage}</div>
      <MainArticle>{headingMessage}</MainArticle>
      <img
        src={animeBackground}
        alt="image background"
        className="rounded-xl my-6"
      />
      <MainArticle>{graduation}</MainArticle>
      <MainArticle>{skills}</MainArticle>
    </MotionContainer>
  );
};

export default AboutPage;
