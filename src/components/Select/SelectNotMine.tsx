import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from "./SelectNotMine.module.css"

type itemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<itemType>
}

export const SelectNotMine = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)

    useEffect(() => {
        sethoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const showItemsHandler = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        showItemsHandler()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {

            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].value === hoveredElementValue) {

                    const pretendentElement = e.key === "ArrowDown" ?
                        props.items[i + 1] :
                        props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value.value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            {/*         <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>*/}

            <div className={s.select} onKeyUp={onKeyUpHandler}>
                <span className={s.main} onClick={showItemsHandler}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                sethoveredElementValue(i.value)
                            }}
                            className={s.items + " " + ((hoveredItem === i) ? s.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
};
