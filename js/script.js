const setBackground = function() {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
  
    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

let btnSetBackground = document.getElementById('set-Background');
btnSetBackground.addEventListener('click', setBackground);