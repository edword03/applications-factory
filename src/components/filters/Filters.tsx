'use client';

import {
	changeFilter,
	FiltersTypes,
	useTypeDispatch,
	useTypeSelector,
} from '@/store';

import { FilterItem } from './FilterItem';
import { filterSelector } from '@/store/selectors';

export const Filters = () => {
	const currentFilter = useTypeSelector(filterSelector);

	const dispatch = useTypeDispatch();

	const handleChangeFilter = (filterBy: FiltersTypes) => {
		return () => {
			dispatch(changeFilter(filterBy));
		};
	};

	return (
		<div className="flex justify-between overflow-auto mt-10 mb-6 whitespace-nowrap">
			<FilterItem
				isActive={currentFilter === FiltersTypes.ALL}
				onClick={handleChangeFilter(FiltersTypes.ALL)}
			>
				Показать все
			</FilterItem>
			<FilterItem
				isActive={currentFilter === FiltersTypes.COMPLETED}
				onClick={handleChangeFilter(FiltersTypes.COMPLETED)}
			>
				Показать только выполненные задачи
			</FilterItem>
			<FilterItem
				isActive={currentFilter === FiltersTypes.NOT_COMPLETED}
				onClick={handleChangeFilter(FiltersTypes.NOT_COMPLETED)}
			>
				Показать только невыполненные задачи
			</FilterItem>
		</div>
	);
};
