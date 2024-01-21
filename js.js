
createChess("chess-board-flex");
createChess("chess-board-grid", false);

let cell = document.getElementById("11");
createElem("img", cell, "Hors", false, "./img/horse.png", "horse")


function createChess(id, flex=true) {
    let elem = document.getElementById(id);
    let arrletter = [ "","A", "B", "C", "D", "E", "F", "G", "H", ""];
    let arrNumbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

    let firstBlock = createElem("div", elem, "class-for-grid blockWithLetter");
    addBlockWithContent(firstBlock, arrletter);

    let middleBlock = createElem("div", elem, "class-for-grid middleBlock");
    let blockWithNumbersOne = createElem("div", middleBlock, "blockWithNumbers");
    addBlockWithContent(blockWithNumbersOne, arrNumbers);
    let secondtBlockInMiddleBlock = createElem("div", middleBlock , "blockChess");
    flex? fillBlockChess(secondtBlockInMiddleBlock):addLinesInChessforGrid (secondtBlockInMiddleBlock);
    // fillBlockChess(secondtBlockInMiddleBlock);
    let blockWithNumbersTwo = createElem("div", middleBlock, "blockWithNumbers");
    addBlockWithContent(blockWithNumbersTwo, arrNumbers);

    let lastBlock = createElem("div", elem, "class-for-grid blockWithLetter");
    addBlockWithContent(lastBlock, arrletter);
}


function fillBlockChess(elem) {
        for (let i=1; i <9; i++){
            if(i % 2 != 0){
                addLinesInChess(elem, false, i )
            } else {
                addLinesInChess(elem, true, i)
            }
          }
}

function addLinesInChess(elem, blackStartTrue, id) {
    let newDiv = document.createElement("div");
    newDiv.className = `lineChess`;
    if (blackStartTrue){
        for (let i = 1; i < 9; i++) {
            let item = document.createElement("div");
            if(i % 2 != 0 ){
                item.className = `items black`;
            } else {
                item.className = `items white`;
            }
            item.id = id+`${i}`;
            newDiv.append(item)
        }
    } else {
        for (let i = 1; i < 9; i++) {
            let item = document.createElement("div");
            if(i % 2 == 0 ){
                item.className = `items black`;
            } else {
                item.className = `items white`;
            }
            item.id = id+`${i}`;
            newDiv.append(item)
        }
    }

    elem.append(newDiv)
}

function addBlockWithContent(elem, arr) {
    arr.forEach(element => {
        createElem("div", elem, "item-content", element)
    });
}

function createElem(type, parent, className = false, content = false, srs = false, alt = false) {

    let elem = document.createElement(`${type}`);
    if (className) {
        elem.className = `${className}`;
    }
    if (content) {
        elem.innerHTML = `<p>${content}</p>`;
    }
    if (srs) {
        elem.setAttribute("src", `${srs}`);
    }
    if (alt) {
        elem.setAttribute("alt", `${alt}`);
    }
    parent.append(elem);
    if (type =="img"){
        console.log(elem)
    }
    return elem;
}


function addLinesInChessforGrid (elem) {
    let color = "white";
    for (let i = 1; i < 65; i++){
        if(color == "white"){
            createElem("div", elem, "items white");
            if(i % 8 != 0 ){
                color = "black";
            }
            
        } else {
            createElem("div", elem, "items black");
            if(i % 8 != 0 ){
                color = "white";
            }
            
        }
        
    }
}
