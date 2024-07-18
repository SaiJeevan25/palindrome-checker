// Validate and display the result of palindrome check
function resultValidator(reDefinedInputValue, reverseStr, inputValue, result) {
  result.classList.add('result-container')
  if (!reDefinedInputValue){
      alert('Please input a value');
    } else {
       result.innerHTML = `<span>${inputValue}</span> is ${reDefinedInputValue === reverseStr ? '' : '<span>not</span> '}a <span>palindrome</span>`;
    };
}

// Reverse the input string
function reverseString(inputValue){
  let reverseStr = '';
    for (let i = inputValue.length-1; i>=0; i--) {
      reverseStr = reverseStr + inputValue[i];
  }
  return reverseStr
}

// Add event listener for button click
document.querySelector('#check-btn')
  .addEventListener('click', () => {
    const result = document.querySelector('#result');
    const inputBox = document.querySelector('#text-input');
    const inputValue = inputBox.value;
    let redefinedInputValue = (inputValue.toLowerCase()).replace(/[^a-zA-Z0-9]/g, '');
    const reverseStr = reverseString(redefinedInputValue)   
    resultValidator(redefinedInputValue, reverseStr, inputValue, result);
    inputBox.value = '';
  });
  