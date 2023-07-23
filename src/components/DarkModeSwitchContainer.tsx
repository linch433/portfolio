import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '@/app/hooks/useTheme.ts';

const DarkModeSwitchContainer = () => {
  const { isDarkMode, handleDarkModeChange } = useTheme();

  return (
    <div className="bg-primary-navy flex items-center justify-center pt-10">
      <DarkModeSwitch onChange={handleDarkModeChange} checked={isDarkMode} />
    </div>
  );
};

export default DarkModeSwitchContainer;
