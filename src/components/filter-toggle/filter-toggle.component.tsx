import { FC, InputHTMLAttributes } from 'react';

import { FilterToggleWrapper, FilterLabel, FilterWithLabel } from './filter-toggle.styles';

type FilterProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FilterToggle: FC<FilterProps> = ({ label, ...others }) => {
	return (
		<FilterWithLabel>
			<FilterToggleWrapper id={label} {...others} />
			<FilterLabel htmlFor={label}>{label}</FilterLabel>
		</FilterWithLabel>
	);
};

export default FilterToggle;
