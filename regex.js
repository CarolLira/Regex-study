let result;

const sentence = "The dog chased the cat.";
const regex = /Dog/;
result = regex.test(sentence); // false

const myString = "Hello, World!";
const myRegex = /Hello/;
result = myRegex.test(myString); // true

// Usa operador "ou" -> | para testar possíveis padrões
const petString = "James has a pet cat."
const petRegex = /dog|cat|bird|fish/;
result = petRegex.test(petString); // true

// A flag "i" ao final do regex indica que não terá diferenciação entre maiúsculas e minúsculas
// case insensitive
const course = "freeCodeCamp";
const fccRegex = /freecodecamp/i;
result = fccRegex.test(course); // true

// A função "match" retorna a string do resultado da combinação
const extractStr = "Extract the word 'coding' from this string";
const codingRegex = /coding/;
result = extractStr.match(codingRegex); 
// ['coding', index: 18, input: "Extract the word 'coding' from this string", groups: undefined];

// A flag "g" ao final do regex indica que será procurado por todas as ocorrências 
// que corresponderem ao padrão e não é uma vez
const testStr = "Repeat, Repeat, Repeat";
const ourRegex = /Repeat/g;
result = testStr.match(ourRegex); // ['Repeat', 'Repeat', 'Repeat']

const twinkleStar = "Twinkle, twinkle, little star";
const starRegex = /twinkle/ig;
result = twinkleStar.match(starRegex); // ['Twinkle', 'twinkle']

// O "." pode ser usado para indicar qualquer combinação que comece ou termine com partes de uma string
const humStr = "I'll hum a song";
const hugStr = "Bear hug";
const huRegex = /hu./;
result = humStr.match(huRegex); // ['hum', index: 5, input: "I'll hum a song", groups: undefined]
result = hugStr.match(huRegex); // ['hug', index: 5, input: 'Bear hug', groups: undefined]

const exampleStr = "Let's have fun with regular expressions!";
const unRegex = /.un/;
result = unRegex.test(exampleStr); // true

// Para selecionar caracteres que combinem dentre um conjunto específico de caracteres
// podemos usar os colchetes "[example]"
const quoteSample = "Beware of bugs in the above code; I have only proved it";
const beRegex = /b[e]ware/i;
const vowelRegex = /[aeiou]/ig;
result = quoteSample.match(vowelRegex); // ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i']
result = quoteSample.match(beRegex); // ['Beware', index: 0, input: 'Beware of bugs in the above code; I have only proved it', groups: undefined]

// Com "-" podemos detectar uma lista de caracteres
const phrase = "Blueberry 3.141592653s are delicious.";
const alphabetRegex = /[a-z]/ig;
const numberAndLetter = /[2-6h-s]/ig;
result = phrase.match(alphabetRegex); // ['B', 'l', 'u', 'e', 'b', 'e', 'r', 'r', 'y', 's', 'a', 'r', 'e', 'd', 'e', 'l', 'i', 'c', 'i', 'o', 'u', 's']
result = phrase.match(numberAndLetter); // ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']

// "[^]" indica caracteres que não devem ser detectador no regex
const example1 = "3 blind mice."
const regex1 = /[^0-9aeiou]/ig;
result = example1.match(regex1); // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']

// "+" retorna o caractere que é encontrado em uma sequência
const difficultSpelling = "Mississipspi";
const regex2 = /s+/g;
result = difficultSpelling.match(regex2); // ['ss', 'ss', 's']

const crowd = "P1P2P3P4P5P6CCCP7P8P9";
const reCriminals = /C+/;
const matchedCriminals = crowd.match(reCriminals);

// "*" procura caracteres que aparecem em sequência após um caractere
const soccerWord = "gooooooooal!";
const gPhrase = "gut feeling";
const oPhrase = "over the moon";
const goRegex = /go*/;
result = soccerWord.match(goRegex); // ['goooooooo', index: 0, input: 'gooooooooal!', groups: undefined]
result = gPhrase.match(goRegex); // ['g', index: 0, input: 'gut feeling', groups: undefined]
result = oPhrase.match(goRegex); // null

const chewieQuote = "Aaaaaaaaaaarrrgh!";
const chewieRegex = /Aa*/;
result = chewieQuote.match(chewieRegex); // ['Aaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaarrrgh!', groups: undefined]

// "*?" faz com que o regex pare de procurar por novas ocorrências assim que seja satisfeita
const string = "titanic";
const regex3 = /t[a-z]*?i/;
result = string.match(/t[a-z]*i/); // ['titani', index: 0, input: 'titanic', groups: undefined]
result = string.match(regex3); // ['ti', index: 0, input: 'titanic', groups: undefined]

const text = "<h1>Winter is coming<h1>";
const regex4 = /<.*?>/;
result = text.match(/<.*>/); // ['<h1>Winter is coming<h1>', index: 0, input: '<h1>Winter is coming<h1>', groups: undefined]
result = text.match(regex4); // ['<h1>', index: 0, input: '<h1>Winter is coming<h1>', groups: undefined]

// "^" quando usado no início do regex irá detectar padrões somente no início da string
const rickyAndCal = "Cal and Ricky both like racing";
const calRegex = /^Cal/;
result = calRegex.test(rickyAndCal); // true

// "$" quando usado no final do regex irá detectar padrões somente no final da string
const caboose = "The last car on a train is the caboose";
const lastRegex = /caboose$/;
result = lastRegex.test(caboose); // true

// "{1,2}" especifíca número mínimo e máximo de ocorrências 
const ohStr = "Ohhh no";
const ohRegex = /Oh{3,6} no/;
result = ohStr.match(ohRegex); // ['Ohhh no', index: 0, input: 'Ohhh no', groups: undefined]

// "?" indica caracteres que podem ou não existir na combinação
const favWord = "favorite";
const favRegex = /favou?rite/;
result = favWord.match(favRegex); // ['favorite', index: 0, input: 'favorite', groups: undefined]

// "?=" e "?!" checa se um padrão é positivo ou negativo
const quit = "qu";
const noquit = "qt";
const quRegex = /q(?=u)/;
const qRegex = /q(?!u)/;
result = quit.match(quRegex); // ['q', index: 0, input: 'qu', groups: undefined]
result = noquit.match(qRegex); // ['q', index: 0, input: 'qt', groups: undefined]

const sampleWord = "astronaut22";
const pwRegex = /(?=\w{5})(?=\D*\d{2})/;
result = pwRegex.test(sampleWord);

// "\w" é um atalho para detectar qualquer letra, número e "_"
/\w/g;

// "\W" detecta todo caractere que não for letra ou número e "_"
/\W/g;

// "\d" é atalho para detectar todos os números
/\d/g;

// "\D" detecta todo caractere que não é número
/\D/g;

// "\s" detecta todos os espaços em branco
/\s/g;

// "\S" detecta tudo que não for espaço em branco
/\S/g;

// Chore 1
/*
    1. If there are numbers, they must be at the end.
    2. Letters can be lowercase and uppercase.
    3. At least two characters long. Two-letter names can't have numbers.
*/

const username = "Carolira22";
const userCheck = /^[A-Za-z]{2,}\d*$/;
console.log(userCheck.test(username));