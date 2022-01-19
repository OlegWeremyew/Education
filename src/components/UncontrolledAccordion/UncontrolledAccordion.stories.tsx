import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion,
}

const callback = action("accordion mode was event fired")

export const MadeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>
}