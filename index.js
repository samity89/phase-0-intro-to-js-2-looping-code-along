function writeCards (name, event){
    let card = [];
    for (let i = 0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return card;
};

function countDown(int) {
    let i = 10
    while (i >= 0) {
    console.log(i);
    i--;
    }
};