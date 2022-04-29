import { memo, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateThemeSettingAsync } from '../../store/theme/theme.actions';

import { ModalContainer } from './modal.styles';
import { rgT, pbT, ThemeConfig } from '../../theme/theme';
import { selectCurrentTheme } from '../../store/theme/theme.selectors';

import Button from '../button/button.component';

const Modal = memo(() => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectCurrentTheme);

	const onUpdateTheme = (e: MouseEvent<HTMLButtonElement>, theme: ThemeConfig[]) => {
		e.stopPropagation();
		if (currentTheme === theme) return;
		dispatch(updateThemeSettingAsync(theme));
	};

	return (
		<ModalContainer className='absolute top-[50px] left-1/2 translate-x-[-50%] flex flex-col w-[200px] p-[10px] rounded-cxl gap-5 z-[1]'>
			<Button
				style={{
					margin: 0,
					width: '180px',
				}}
				onClick={(e) => onUpdateTheme(e, pbT)}
			>
				Purple - Blue
			</Button>
			<Button
				style={{
					margin: 0,
					width: '180px',
				}}
				onClick={(e) => onUpdateTheme(e, rgT)}
			>
				Red - Green
			</Button>
		</ModalContainer>
	);
});

export default Modal;
