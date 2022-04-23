import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateThemeSettingAsync } from '../../store/theme/theme.actions';

import { ModalContainer } from './modal.styles';
import { rgT, pbT } from '../../theme/theme';
import Button from '../button/button.component';
import { selectCurrentTheme } from '../../store/theme/theme.selectors';

const Modal = memo(() => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectCurrentTheme);

	return (
		<ModalContainer>
			<Button
				style={{
					margin: 0,
					width: '180px',
				}}
				onClick={(e) => {
					e.stopPropagation();
					if (currentTheme === pbT) return;
					dispatch(updateThemeSettingAsync(pbT));
				}}
			>
				Purple - Blue
			</Button>
			<Button
				style={{
					margin: 0,
					width: '180px',
				}}
				onClick={(e) => {
					e.stopPropagation();
					if (currentTheme === rgT) return;
					dispatch(updateThemeSettingAsync(rgT));
				}}
			>
				Red - Green
			</Button>
		</ModalContainer>
	);
});

export default Modal;
