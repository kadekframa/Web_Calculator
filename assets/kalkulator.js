// Membuat object calculator dan berisikan beberapa property
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};


// Fungsi Update Display Kalkulator.
function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}


// Fungsi untuk menghapus (clear) Kalkulator
function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}


// Fungsi untuk memasukkan angka ke dalam nilai displayNumber kalkulator.
function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit
    }
}


function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}


function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi.
        calculator.displayNumber = '0';
    }else{
        alert('Operator sudah ditetapkan');
    }
}


function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert('anda belum menetapkan operator');
        return;
    }

    let result = 0;
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }


    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }

    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();

}


// Menambahkan event handler pada setiap button di Kalkulator.
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event){

        // mendapatkan object elemen yang diklik.
        const target = event.target;

        // melakukan pengecekan apabila event target (button target) mengandung class 'clear', maka akan dianggap button clear.
        if(target.classList.contains('clear')){
            clearCalculator();              // memanggil function clearCalculator() sebagai eksekusi pada button CE (clear).
            updateDisplay();
            return;
        }


        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }


        // memanggil function inputDigit() dengan berisikan parameter konten dari target yang dipilih (button yang diklik).
        inputDigit(target.innerText);
        updateDisplay();
    });
}