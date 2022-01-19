import React from "react";
export type ItemType = {
    title: string
    value: number
}


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
    * Element that are showed when is opened. Each item should be [[ItemType]]
     */
    items: Array<ItemType>
    /**
     * Callback that is colled when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
}

export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>---{props.title}---</h3>
        </div>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}
