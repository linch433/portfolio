import LinkIcon from '@/components/LinkIcon.tsx';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { AiFillContainer, AiFillMail } from 'react-icons/ai';
import { links } from '@/utils/mockLinks.ts';

const LinkIconsGroup = () => {
  const { githubLink, linkedinLink, telegramLink, mailToLink, resumeLink } =
    links;
  return (
    <div className="bg-primary-navy flex flex-row gap-2 justify-center pt-6">
      <LinkIcon link={githubLink}>
        <BsGithub size={20} />
      </LinkIcon>
      <LinkIcon link={linkedinLink}>
        <BsLinkedin size={20} />
      </LinkIcon>
      <LinkIcon link={telegramLink}>
        <BsTelegram size={20} />
      </LinkIcon>
      <LinkIcon link={mailToLink}>
        <AiFillMail size={20} />
      </LinkIcon>
      <LinkIcon link={resumeLink}>
        <AiFillContainer size={20} />
      </LinkIcon>
    </div>
  );
};

export default LinkIconsGroup;
