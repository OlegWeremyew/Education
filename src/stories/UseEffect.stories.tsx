import React, {useEffect, useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    title: "UseEffect demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and for every change 'counter'")
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
    })

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}


export const SetIntervalExample = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log("SimplesetIntervalExample")

    /* useEffect(() => {
         setTimeout(() => {
             console.log("setTimeout")
             document.title = counter.toString()
         }, 1000)
     }, [counter])*/

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            Hello, counter: {counter}, this is fake- {fake}
            {/* <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </>
    )
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occurred " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }

    }, [counter])

    const increase = () => {
        return setCounter(counter + 1)
    }
    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState<string>("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])

    return (
        <>Typed, text: {text}</>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState<string>("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds passed")
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>text: {text}</>
    )
}