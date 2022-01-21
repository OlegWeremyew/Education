import React, {useCallback, useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    title: 'useMemoAndUseCallback'
}

export const DifficultCountingExample = () => {
    console.log("DifficultCountingExample")
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA
    let resultB


    //принимает callback и парамерт за которым следит (следит за его изменением)
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000_000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= b; i++) {
            tempResultB *= i
        }
        return tempResultB
    }, [b])

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Oleg", "Diana", "Artem", "Olga"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    }, [users])

    const addUser = () => {
        setUsers([...users, "Svetlana" + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(["React", "HTML", "JS", "CSS"])

    const addBook = () => {
        console.log(books)
        setBooks([...books, "Angular" + new Date().getTime()])
    }

  /*  const memoizedBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, "Angular" + new Date().getTime()])
        }
    }, [books])*/

    const memoizedBook2 = useCallback(() => {
            console.log(books)
            setBooks([...books, "Angular" + new Date().getTime()])
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook={memoizedBook2}/>
        </>
    )
}

type BooksSecretProps = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretProps) => {
    console.log("BOOKS SECRET")
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>
    )
}

const Books = React.memo(BooksSecret)