import {
  useContext,
  useState,
  createContext,
  SetStateAction,
  ReactNode,
  Dispatch,
} from 'react';

type themeType = 'dark' | 'light';
type ProviderProps = {
  children: ReactNode;
};

// initialize  context
const ThemeProiderContextState = createContext<themeType>(null);
const ThemeProviderContextSetState = createContext<
  Dispatch<SetStateAction<themeType>>
>(null);

function ThemeProvider({ children }: ProviderProps) {
  const [theme, toggleTheme] = useState<themeType>('dark');

  return (
    <ThemeProiderContextState.Provider value={theme}>
      <ThemeProviderContextSetState.Provider value={toggleTheme}>
        {children}
      </ThemeProviderContextSetState.Provider>
    </ThemeProiderContextState.Provider>
  );
}

export type UseThemeType = [themeType, Dispatch<SetStateAction<themeType>>];
function useTheme() {
  const theme = useContext(ThemeProiderContextState);
  const toggleTheme = useContext(ThemeProviderContextSetState);
  const state: UseThemeType = [theme, toggleTheme];
  return state;
}

function useThemeState(): themeType {
  const theme = useContext(ThemeProiderContextState);
  return theme;
}

function useThemeSetState(): Dispatch<SetStateAction<themeType>> {
  const toggleTheme = useContext(ThemeProviderContextSetState);
  return toggleTheme;
}

export { ThemeProvider, useTheme, useThemeState, useThemeSetState };
