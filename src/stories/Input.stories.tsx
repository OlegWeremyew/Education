import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: "input",
    //components: input
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger;
        const actialValue = e.currentTarget.value
        setValue(actialValue)
    }

    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement //Воспринимать как
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>
            save
        </button>
        - actual value: {value}</>
}


export const ControlledInputWithFixedValue = () => <input value={"Oleg"}/>
