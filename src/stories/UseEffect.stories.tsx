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


export const SimpleTimeOutExample = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log("SimpleTimeOutExample")

   /* useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)
    }, [counter])*/

    useEffect(() => {
        setInterval(() => {
            setCounter((state)=>state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter}, this is fake-  {fake}
           {/* <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </>
    )
}