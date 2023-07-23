import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { IExperienceView } from '@/types/experience.ts';

const ExperienceView = ({ experienceItem }: IExperienceView) => {
  const { job, workEnd, workStart, experience, title, stack } = experienceItem;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className={clsx(
        'border-[1px] rounded-md border-highlight',
        'p-4',
        'text-base',
      )}
    >
      <div
        className={clsx(
          'flex flex-col items-center',
          'md:justify-between md:items-start md:flex-row ',
        )}
      >
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl">{job}</div>
          <div className="text-secondary-light-grey">{title}</div>
        </div>
        <div className="flex flex-row gap-1">
          <div>{`${workStart}`}</div>
          <div>-</div>
          <div>{workEnd}</div>
        </div>
      </div>
      <div className="bg-highlight h-[1px] rounded-full my-4" />
      <div className="text-justify mb-4">
        <ul>
          {experience.map((experienceItem, index) => (
            <li key={index} className="list-disc list-inside">
              {experienceItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        {stack.map((stackItem, stackIndex) => (
          <div
            key={stackIndex}
            className={clsx(
              'bg-primary-light-navy text-primary-icon-light',
              'rounded-lg p-1',
              'text-sm',
            )}
          >
            {stackItem}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceView;
