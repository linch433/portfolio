import { MockExperienceData_T } from '@/types/experience.ts';

export const experienceMockData: MockExperienceData_T = {
  introduction:
    'With a passion for crafting impactful web and mobile applications, I have navigated diverse work environments, each offering unique challenges and opportunities.',
  careerPath:
    'Throughout my career, I have honed my skills in delivering functional and visually captivating solutions that prioritize seamless user experiences.',
  pathDescribe:
    'Join me as I share insights into my roles and responsibilities, shedding light on the projects that have shaped my path. From collaborating with cross-functional teams to devising creative solutions for complex problems, I am committed to continuous learning and personal growth.',
  challenges:
    'Through perseverance and a drive for excellence, I have embraced new challenges, inspiring me to evolve and innovate in the ever-evolving landscape of software development.',
  experience: [
    {
      job: 'NerdPeople',
      title: 'Junior FrontEnd Developer',
      workStart: 'Jan. 2023',
      workEnd: 'Now',
      experience:
        'Currently, my role in the team is developing and maintaining various features and modules of the application, also resolve bugs. On the other hand, I collaborate with other team members, including designers and backend developers, to ensure the smooth functioning of the application.\n' +
        'In addition to my commercial development experience, I have worked with iOS and iPadOS using Swift, UIKit, MVVM, MVC, Combine, and CoreData.',
      stack: [
        'React',
        'React Native',
        'JavaScript',
        'TypeScript',
        'TailwindCSS',
        'Redux/RTK',
        'RTK Query',
      ],
    },
    {
      job: 'NerdPeople',
      title: 'Junior iOS Developer',
      workStart: 'Jun. 2022',
      workEnd: 'Now',
      experience:
        'Currently, my role in the team is developing and maintaining various features and modules of the application, also resolve bugs. On the other hand, I collaborate with other team members, including designers and backend developers, to ensure the smooth functioning of the application.\n' +
        'In addition to my commercial development experience, I have worked with iOS and iPadOS using Swift, UIKit, MVVM, MVC, Combine, and CoreData.',
      stack: [
        'Swift',
        'UIKit',
        'Storyboard',
        'MVVM',
        'Combine',
        'CoreData',
        'VIPER',
        'RxSwift',
      ],
    },
  ],
};
