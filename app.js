function GetRand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let month  = GetRand(1, 12)
let fate  = GetRand(1, 5)
let day = GetRand(1, 30)
function GetMounth(month) {
    let name
    switch (month) {
        case 1:
          name = "Jan"
          break
        case 2:
        name = "feb"
         break;
        case 3:
         name = "March"
         break
        case 4:
         name = "april"
        break
        case 5:
         name = "may"
         break
        case 6:
         name = "june"
         break
        case 7:
          name = "july"
          break
        case 8:
          name = "Aug"
          break
          case 9:
          name = "Sep"
          break
        case 10:
          name = "Oct"
          break
          case 11:
          name = "Nov"
          break
        case 12:
          name = "Dem"
      
          break
        default:
            name = "not a month"
          break
    }
    return name
}

function GetMess(fate) {
    let mess
    switch (fate) {
        case 1:
          mess = "mess 1"
          break
        case 2:
        mess = "mess 2"
         break;
        case 3:
         mess = "mess 3"
         break
        case 4:
         mess = "mess 4"
        break
        case 5:
         mess = "mess 5"
          break
        default:
            mess = "not a moess"
          break
    }
    return mess
}

const monthName = GetMounth(month)
const fortun = GetMess(fate)

const fortRevealed = `on ${monthName} the ${day} the you will ${fortun}`
console.log(fortRevealed)
 document.querySelector(".for").innerText = fortRevealed 
