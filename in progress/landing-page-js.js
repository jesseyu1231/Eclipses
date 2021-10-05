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