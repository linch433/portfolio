import { Link } from 'react-router-dom';
import { navRoutes } from '@/utils/routes.ts';

const Header = () => {
  return (
    <div>
      {navRoutes.map((navLink) => (
        <Link key={navLink.key} to={navLink.navigationRoute}>
          {navLink.navigationName}
        </Link>
      ))}
    </div>
  );
};

export default Header;
