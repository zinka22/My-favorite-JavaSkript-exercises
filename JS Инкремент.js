/* 
Написать функцию makeItFunny(), которая принимает на вход 
строку и возвращает ее копию, у которой каждый n-ый элемент 
переведен в верхний регистр, n задается на входе в функцию.
*/
const makeItFunny = (text, x) => {
    let result = '';
    let i = 0;
    while(i < text.length) {
        if ((i+1) % x === 0) {
    	    result = `${result}${text[i].toUpperCase()}`;
        }
        else {
    	    result = `${result}${text[i]}`;
        }
        i++;
    }
    return result;
};
// END