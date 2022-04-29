import { FC, InputHTMLAttributes } from 'react';

import { FilterToggleWrapper, FilterLabel, FilterWithLabel } from './filter-toggle.styles';

type FilterProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FilterToggle: FC<FilterProps> = ({ label, ...others }) => {
	return (
		<FilterWithLabel className='relative flex justify-center items-center w-[30%]'>
			<FilterToggleWrapper className='w-[30%] h-[50px]' id={label} {...others} />
			<FilterLabel
				className='text-[1.1rem] font-bold absolute text-center leading-[50px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-cl bg-[#fff] border-[3px] border-solid border-[#fff]'
				htmlFor={label}
			>
				{label}
			</FilterLabel>
		</FilterWithLabel>
	);
};

export default FilterToggle;
