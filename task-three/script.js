const num = +prompt('Введите число', '');

if (num < 5) {
    alert("Слишком маленькое число!");
} else {
    for (let i = 3; i <= num; i++) {
        console.log(i);
    }
}