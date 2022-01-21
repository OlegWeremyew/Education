import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    title: "React.memo"
}

const NewMessageCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Oleg", "Diana", "Artem", "Olga"])

    const addUser = () => {
        setUsers([...users, "Svetlana" + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}