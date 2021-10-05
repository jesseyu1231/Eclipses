mostRecentEclipse()

window.addEventListener("load", async function () {
    let content = await fetch("data.json");
    let data = await content.json();
    // document.getElementById("most-recent-date").innerHTML = mostRecentEclipseDate;
    // document.getElementById("most-recent-type").innerHTML = mostRecentEclipseType;

    // display on hover
    let listElement = document.getElementById("list");
    listElement.addEventListener("mouseover", function (event) {
        event.target.style.color = "white"
        
        let chosendate = event.target.dataset.date
        for (i = 0; i < 10; i++) {
            if (chosendate === data[i].date) {
                document.getElementById("date").innerHTML = chosendate;
                document.getElementById("type").innerHTML = data[i].type;
                document.getElementById("info").innerHTML = data[i].ls;
            }
        }
        // reset the color after a delay
        setTimeout(function() {
            event.target.style.color = "";
          }, 500);
        }, false);
})

// as long as there is 'await', function need to be 'async'
// as long as there is 'promise', use 'await', no need to 'then''catch'
// most of time, 'async' needs a 'await'

async function preload() {
    let content = await fetch("data.json");
    let data = await content.json();
    return data;
}

let mostRecentEclipseDate;
let mostRecentEclipseType;

async function mostRecentEclipse() {
    let data = await preload();

    // format today's date to match json
    let todaysDate = new Date();
    let dd = String(todaysDate.getDate()).padStart(2, "0");
    let mm = String(todaysDate.getMonth()).padStart(2, "0")
    let yy = String(todaysDate.getFullYear())
    todaysDate = yy + mm + dd

    // an array that stores all compared result
    const comparedResults = [];
    for (i = 0; i < 10; i++) {
        let dateDiff = data[i].date - todaysDate;
        if (dateDiff >= 0) {
            comparedResults.push(dateDiff)
            mostRecentEclipseDate = data[i].date
            mostRecentEclipseType = data[i].type
            // console.log(mostRecentEclipseDate)
            break
        } else {
            continue
        }
    }
}


