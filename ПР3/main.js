const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow)
{
    let a = 0
    let b = 0
    for (let i = 0; i < firstRow.length; i++)
    {  
        if (firstRow.charAt(i) === 'а')
        {
            a++;
        }
    }
    for (let i = 0; i < secondRow.length; i++)
    {
        if (secondRow.charAt(i) === 'а')
        {
            b++;
        }
    }
    if(a > b)
    {
        return firstRow  
    }
    else
    {
        return secondRow
    }
}
console.log('Задание 1');
console.log(getRow(firstRow,secondRow));
console.log('');


console.log('Задание 2');
const phone = '+71234567890';

function formattedPhone(phone){

}

function formattedPhone(phone) {
    num = ''
    for (let i = 0; i < phone.length; i++) {
        if (i == 2){
            num += " ("
        }
        else if(i == 5){
            num += ") "
        }
        else if(i == 8){
            num += "-"
        }
        else if(i == 10){
            num += "-"
        }
        num += phone.charAt(i);
    }
    return num;
}
console.log(formattedPhone(phone));