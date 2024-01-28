const checkAge = () => {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorText = document.getElementById('error')

    try {
        const age = parseInt(ageText)
        if (isNaN(age)) {
            throw ' please enter a number'
        } else if (age < 18) {
            throw ' bacca kacca not allow'
        }
        else if ( age> 30) {
           throw ' murubbura asiyen na' 
        }
       errorText.innerHTML = '' 
}
catch (err) {
        console.log('ERROR:', err)
        errorText.innerHTML ='Error:' + err   
    }
    finally {
        console.log('all done inside try catch')
    }
    console.log(11111)
}
