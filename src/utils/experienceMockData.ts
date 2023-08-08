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
      title: 'Junior Web Developer',
      workStart: 'Jan. 2023',
      workEnd: 'Now',
      experience: [
        'Developed and maintained various features and modules of the application, also resolved bugs',
        'Collaborate with other team members, including designers and backend developers, to ensure the smooth functioning of the application',
        'Migrated a multi-page user experience into new modern CMS app, improving global performance',
        'Introduced enhancements to improve the responsiveness and functionality of websites',
      ],
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
      workEnd: 'Oct. 2022',
      experience: [
        'Worked closely with PM and designers to define a rich iOS experience for the user',
        'Collaborate with the architect in improving the native iOS/iPadOS and tvOS codebase',
        'Explored new technologies and shared findings with the team',
        'Work with other developers to develop new features consistent with product roadmap',
        'Eager to get nerdy about memory management, UI layout/rendering and UI/network performance',
      ],
      stack: [
        'Swift',
        'UIKit',
        'Storyboard',
        'MVVM',
        'MVC',
        'Combine',
        'CoreData',
        'VIPER',
        'RxSwift',
      ],
    },
  ],
};
