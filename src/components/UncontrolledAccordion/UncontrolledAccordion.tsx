import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    setCollapsedCallback: () => void
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    //let [collapsed, setCollapsed] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setCollapsedCallback={() => dispatch({type: TOGGLE_COLLAPSED})}
            />
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={() => {
            props.setCollapsedCallback()
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