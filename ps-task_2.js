
                    /////MOvie tickets

let movie=prompt("enter type of movie")
let seat=prompt("enter type of seat")

switch(movie){
    case ("Action"):
        switch(seat){
            case ("Standard Seat"):
                console.log(`${movie} Movie ${seat} is 10Rs`)
                break
            case  ("VIP Seat"):
                console.log(`${movie} Movie ${seat} is 20Rs`)
                break
        }
    break
    case ("Comedy"):
        switch(seat){
            case ("Standard Seat"):
                console.log(`${movie} Movie ${seat} is 8Rs`)
                break
            case  ("VIP Seat"):
                console.log(`${movie} Movie ${seat} is 15Rs`)
                break
        }
    break
    case ("Drama"):
        switch(seat){
            case ("Standard Seat"):
                console.log(`${movie} Movie ${seat} is 6Rs`)
                break
            case  ("VIP Seat"):
                console.log(`${movie} Movie ${seat} is 12Rs`)
                break
        }
    break
    default:
    console.log("enter valid Movie and seat Names")
}

                    /// e-commerces ///////

const cat = prompt("Enter Cat : ");
var proName = prompt("Enter proName : ")
switch(cat){
    case "ele":
        switch(proName){
            case "mobile":
                console.log("discount is 5%")
                break;
            case "laptop":
                console.log("discount is 15%")
                break;
            case "ac":
                console.log("discount is 25%")
                break;
        }
        break;
    case "cloth":
                switch(proName){
            case "tshirt":
                console.log("discount is 5%")
                break;
            case "pant":
                console.log("discount is 15%")
                break;
            case "saree":
                console.log("discount is 25%")
                break;
        }
        break;
    case "jewel":
                switch(proName){
            case "gold":
                console.log("discount is 5%")
                break;
            case "ring":
                console.log("discount is 15%")
                break;
            case "chain":
                console.log("discount is 25%")
                break;
        }
        break;
        default:
        console.log("Enter valid product")
}

                    ///// transport tickets //////////

let mode=prompt("enter type of Transport mode:-")
let seats=prompt("enter type of seat:-")

switch(mode){
    case ("Flight"):
        switch(seats){
            case ("Economy Seat"):
                console.log(`${mode} Mode ${seats} is 1000Rs`)
                break
            case  ("Business Seat"):
                console.log(`${mode} Mode ${seats} is 2000Rs`)
                break
        }
    break
    case ("Train"):
        switch(seats){
            case ("Sleeper Seat"):
                console.log(`${mode} Mode ${seats} is 500Rs`)
                break
            case  ("AC Class Seat"):
                console.log(`${mode} Mode ${seats} is 800Rs`)
                break
        }
    break
    case ("Bus"):
        switch(seats){
            case ("Standard Seat"):
                console.log(`${mode} Mode ${seats} is 300Rs`)
                break
            case  ("Luxury Seat"):
                console.log(`${mode} Mode ${seats} is 800Rs`)
                break
        }
    break
    default:
    console.log("enter valid Mode and seat Names")
}



