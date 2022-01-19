import React from 'react';

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            {props.items.map(m => <div>{m.title}</div>)}
        </div>
    );
};
