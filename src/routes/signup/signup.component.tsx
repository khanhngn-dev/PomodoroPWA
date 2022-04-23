import { useFormik, FormikErrors } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserError } from '../../store/user/user.selectors';
import { signUp } from '../../store/user/user.action';

import FormHeader from '../../components/form-header/form-header.component';
import FormInputWrapper from '../../components/form-input-wrapper/form-input-wrapper.component';
import Button from '../../components/button/button.component';
import { FormWrapper, SignUpWrapper, ErrorWrapper } from './signup.styles';

type FormTypes = {
	// displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const SignUp = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectUserError);

	const handleSubmit = (values: FormTypes, resetForm: any) => {
		dispatch(signUp(values.email, values.password));
		resetForm();
	};

	const validate = (values: FormTypes) => {
		let errors: FormikErrors<FormTypes> = {};
		if (values.password !== values.confirmPassword) {
			errors.confirmPassword = 'PASSWORD DO NOT MATCH';
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			// displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate,
		onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
		onReset: (values: FormTypes) => {
			values = {
				// displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};
		},
	});

	return (
		<SignUpWrapper>
			<FormHeader
				title='Sign Up'
				subTitle='Already have an account?'
				location='/signin'
				linkText='Sign in'
			/>
			<ErrorWrapper>
				{formik.errors.confirmPassword
					? formik.errors.confirmPassword
					: error?.code.split('auth/')[1].replaceAll('-', ' ').toLocaleUpperCase()}
			</ErrorWrapper>
			<FormWrapper onSubmit={formik.handleSubmit}>
				{/* <FormInputWrapper
					required
					label='Display Name*'
					type='text'
					name='displayName'
					id='displayName'
					placeholder=' '
					maxLength={20}
					value={formik.values.displayName}
					onChange={formik.handleChange}
				/> */}
				<FormInputWrapper
					required
					label='Email*'
					type='email'
					name='email'
					id='email'
					placeholder=' '
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<FormInputWrapper
					required
					label='Password*'
					type='password'
					name='password'
					id='password'
					placeholder=' '
					minLength={6}
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<FormInputWrapper
					required
					label='Confirm Password*'
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					placeholder=' '
					minLength={6}
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
				/>
				<Button buttonType='submit' type='submit'>
					Sign Up
				</Button>
			</FormWrapper>
		</SignUpWrapper>
	);
};

export default SignUp;
