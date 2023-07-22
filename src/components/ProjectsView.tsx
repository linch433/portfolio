import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { IProjectsView } from '@/types/projects.ts';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import LinkIcon from '@/components/LinkIcon.tsx';

const ProjectsView = ({ projectsItem }: IProjectsView) => {
  const { logoImg, title, detailsInfo, repositoryLink, deployLink, stack } =
    projectsItem;
  const stylingProps: string = 'h-6 w-6 rounded';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className={clsx(
        'flex flex-col',
        'border-[1px] rounded-md border-highlight',
        'text-base',
        'md:flex-row',
      )}
    >
      <img src={logoImg} alt="project logo" className="rounded-l-md md:w-64" />
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-bold">{title}</div>
          <div className="flex flex-row gap-2">
            <LinkIcon link={repositoryLink} stylingProps={stylingProps}>
              <BsGithub size={18} />
            </LinkIcon>
            <LinkIcon link={deployLink} stylingProps={stylingProps}>
              <BsLink45Deg size={18} />
            </LinkIcon>
          </div>
        </div>
        <div className="my-2">{detailsInfo}</div>
        <div className="flex flex-wrap gap-3">
          {stack.map((projectStack, index) => (
            <div
              key={index}
              className={clsx(
                'bg-primary-light-navy',
                'rounded-lg p-1',
                'text-sm',
              )}
            >
              {projectStack}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsView;
