import { WorksExperience_T } from '@/types/experience.ts';
import { clsx } from 'clsx';

const ExperienceView = ({
  experienceItem,
}: {
  experienceItem: WorksExperience_T;
}) => {
  const { job, workEnd, workStart, experience, title, stack } = experienceItem;
  return (
    <div
      className={clsx(
        'border-[1px] rounded-md border-highlight',
        'p-4',
        'text-base',
      )}
    >
      <div className={clsx('flex flex-row justify-between')}>
        <div>
          <div className="text-xl">{job}</div>
          <div className="text-secondary-light-grey">{title}</div>
        </div>
        <div className={clsx('flex flex-row gap-2')}>
          <div>{`${workStart} -`}</div>
          <div>{workEnd}</div>
        </div>
      </div>
      <div className="bg-highlight h-[1px] rounded-full my-4" />
      <div className={'text-justify mb-4'}>{experience}</div>
      <div className="flex flex-wrap gap-4">
        {stack.map((stackItem, stackIndex) => (
          <div
            key={stackIndex}
            className={clsx('bg-primary-light-navy', 'p-1', 'rounded-lg')}
          >
            {stackItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;
