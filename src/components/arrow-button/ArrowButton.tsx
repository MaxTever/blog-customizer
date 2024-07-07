import arrow from 'src/images/arrow.svg';
import React from 'react';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */

// export interface ArrowButtonProps {
// 	onClick: (target: EventTarget) => void;
// }

// export const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({
// 	onClick,
// }) => {
// 	const [click, setClick] = useState(false);

// 	const handleClick = (event: React.MouseEvent) => {
// 		onClick(event.target);
// 		setClick(prevState => !prevState);
// 	};

// 	// const isClicked = click;
// 	// const ArrowButtonClasses = {
// 	// 	[styles.container_open]: isClicked === 'true',
// 	// 	[styles.arrow_open]: isClicked === 'true'
// 	// }

// 	const isClicked = click;
// 	const ArrowButtonClasses = clsx(styles.container, {
// 		[styles.container_open]: isClicked,
// 	});
// 	const ArrowClasses = clsx(styles.arrow, { [styles.arrow_open]: isClicked });

// 	return (
// 		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
// 		<div
// 			role='button'
// 			aria-label='Открыть/Закрыть форму параметров статьи'
// 			tabIndex={0}
// 			className={ArrowButtonClasses}
// 			onClick={handleClick}>
// 			<img src={arrow} alt='иконка стрелочки' className={ArrowClasses} />
// 		</div>
// 	);
// };

export type ArrowButtonProps = {
	onClick: (target: EventTarget) => void;
	openState: boolean;
	setOpen: (value: boolean) => void;
};

export const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({
	openState,
	setOpen,
	onClick,
}) => {
	const handleClick = (event: React.MouseEvent) => {
		onClick(event.target);
		setOpen(!openState);
	};

	const isClicked = openState;
	const ArrowButtonClasses = clsx(styles.container, {
		[styles.container_open]: isClicked,
	});
	const ArrowClasses = clsx(styles.arrow, { [styles.arrow_open]: isClicked });

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={ArrowButtonClasses}
			onClick={handleClick}>
			<img src={arrow} alt='иконка стрелочки' className={ArrowClasses} />
		</div>
	);
};
