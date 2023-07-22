import LinkIcon from '@/components/LinkIcon.tsx';
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { AiFillContainer, AiFillMail } from 'react-icons/ai';
import { links } from '@/utils/mockLinks.ts';

const LinkIconsGroup = () => {
  const {
    githubLink,
    linkedinLink,
    telegramLink,
    instagramLink,
    mailToLink,
    resumeLink,
  } = links;
  const stylingProps: string = 'w-10 h-10 rounded-xl';

  return (
    <div className="bg-primary-navy flex flex-row gap-2 justify-center pt-6">
      <LinkIcon link={githubLink} stylingProps={stylingProps}>
        <BsGithub size={20} />
      </LinkIcon>
      <LinkIcon link={linkedinLink} stylingProps={stylingProps}>
        <BsLinkedin size={20} />
      </LinkIcon>
      <LinkIcon link={telegramLink} stylingProps={stylingProps}>
        <BsTelegram size={20} />
      </LinkIcon>
      <LinkIcon link={instagramLink} stylingProps={stylingProps}>
        <BsInstagram size={20} />
      </LinkIcon>
      <LinkIcon link={mailToLink} stylingProps={stylingProps}>
        <AiFillMail size={20} />
      </LinkIcon>
      <LinkIcon link={resumeLink} stylingProps={stylingProps}>
        <AiFillContainer size={20} />
      </LinkIcon>
    </div>
  );
};

export default LinkIconsGroup;
