import React, {useState} from 'react';
import {UncontrolledRating} from "./UnControlledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onClick={x => x}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onClick={x => x}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onClick={x => x}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onClick={x => x}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onClick={x => x}/>
export const Rating5 = () => <Rating value={5} onClick={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState(3);
    return <Rating value={rating} onClick={setRating}/>;
}
