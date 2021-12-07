import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: "input",
    //components: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => {
        const actialValue = e.currentTarget.value
        setValue(actialValue) //можно сократить объеденив 2 строки
    }}/> - {value}</>
}


export const ControlledInputWithFixedValue = () => <input value={"Oleg"}/>