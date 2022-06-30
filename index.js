// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name2){
    cats.unshift(name2);
}
function destructivelyRemoveLastCat(last){
    cats.pop(last);

}
function destructivelyRemoveFirstCat(first){
    cats.shift(first);
}
function appendCat(name3){
    return appendCat = [...cats, name3];
}
function prependCat(name4){
    return prependCat = [name4, ...cats];
}
function removeLastCat(name5){
    return removeLastCat = [...cats.slice(0,2)];
}
function removeFirstCat(name6){
    return removeFirstCat = [...cats.slice(1,3)]
}