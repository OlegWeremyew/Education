import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import OnOff from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} onChange={action('on or off clicked')}/>
export const OffMode = () => <OnOff on={false} onChange={action('on or off clicked')}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff on={value} onChange={setValue}/>;
}
