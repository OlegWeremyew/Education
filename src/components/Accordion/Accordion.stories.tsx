import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: "Accordion",
    component: Accordion,
}

const callback = action("accordion mode event fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callBackProps = {
    onChange: callback,
    onClick: onClickCallback,
}

export const MenuUnCollapsedMode = Template.bind({})
MenuUnCollapsedMode.args = {
    ...callBackProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callBackProps,
    titleValue: "Users",
    collapsed: false,
    items: [
        {title: "Dmitri", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4},
    ],
}

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)

    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => {
            setValue(!value)
        }}
        items={[
            {title: "Dimich", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
            {title: "Victor", value: 4},
        ]}
        onClick={(value) => {
            alert(`user with ID ${value} should be happy`)
        }}/>
}
