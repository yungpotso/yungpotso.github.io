const messageObj = {
    luck: ["horrible luck!","bad luck.","good luck.","spectacular luck!"],
    blessings: ["The Trees","The Mountains","The Stars"],
    connectors: [
        " tremble, today you will have ",
        " bestow upon you ",
        " bless you with ",
        " present you with ",
        " ponder, before giving you ",
        " begrudgingly bless you with ",
        " bequeath unto you the finest ",
        " dole out ",
        " impart upon you ",
        " offer up their "
    ]
};

function getLuckLvl() {
    let luck = Math.floor(Math.random()*3);
    return luck;
};

function getBlesser() {
    let blesser = Math.floor(Math.random()*2);
    return blesser;
};

function getConnector() {
    let connector = Math.floor(Math.random()*9);
    return connector;
};

console.log(getLuckLvl());
console.log(getBlesser());