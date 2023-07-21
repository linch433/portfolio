import { NavLink } from 'react-router-dom';
import { navRoutes } from '@/utils/routes.ts';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Header = () => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-center',
        'gap-6 pt-10',
        'bg-primary-navy text-primary-light-grey text-lg',
      )}
    >
      {navRoutes.map((navLink) => (
        <NavLink key={navLink.key} to={navLink.navigationRoute}>
          {({ isActive }) => (
            <>
              {navLink.navigationName}
              {isActive ? (
                <motion.div
                  className={clsx(
                    'h-1',
                    'bg-secondary-light-navy',
                    'rounded-full',
                  )}
                  layoutId="underline"
                />
              ) : null}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
