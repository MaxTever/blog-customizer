import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from 'components/select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	fontSizeOptions,
	defaultArticleState,
	contentWidthArr,
	ArticleStateType,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { useEffect, useState, useRef } from 'react';
import { Separator } from '../separator';
import { Text } from '../text';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (param: ArticleStateType) => void;
};

export const ArticleParamsForm: React.FunctionComponent<
	ArticleParamsFormProps
> = ({ articleState, setArticleState }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const formRef = useRef<HTMLElement | null>(null);
	const [fieldformState, setFormState] =
		useState<ArticleStateType>(articleState);
	const closeRef = useRef<HTMLDivElement | null>(null);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef: closeRef,
		onClose: () => {
			setIsMenuOpen(isMenuOpen);
		},
		onChange: (newValue) => {
			setIsMenuOpen(newValue);
		},
	});

	useEffect(() => {
		if (isMenuOpen) {
			formRef.current?.classList.add(styles.container_open);
		} else {
			formRef.current?.classList.remove(styles.container_open);
		}
	}, [isMenuOpen]);

	const handleChangeSelect = (
		option: OptionType,
		optionKey: keyof ArticleStateType
	) => setFormState({ ...fieldformState, [optionKey]: option });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleState(fieldformState);
	};

	const clearFormState = () => {
		setFormState(defaultArticleState);
		setArticleState(defaultArticleState);
	};

	return (
		<div ref={closeRef}>
			<ArrowButton
				onClick={handleClick}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<aside ref={formRef} className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite={false}>
						Задайте параметры
					</Text>
					<Select
						selected={fieldformState.fontFamilyOption}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={(option) =>
							handleChangeSelect(option, 'fontFamilyOption')
						}></Select>
					<RadioGroup
						name={'Шрифты'}
						options={fontSizeOptions}
						selected={fieldformState.fontSizeOption}
						title={'Размер шрифта'}
						onChange={(option) =>
							handleChangeSelect(option, 'fontSizeOption')
						}></RadioGroup>
					<Select
						selected={fieldformState.fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={(option) =>
							handleChangeSelect(option, 'fontColor')
						}></Select>
					<Separator />
					<Select
						selected={fieldformState.backgroundColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={(option) =>
							handleChangeSelect(option, 'backgroundColor')
						}></Select>
					<Select
						selected={fieldformState.contentWidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={(option) =>
							handleChangeSelect(option, 'contentWidth')
						}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={clearFormState} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
