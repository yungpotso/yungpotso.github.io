function getLuckLvl() {
    let luck = Math.floor(Math.random()*4);
    return luck;
};

function getBlesser() {
    let blessNum = Math.floor(Math.random()*2);
    let blesser = "";
    switch (blessNum){
        case 0:
            blesser = "The Forest"
        case 1:
            blesser = "The Mountains"
        case 2:
            blesser = "The Stars"
    };
    return blesser;
};

console.log(getLuckLvl());
console.log(getBlesser());