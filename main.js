const first = [
    'Today is your day',
'Today is not your day',
'The time is now',
'Tomorrow will be your day'
];

const second = [
    'to go cause some trouble',
'to take some time for introspection',
'to give BirdDog some treats',
'to eat a lot of cookies',
];

const third = [
'the difference between "they\'re" "there" and "their"',
'capitalism is a death cult',
'NO FORCED PREGNANCIES. TRUST WOMEN.',
'I just took a DNA test turns out I\'m 100% that bitch',
];

const generateSentence = () => {
    let one = first[Math.floor(Math.random() * 4)];
    let two = second[Math.floor(Math.random() * 4)];
    let three = third[Math.floor(Math.random() * 4)];

    return `${one} ${two}, but don't forget ${three}`;

}

console.log(generateSentence());
