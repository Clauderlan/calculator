let finalAccount = ''
const collectNumber = (obj) =>{
    const answer = document.querySelector('.answer h1');
    switch(obj.innerHTML){
        case '/':
            answer.innerHTML[answer.innerHTML.length - 1] == '/' ? alert('Não repita a operação 2x.') : '';
        case 'X':
            answer.innerHTML[answer.innerHTML.length - 1] == 'X' ? alert('Não repita a operação 2x.') : '';
        case '+':
            answer.innerHTML[answer.innerHTML.length - 1] == '+' ? alert('Não repita a operação 2x.') : '';
        case '-':
            answer.innerHTML[answer.innerHTML.length - 1] == '-' ? alert('Não repita a operação 2x.') : '';
        case '=':
            let numberFinal = eval(finalAccount)
            numberFinal.toString().length > 11 ? alert('Resultado : ' + numberFinal) : answer.innerHTML = eval(finalAccount);
            break;
        case '&lt;':
            answer.innerHTML = answer.innerHTML.replace(answer.innerHTML[answer.innerHTML.length-1], '');
            finalAccount = finalAccount.replace(answer.innerHTML[answer.innerHTML.length-1], '');
            break;
    }
    obj.innerHTML == 'C' ? (answer.innerHTML = '', finalAccount = '') : '';
    if(obj.innerHTML == 'X'){
        finalAccount += '*';
        answer.innerHTML += 'x';
    }
    else if(obj.innerHTML != '&lt;' && obj.innerHTML != 'C' && obj.innerHTML != '='){
        answer.innerHTML.length > 10 ? alert('Só calculamos até 11 números.') : (
            answer.innerHTML += obj.innerHTML,
            finalAccount += obj.innerHTML);
    }
}
