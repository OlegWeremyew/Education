import React, {useState} from "react";

type RatingType = 1 | 2 | 3 | 4 | 5 | 0

export function UncontrolledRating() {

    let [value, setValue] = useState<RatingType>(4)

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingType
    setValue: (value: RatingType) => void
}

function Star(props: StarPropsType) {
    return (
        (props.selected) ? <span onClick={()=>{props.setValue(props.value)}}><b>star</b> </span> : <span>star </span>
    )
}
