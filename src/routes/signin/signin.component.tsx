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
		<SignInWrapper className='flex flex-col w-[60vw] p-5 m-[20px_auto] rounded-cxl bg-grey tracking-[1px] md:w-[90vw] md:p-3'>
			<FormHeader
				title='Sign In'
				subTitle="Don't have an account?"
				location='/signup'
				linkText='Create one'
			/>
			<ErrorWrapper className='w-[96%] m-[10px_auto] p-[10px_20px] text-center tracking-[1px] font-bold text-[1.2rem] text-[orange]'>
				{error?.code.split('auth/')[1].replaceAll('-', ' ').toLocaleUpperCase()}
			</ErrorWrapper>
			<FormWrapper
				className='w-full m-auto mt-[40px] flex flex-col items-center gap-5'
				onSubmit={formik.handleSubmit}
			>
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
