import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={x=>x}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={x=>x}/>
export const DefaultInputValue = () => <input defaultValue={"yo"}/>

/*
export const ModeChanging = () => {
    return <UncontrolledOnOff onChange={x=>x}/>;
}
*/
