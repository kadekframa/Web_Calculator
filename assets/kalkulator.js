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


// Menambahkan event handler pada setiap button di Kalkulator.
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event){

        // mendapatkan object elemen yang diklik.
        const target = event.target;

        // melakukan pengecekan apabila event target (button target) mengandung class 'clear', maka akan dianggap button clear.
        if(target.classList.contains('clear')){
            clearCalculator();                  // memanggil function clearCalculator() sebagai eksekusi pada button CE (clear).
            updateDisplay();
            return;
        }


        // memanggil function inputDigit() dengan berisikan parameter konten dari target yang dipilih (button yang diklik).
        inputDigit(target.innerText);
        updateDisplay();
    });
}