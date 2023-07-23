import { MockProjectsData_T } from '@/types/projects.ts';

import kinoExpertImg from '@/assets/projects/Kino-expert.png';
import mediaEncyclopediaImg from '@/assets/projects/Media-encyclopedia.png';
import toDoAppImg from '@/assets/projects/To-Do app.png';
import userBlogImg from '@/assets/projects/User-blog.png';

export const projectsMockData: MockProjectsData_T = {
  introduction:
    'As a front-end developer, my portfolio proudly showcases a diverse collection of projects that demonstrate my expertise.',
  conclusion:
    'I am passionate about crafting visually captivating and user-friendly web and mobile applications, and I continually seek opportunities to expand my knowledge and stay at the forefront of front-end technologies.',
  projects: [
    {
      logoImg: kinoExpertImg,
      title: 'Kino-expert',
      detailsInfo:
        'Kino-expert is a web application designed to provide users with a seamless experience to explore and discover information about movies. The application allows users to search for films by categories or names, view detailed information about each film, read reviews from both users and experts, and write their own reviews if they are authenticated users.',
      repositoryLink: 'https://github.com/linch433/kino-expert',
      deployLink: 'https://kino-expert.vercel.app/',
      stack: ['React', 'TailwindCSS', 'RTK', 'Firebase'],
    },
    {
      logoImg: mediaEncyclopediaImg,
      title: 'Media Encyclopedia',
      detailsInfo:
        'Media-encyclopedia is a web application that serves as a comprehensive source of information about the history of video games. The platform allows users to access detailed content about famous video game genres, developers, game engines, gaming companies, and other relevant information related to the video game industry.',
      repositoryLink: 'https://github.com/linch433/media-encyclopedia',
      deployLink: 'https://media-encyclopedia.vercel.app/',
      stack: ['React', 'Vite', 'Ant-Design'],
    },
    {
      logoImg: toDoAppImg,
      title: 'Your ToDo',
      detailsInfo:
        'Your ToDo is a simple web application built using React, Tailwind CSS, and Redux Toolkit. The app allows users to create and manage their to-do lists efficiently. Users can add new tasks, delete existing tasks, and update the task names as needed.',
      repositoryLink: 'https://github.com/linch433/todo-app',
      deployLink: 'https://todo-app-linch433.vercel.app/',
      stack: ['React', 'Vite', 'TailwindCSS', 'RTK'],
    },
    {
      logoImg: userBlogImg,
      title: 'User-Blog',
      detailsInfo:
        "User-Blog is a simple web application that allows users read blog posts, view other users' profiles, write new blog posts, leave comments on posts, and read comments. The app is designed to provide a platform for users to share their thoughts through blog posts and engage with other users' content through comments.",
      repositoryLink: 'https://github.com/linch433/user-blog',
      stack: ['React', 'Vite', 'TailwindCSS', 'RTK', 'RTK Query'],
    },
  ],
};
