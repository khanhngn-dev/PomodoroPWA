import styled from 'styled-components';
import Button from '../button/button.component';

export const FormContainer = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 20px;
	padding: 20px;
	border-radius: 20px;
	width: 90%;
	max-width: 500px;
	background-color: var(--color-grey);
`;

export const InputContainer = styled.div`
	width: 500px;
	background-color: var(--color-grey);
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 20px;
`;

export const ItemButton = styled(Button)`
	width: 90%;
	&.break {
		background-color: #008900;
		&:hover {
			background-color: var(--color-accent);
		}
	}
	&.work {
		background-color: var(--color-secondary);
		&:hover {
			background-color: var(--color-primary);
		}
	}
`;
