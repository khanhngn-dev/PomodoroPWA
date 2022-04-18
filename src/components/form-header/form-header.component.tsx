import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormHeaderWrapper } from './form-header.styles';

type FormHeaderProps = {
	title: string;
	subTitle: string;
	location: string;
	linkText: string;
};

const FormHeader: FC<FormHeaderProps> = ({ title, subTitle, location, linkText }) => (
	<FormHeaderWrapper>
		<h1>{title}</h1>
		<span>
			{`${subTitle} `}
			<Link style={{ color: 'white', fontWeight: 'bold' }} to={location}>
				{linkText}
			</Link>
		</span>
	</FormHeaderWrapper>
);

export default FormHeader;
