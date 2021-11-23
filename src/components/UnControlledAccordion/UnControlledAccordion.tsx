import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}

const UnControlledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>---{props.title}---</h3>
        </div>
    );
}
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UnControlledAccordion;
