import { render } from '@testing-library/react';

import { ThemeProvider } from '../providers/ThemeProvider';

export const renderTheme = (children) => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
