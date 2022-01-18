import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default Accordion