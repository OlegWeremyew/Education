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


export const ControlledInput = () => {
    const [parantValue, setParantValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParantValue(e.currentTarget.value)
    }

    return <input value={parantValue}
                  onChange={onChangeHandler}/>
}


export const ControlledCheckbox = () => {
    const [parantValue, setParantValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParantValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parantValue} onChange={onChangeHandler}/>
}


export const ControlledSelect = () => {
    const [parantValue, setParantValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParantValue(e.currentTarget.value)
    }

    return (
   <select value={parantValue}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"1"}>Kiev</option>
    </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={"Oleg"}/>
