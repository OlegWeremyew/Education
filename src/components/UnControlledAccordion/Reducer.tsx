type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            return stateCopy
        }
        default:
            return state
        //throw new Error("Bad action.type") ---- можно так
    }
}