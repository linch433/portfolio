import resumePdfFile from '@/assets/Frontend_Kopynets_Volodymyr.pdf';

type MockLinks_T = {
  githubLink: string;
  linkedinLink: string;
  telegramLink: string;
  instagramLink: string;
  mailToLink: string;
  resumeLink: string;
};

export const links: MockLinks_T = {
  githubLink: 'https://github.com/linch433',
  linkedinLink: 'https://www.linkedin.com/in/volodymyr-kopynets-8606b4180/',
  telegramLink: 'https://t.me/linch433',
  instagramLink: 'https://www.instagram.com/kopynets.v/',
  mailToLink: 'mailto:linch433@gmail.com',
  resumeLink: resumePdfFile,
};
