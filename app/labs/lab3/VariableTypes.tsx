export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    
    let myString = "test";
    let myNum = 2026;
    let checkMyString = typeof myString;
    let checkMyNum = typeof myNum;

    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let checkSampleCount = typeof sampleCount;
    let checkSampleLabel = typeof sampleLabel;
    
    return (
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariable = {numberVariable} <br />
            floatingPointNumber = {floatingPointNumber} <br />
            stringVariable = {stringVariable} <br />
            booleanVariable = {booleanVariable + ""} <br />
            isNumber = {isNumber} <br />
            isString = {isString} <br />
            isBoolean = {isBoolean} <br />

            myString = {myString} <br />
            myNum = {myNum} <br />
            checkMyString = {checkMyString} <br />
            checkMyNum = {checkMyNum} <br />

            sampleCount = {sampleCount} <br />
            sampleLabel = {sampleLabel} <br />
            checkSampleCount = {checkSampleCount} <br />
            checkSampleLabel = {checkSampleLabel} <br />
            <hr />
        </div>
    )
}