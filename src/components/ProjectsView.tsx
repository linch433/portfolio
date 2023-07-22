import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { IProjectsView } from '@/types/projects.ts';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';

const ProjectsView = ({ projectsItem }: IProjectsView) => {
  const { logoImg, title, detailsInfo, repositoryLink, deployLink, stack } =
    projectsItem;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className={clsx(
        'flex flex-row',
        'border-[1px] rounded-md border-highlight',
        'text-base',
      )}
    >
      <img src={logoImg} alt="project logo" className="rounded-l-md w-64" />
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-bold">{title}</div>
          <div className="flex flex-row gap-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              href={repositoryLink}
              target="_blank"
              className={clsx(
                'flex items-center justify-center',
                'w-6 h-6 rounded',
                'bg-primary-light-grey text-highlight',
                'hover:bg-primary-light-navy hover:text-primary-light-grey',
              )}
            >
              <BsGithub size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              href={deployLink}
              target="_blank"
              className={clsx(
                'flex items-center justify-center',
                'w-6 h-6 rounded',
                'bg-primary-light-grey text-highlight',
                'hover:bg-primary-light-navy hover:text-primary-light-grey',
              )}
            >
              <BsLink45Deg size={18} />
            </motion.a>
          </div>
        </div>
        <div className="my-2">{detailsInfo}</div>
        <div className="flex flex-wrap gap-4">
          {stack.map((projectStack, index) => (
            <div
              key={index}
              className={clsx('bg-primary-light-navy', 'rounded-lg p-1')}
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
