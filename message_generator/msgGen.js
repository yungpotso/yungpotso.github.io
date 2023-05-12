function getLuckLvl() {
    let luck = Math.floor(Math.random()*3);
    return luck;
};

function getBlesser() {
    let blessNum = Math.floor(Math.random()*2);
    let blesser = "";
    switch (blessNum){
        case 0:
            blesser = "The Trees"
        case 1:
            blesser = "The Mountains"
        case 2:
            blesser = "The Stars"
    };
    return blesser;
};

function getConnector() {
    let connectorNum = Math.floor(Math.random()*9);
    let connector = "";
    switch (blessNum){
        case 0:
            connector = " tremble, today you will have "
        case 1:
            connector = " bestow upon you "
        case 2:
            connector = " bless you with "
        case 3:
            connector = " present you with "
        case 4:
            connector = " ponder, before giving you "
        case 5: 
            connector = " begrudgingly bless you with "
        case 6: 
            connector = " bequeath unto you the finest "
        case 7:
            connector = " dole out "
        case 8:
            connector = " impart upon you "
        case 9:
            connector = " offer up their "
    };
    return connector;
};

console.log(getLuckLvl());
console.log(getBlesser());