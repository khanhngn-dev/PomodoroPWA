export type ThemeConfig = {
	text: string;
	background: string;
	innerBack: string;
	invert: string;
	invertBack: string;
};

export const greenT: ThemeConfig = {
	text: 'var(--color-accent)',
	background: 'var(--color-accent)',
	innerBack: 'var(--color-darker-accent)',
	invert: 'var(--color-primary)',
	invertBack: 'var(--color-secondary)',
};

export const redT: ThemeConfig = {
	text: 'var(--color-secondary)',
	background: 'var(--color-primary)',
	innerBack: 'var(--color-secondary)',
	invert: 'var(--color-accent)',
	invertBack: 'var(--color-darker-accent)',
};

export const purpleT: ThemeConfig = {
	text: 'var(--color-lighter-purple)',
	background: 'var(--color-lighter-purple)',
	innerBack: 'var(--color-purple)',
	invert: 'var(--color-blue)',
	invertBack: 'var(--color-darker-blue)',
};

export const blueT: ThemeConfig = {
	text: 'var(--color-lighter-blue)',
	background: 'var(--color-lighter-blue)',
	innerBack: 'var(--color-blue)',
	invert: 'var(--color-purple)',
	invertBack: 'var(--color-darker-purple)',
};

export const rgT = [redT, greenT];
export const pbT = [purpleT, blueT];
