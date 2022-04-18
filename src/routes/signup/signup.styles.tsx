import styled from 'styled-components';

export const FormWrapper = styled.form`
	width: 100%;
	margin: auto;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export const SignUpWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 60vw;
	padding: 20px;
	margin: 40px auto;
	border-radius: 20px;
	background-color: var(--color-grey);
	color: var(--color-primary);
	letter-spacing: 1px;
	@media (max-width: 768px) {
		width: 90vw;
	}
`;

export const ErrorWrapper = styled.div`
	width: 96%;
	margin: 20px auto;
	padding: 10px 20px;
	text-align: center;
	letter-spacing: 1px;
	font-weight: bold;
	font-size: 1.2rem;
	color: orange;
`;
