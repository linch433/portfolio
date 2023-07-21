import { clsx } from 'clsx';

const Divider = ({ paddingValue }: { paddingValue: number }) => {
  return (
    <div className={clsx(`py-${paddingValue} bg-primary-navy`)}>
      <div className={'bg-highlight h-[1px] rounded-full'} />
    </div>
  );
};

export default Divider;
