import { clsx } from 'clsx';

const Divider = () => {
  return (
    <div className={clsx(`py-10 bg-primary-navy`)}>
      <div className={'bg-highlight h-[1px] rounded-full'} />
    </div>
  );
};

export default Divider;
