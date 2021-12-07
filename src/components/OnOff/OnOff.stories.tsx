import React, {useState} from 'react';

import OnOff from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} onChange={x=>x}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff on={value} onChange={setValue}/>;
}
