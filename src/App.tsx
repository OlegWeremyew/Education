import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RaitingValueType, Rating} from "./components/Raiting/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
/*import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";*/

const App = () => {

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setswitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={setswitchOn}/>
            <UncontrolledOnOff onChange={setswitchOn}/> {switchOn.toString()}
            <UnControlledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<UncontrolledRating/>*/}
            <Rating value={raitingValue}
                    onClick={setRaitingValue}/>

            {/*  <UncontrolledOnOff/>
            <UncontrolledOnOff/>*/}

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