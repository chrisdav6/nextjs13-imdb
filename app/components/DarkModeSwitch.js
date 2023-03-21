'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted && currentTheme === 'dark' ? (
        <BsFillSunFill
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonStarsFill
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
