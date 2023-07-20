import MotionContainer from '@/components/MotionContainer.tsx';
import { aboutMockData } from '@/utils/aboutMockData.ts';

const AboutPage = () => {
  const { headingMessage, greetingMessage, skills, graduation } = aboutMockData;
  return (
    <MotionContainer>
      <div>{greetingMessage}</div>
      <div className="text-justify mt-4">{headingMessage}</div>
      <div className="text-justify mt-4">{graduation}</div>
      <div className="text-justify mt-4">{skills}</div>
    </MotionContainer>
  );
};

export default AboutPage;
