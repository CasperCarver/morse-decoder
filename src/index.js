const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    let arrBin = expr.match(/.{1,10}/g);

for (let i = 0; i < arrBin.length; i++){
    arrBin[i]=arrBin[i].replace(/^0+/, '').split(/(?=(?:..)*$)/);
    for (let j=0; j<arrBin[i].length; j++){
        
        if (arrBin[i][j] == 10) {
            arrBin[i][j] = '.';
        } else if (arrBin[i][j]== 11){
            arrBin[i][j]='-';
        }  
    }
    arrBin[i]=arrBin[i].join('');
    for(let key in MORSE_TABLE){
        if (arrBin[i] == key){
            arrBin[i]=MORSE_TABLE[key];
        }
    }
    if (arrBin[i]=='**********') arrBin[i]=' ';
}
return arrBin.join('');
    // write your solution here
}

module.exports = {
    decode
}

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// let arrBin = expr.match(/.{1,10}/g);

// for (let i = 0; i < arrBin.length; i++){
//     arrBin[i]=arrBin[i].replace(/^0+/, '').split(/(?=(?:..)*$)/);
//     for (let j=0; j<arrBin[i].length; j++){
        
//         if (arrBin[i][j] == 10) {
//             arrBin[i][j] = '.';
//         } else if (arrBin[i][j]== 11){
//             arrBin[i][j]='-';
//         }  
//     }
//     arrBin[i]=arrBin[i].join('');
//     for(let key in MORSE_TABLE){
//         if (arrBin[i] == key){
//             arrBin[i]=MORSE_TABLE[key];
//         }
//     }
//     if (arrBin[i]=='**********') arrBin[i]=' ';
// }
// console.log(arrBin.join(''));

