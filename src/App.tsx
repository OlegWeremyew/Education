import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RaitingValueType, Rating} from "./components/Raiting/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledInputWithFixedValue,
    ControlledSelect
} from "./stories/Input.stories";
import {Select} from "./components/Select/Select";
/*import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";*/

const App = () => {

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setswitchOn] = useState<boolean>(false)

    let onClickHandler = function(){
        return "some item was clicked"
    }

    let onChangeHandler = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const itemsArray = [
        {title: 'oleg', value: 1},
        {title: 'diana', value: 2},
        {title: 'valera', value: 3},
    ]

    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={setswitchOn}/>
            <UncontrolledOnOff onChange={setswitchOn}/> {switchOn.toString()}
            <UnControlledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={onChangeHandler}
                       onClick={onClickHandler}
            items={itemsArray}
            />
            {/*<UncontrolledRating/>*/}
            <Rating value={raitingValue}
                    onClick={setRaitingValue}/>

            {/*  <UncontrolledOnOff/>
            <UncontrolledOnOff/>*/}
            <Select value={"my select"} onChange={onChangeSelectHandler} items={itemsArray}/>

            <div>
                <h4>Class 13</h4>
                <div>
                    <ControlledInput/>
                </div>
                <div>
                    <ControlledCheckbox/>
                </div>
                <div>
                    <ControlledSelect/>
                </div>
                <div>
                    <ControlledInputWithFixedValue/>
                </div>
            </div>

            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <UnRating value={3}/>
            <UnControlledAccordion titleValue={"Menu"} collapsed={true}/>
            <UnControlledAccordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;