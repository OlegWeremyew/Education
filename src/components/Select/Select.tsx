import React, {ChangeEvent} from 'react';

type itemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    items: Array<itemType>
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{props.value}</div>
            {props.items.map(m => <div>{m.title}</div>)}

        </div>
    );
};
