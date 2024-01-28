function getInputFieldById(inputId) {
    const inputField = document.getElementById(inputId);
    const InputFieldValueString = inputField.value;
    const InputFieldValue = parseFloat(InputFieldValueString);
    inputField.value ='';
    return InputFieldValue


    
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString)
    return elementValue
}

function setTextElementById(elementId, newValue) {
    const setTextElement = document.getElementById(elementId);
    setTextElement.innerText = newValue;


}