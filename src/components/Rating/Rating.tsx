import React from "react";

type RatingType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

export function Rating(props: RatingType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        (props.selected) ? <span><b>star</b> </span> : <span>star </span>
    )
}
