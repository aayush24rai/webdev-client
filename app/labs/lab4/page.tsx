"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import EffectExamples from "./effects/EffectExamples";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayOther = () => {
    alert("Sample from parent - Aayush Rai, Khoury College");
  };
  return (
    <div id="wd-lab4" className="p-2">
      <h1>Lab 4 – Managing Client State</h1>
      <p id="wd-lab4-student">Aayush Rai · CS5610 · Northeastern University</p>
      <hr />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} theOtherFunction={sayOther} />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <EffectExamples />
    </div>
  );
}
