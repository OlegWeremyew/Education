import React, {useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    title: 'useState'
}

function generateData() {
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generateData, [])
    //const [counter, setCounter] = useState<number>(initValue)

    const [counter, setCounter] = useState<number>(generateData) //воспримит как функцию и вызовет и раз, после чего запомнит

    const changer = (state: number) => state + 1

    return (
        <>
            {/*<button onClick={() => setCounter(changer)}>+</button>*/}
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}
