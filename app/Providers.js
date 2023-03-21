'use client';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='modeSwitch'>{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
