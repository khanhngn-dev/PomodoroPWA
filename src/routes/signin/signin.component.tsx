import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import FormHeader from '../../components/form-header/form-header.component';
import FormInputWrapper from '../../components/form-input-wrapper/form-input-wrapper.component';
import Button from '../../components/button/button.component';

import { FormWrapper, SignInWrapper, ErrorWrapper } from './signin.styles';
import { signIn } from '../../store/user/user.action';
import { selectUserError } from '../../store/user/user.selectors';

const SignIn = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectUserError);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			dispatch(signIn(values.email, values.password));
		},
	});

	return (
		<SignInWrapper>
			<FormHeader
				title='Sign In'
				subTitle="Don't have an account?"
				location='/signup'
				linkText='Create one'
			/>
			<ErrorWrapper>
				{error?.code.split('auth/')[1].replaceAll('-', ' ').toLocaleUpperCase()}
			</ErrorWrapper>
			<FormWrapper onSubmit={formik.handleSubmit}>
				<FormInputWrapper
					label='Email*'
					required
					id='email'
					name='email'
					type='email'
					placeholder=' '
					onChange={formik.handleChange}
					value={formik.values.email}
				></FormInputWrapper>
				<FormInputWrapper
					label='Password*'
					required
					id='password'
					name='password'
					type='password'
					placeholder=' '
					onChange={formik.handleChange}
					value={formik.values.password}
				></FormInputWrapper>
				<Button buttonType='submit' type='submit'>
					Sign in
				</Button>
			</FormWrapper>
		</SignInWrapper>
	);
};

export default SignIn;
