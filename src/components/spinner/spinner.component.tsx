import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = () => (
	<SpinnerOverlay className='h-[60vh] w-full flex justify-center items-center'>
		<SpinnerContainer className='inline-block w-[50px] h-[50px] border-[3px] border-solid border-[#c3c3c399] border-t-[#636767] rounded-full animate-spin'></SpinnerContainer>
	</SpinnerOverlay>
);

export default Spinner;
