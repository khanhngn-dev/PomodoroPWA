export type ThemeConfig = {
	text: string;
	primary: string;
	secondary: string;
	invertPrimary: string;
	invertSecondary: string;
};

export const greenT: ThemeConfig = {
	text: 'var(--color-green)',
	primary: 'var(--color-green)',
	secondary: 'var(--color-darker-green)',
	invertPrimary: 'var(--color-red)',
	invertSecondary: 'var(--color-darker-red)',
};

export const redT: ThemeConfig = {
	text: 'var(--color-darker-red)',
	primary: 'var(--color-red)',
	secondary: 'var(--color-darker-red)',
	invertPrimary: 'var(--color-green)',
	invertSecondary: 'var(--color-darker-green)',
};

export const purpleT: ThemeConfig = {
	text: 'var(--color-lighter-purple)',
	primary: 'var(--color-lighter-purple)',
	secondary: 'var(--color-purple)',
	invertPrimary: 'var(--color-blue)',
	invertSecondary: 'var(--color-darker-blue)',
};

export const blueT: ThemeConfig = {
	text: 'var(--color-lighter-blue)',
	primary: 'var(--color-lighter-blue)',
	secondary: 'var(--color-blue)',
	invertPrimary: 'var(--color-purple)',
	invertSecondary: 'var(--color-darker-purple)',
};

export const rgT = [redT, greenT];
export const pbT = [purpleT, blueT];
