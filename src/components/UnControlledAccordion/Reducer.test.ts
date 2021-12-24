import {reducer, StateType} from "./Reducer";


test("collapsed should be false", () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expection

    expect(newState.collapsed).toBe(false)

})


// пробник -----------------------------------------------------------

/*
test("reducer should throw error because action.type is incorrect", () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})*/
