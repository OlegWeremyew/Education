import React, {useState, KeyboardEvent, useEffect} from 'react';
import style from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

        const [active, setActive] = useState<boolean>(false)
        const [hoveredElementValue, setHoveredElementValue] = useState<any>(props.value)

        const selectedItem = props.items.find(i => i.value === props.value)
        const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

        useEffect(() => {
            setHoveredElementValue(props.value)
        }, [props.value])


        const toggleItems = () => {
            setActive(!active)
        }
        const onItemClick = (value: any) => {
            props.onChange(value);
            toggleItems()
        }
        const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {

            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                for (let i = 0; i < props.items.length; i++) {
                    if (props.items[i].value === hoveredElementValue) {
                        const pretendentElement = (e.key === "ArrowDown")
                            ? props.items[i + 1]
                            : props.items[i - 1]
                        if (pretendentElement) {
                            props.onChange(pretendentElement.value)
                            return
                        }
                    }
                }
                if (!selectedItem) {
                    return props.onChange(props.items[0].value)
                }
            }
            if (e.key === "Escape" || e.key === "Enter") {
                setActive(false)
            }
        }

        return (
            <>
                <div className={style.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                    <span className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                    {
                        active && <
                            div className={style.items}>
                            {props.items.map(m =>
                                <div
                                    onMouseEnter={() => setHoveredElementValue(m.value)}
                                    className={style.item + " " + (hoveredItem === m ? style.selected : "")}
                                    key={m.value}
                                    onClick={() => onItemClick(m.value)}>
                                    {m.title}
                                </div>)}
                        </div>
                    }
                </div>
            </>
        );
    }
;
