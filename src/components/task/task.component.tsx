import { FC, ChangeEvent, memo, MouseEvent } from 'react';

import { ReactComponent as CrossSVG } from '../../assets/x-svgrepo-com.svg';
import {
	TaskSummary,
	TaskDateContainer,
	TaskContainer,
	DeleteTaskContainer,
	CheckBoxContainer,
	TaskNameContainer,
	DetailContainer,
} from './task.styles';

export type ListProps = {
	id: string;
	taskName: string;
	complete: boolean;
	completedAt: string;
	description: string;
	openDesc: boolean;
	onChecked: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
	onDelete: (event: MouseEvent<HTMLSpanElement>, id: string) => void;
	onOpen: (event: MouseEvent<HTMLDivElement>, id: string) => void;
};

const Task: FC<ListProps> = memo(
	({ id, taskName, completedAt, complete, description, openDesc, onChecked, onDelete, onOpen }) => {
		return (
			<TaskContainer
				className='rounded-cxl w-[92%] min-h-max text-[1.2rem] p-[10px] text-[#fff] tracking-[1px] flex justify-center items-center flex-col smooth-transition'
				id={id}
			>
				<TaskSummary
					className='flex items-center justify-around font-bold min-h-[80px] w-full hover:cursor-pointer'
					onClick={(e) => onOpen(e, id)}
				>
					<TaskNameContainer className='flex-[3] text-center break-words w-[200px] md:w-[120px]'>
						{taskName}
					</TaskNameContainer>
					<CheckBoxContainer
						className='m-5 w-[9px] h-[9px] relative flex-shrink-0 hover:cursor-pointer hover:before:bg-[#c7c7c7] before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[260%] before:h-[260%] before:rounded-full before:bg-[#fff] before:border-[3px] before:border-solid before:border-[#fff] smooth-transition'
						type='checkbox'
						checked={complete}
						onChange={(e) => onChecked(e, id)}
					/>
					<TaskDateContainer className='flex-[2] text-center'>{completedAt}</TaskDateContainer>
					<DeleteTaskContainer
						className='m-[10px] flex items-center smooth-transition flex-shrink-0 hover:text-[darkred] hover:cursor-pointer s'
						onClick={(e) => onDelete(e, id)}
					>
						<CrossSVG />
					</DeleteTaskContainer>
				</TaskSummary>
				{openDesc && (
					<DetailContainer className='m-auto rounded-cxl border-[2px] border-dashed border-[#fff] w-[98%] p-5 smooth transition'>
						{description}
					</DetailContainer>
				)}
			</TaskContainer>
		);
	}
);

export default Task;
