
const date = {
    date:10,
    month:3
}
const today = {
    date:30,
    month:4
}

function isLate(last,today, cycleLength) {

    passDays = today.date - last.date

    if(passDays > cycleLength){
         console.log(true)

    } else {
       console.log(false) 
    }
}
isLate(date,today,20)