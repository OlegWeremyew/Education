import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}

type ActionType = {
    type: "TOGGLE-COLLAPSED"
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}

export const UnControlledAccordion = (props: AccordionPropsType) => {

    //let [collapsed, setCollapsed] = useState(false)

    let [collapsed, dispatchCollapsed] = useReducer(reducer, false)

    return (
        <div>
            {/*<AccordionTitle
            title={props.titleValue}
            onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle
                title={props.titleValue}
                onClick={() => dispatchCollapsed({type: "TOGGLE-COLLAPSED"})}/>
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
