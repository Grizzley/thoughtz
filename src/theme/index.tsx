import * as React from 'react';
import {
	useTheme as useReTheme,
	ThemeProvider as RestyleProvider,
	TextProps,
	BoxProps,
} from '@shopify/restyle';

type ThemeType = typeof BaseTheme & {
	textVariants: {[key: string]: TextProps<typeof BaseTheme>};
	buttonVariants: {[key: string]: BoxProps<typeof BaseTheme>};
};

const createTheme = <T extends ThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
	colors: {},
	borderRadius: {},
	spacing: {},
	margin: {},
	breakpoints: {},
};

const theme = createTheme({
	...BaseTheme,
	textVariants: {},
	buttonVariants: {},
	navigation: {
		dark: false,
		colors: {},
	},
});

const darkTheme = createTheme({
	...BaseTheme,
	textVariants: {},
	buttonVariants: {},
	navigation: {
		dark: true,
		colors: {},
	},
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
	<RestyleProvider theme={theme}>{children}</RestyleProvider>
);
