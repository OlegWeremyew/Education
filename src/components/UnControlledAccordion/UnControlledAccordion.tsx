import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string,
}

export const UnControlledAccordion = (props: AccordionPropsType) => {

    let [state, dispatchCollapsed] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={() => dispatchCollapsed({type: "TOGGLE-COLLAPSED"})}/>
            {!state.collapsed && <AccordionBody/>}
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
