function NegativeNum() {
    let inputs = document.getElementById("nums").value;
    if (inputs.length === 0) {
        document.getElementById("res1").value = "вы не ввели числа";
    } else {
        let num = inputs.split(',').map(a => a.trim());
        let negative = [];

        for (let i = 0; i < num.length; i++) {
            if (isNaN(num[i])) {
                document.getElementById("res1").value = "в массиве есть буквы или недопустимые символы";
                return;
            } else {
                let val = parseFloat(num[i]);
                if (val < 0) {
                    negative.push(val);
                }
            }
        }

        if (negative.length > 0) {
            document.getElementById("res1").value = negative.join(', ');
        } else {
            document.getElementById("res1").value = "нет отрицательных чисел";
        }
    }
}

function Palindrome() {
    let input = document.getElementById("words").value;
    if (input.length === 0) {
        document.getElementById("res2").value = "вы не ввели слова";
    } else {
        let words = input.split(',').map(w => w.trim());
        for (let i = 0; i < words.length; i++) {
            if (/\d/.test(words[i])) {
                document.getElementById("res2").value = "в массиве есть цифры";
                return;
            }

            let palindromes = words.filter(word => {
                let reversed = word.split('').reverse().join('');
                return word.toLowerCase() === reversed.toLowerCase();
            });

            if (palindromes.length > 0) {
                document.getElementById("res2").value = palindromes.join(', ');
            } else {
                document.getElementById("res2").value = "нет палиндромов";
            }

        }
    }
}