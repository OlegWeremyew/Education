import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    defaultValue?: RaitingValueType
}

export const UncontrolledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState<RaitingValueType>((props.defaultValue) ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>

        </div>
    )
}

const Star = (props: StarPropsType) =>
    <span onClick={() => props.setValue()}>
        {(props.selected) ? <b>star </b> : "star "}
    </span>
