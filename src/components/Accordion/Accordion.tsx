import React from "react";


type itemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: Array<itemType>
    onClick: (value: any)=>void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}



type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={(e)=>props.onChange()}>
                ---{props.title}---
            </h3>
        </div>
    );
}


type AccordionBodyPripsType = {
    items: Array<itemType>
    onClick: (value: any)=>void
}

const AccordionBody = (props: AccordionBodyPripsType) => {
    return (
        <div>
            <ul>
                {props.items.map((m, index)=><li onClick={()=>{props.onClick(m.value)}} key={index}>{m.title}</li>)}
            </ul>
        </div>
    );
}

