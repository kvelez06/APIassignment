// // Normally coming from API
// let userDataJSON = '{ "username" : "Jimmy", "birthdate" : "01/01/2006", "level" : 3 }';

// let userData = JSON.parse(userDataJSON);
// console.log(userData.level);

// // from JSON to JS
// let userData = {
//     "username": "Jimmy",
//     "birthdate": "01/01/2006",
//     "level": 3
// };

// let anyText = JSON.stringify(userData);
// console.log(anyText);

function myFunc() {
    let anyIwant = new XMLHttpRequest();
    anyIwant.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let anyIwant2 = JSON.parse(this.responseText);
            document.getElementById("chuck-quote").innerHTML = anyIwant2.quote;
            console.log(anyIwant2);
            } else if(this.readyState != 4) {
            document.getElementById("chuck-quote").innerHTML = "LOADING";
        } else {
            document.getElementById("chuck-quote").innerHTML = "Something Went Wrong!";
        }
    }
    anyIwant.open("GET", "https://api.chucknorris.io/jokes/random", true);
    anyIwant.send();
 }
 document.getElementById("refresh-button").addEventListener("click", myFunc)