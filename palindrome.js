
// Percorre a string str no index i e reverte ela
// return fora do for
function reverse(str) {
    let rev_string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev_string += str[i];  
    }
    return rev_string 
}

// Check equal verifica se a string rev_string e igual ao reverse(str)
function checkEqual(str) {
    rev_string = reverse(str)

    if(rev_string === str){
        console.log("equal")
    } else{
        console.log("not equal")
    }
}

let test = "osmo"
checkEqual(test)