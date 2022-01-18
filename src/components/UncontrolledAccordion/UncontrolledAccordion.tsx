import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    setCollapsedCallback: (collapsed: boolean) => void
    collapsed: boolean
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsedCallback={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={() => {
            props.setCollapsedCallback(!props.collapsed)
        }}>
            <h3>{props.title}</h3>
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

export default UncontrolledAccordion