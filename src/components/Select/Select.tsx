import React, {ChangeEvent, useState} from 'react';

type itemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: Array<itemType>
}

export const Select = (props: SelectPropsType) => {

    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return (
        <div>
            <select value={selectValue} onChange={onChangeSelectHandler}>
                {props.items.map(m => <option value={m.value}>{m.title}</option>)}
            </select>
        </div>
    );
};
