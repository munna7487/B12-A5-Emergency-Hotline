// love count
const love = document.getElementsByClassName('love');
let count = 0;

for (const lovec of love) {
    lovec.addEventListener('click', function () {
        
        count++;

        // update love-display element
        document.getElementById('love-display').innerText = count;
    });
}

//copy count and alert
const cpy = document.getElementsByClassName('cpy');

for (const copy of cpy) {
    copy.addEventListener('click', function () {
        alert('You copied a number');
    });
}
