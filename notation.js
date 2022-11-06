
console.log('sum/notes.length');
function  moyenne (notes){
    let sum = 0;
    for(let i = 0; i<notes.length;i++){
        sum = sum + notes[i];
       
    }
    console.log('sum/notes.length');

    console.log(sum/notes.length);
}

module.exports = moyenne;