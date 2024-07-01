const utcTimeElement = document.getElementById('utcTime')
const dayElement = document.getElementById("day")

const today = new Date()

const time = today.getTime()
const dayNo = today.getUTCDay()

utcTimeElement.innerHTML = time

switch (dayNo) {
    case 0:
        dayElement.innerHTML = "Sunday"
        break;
    case 1:
        dayElement.innerHTML = "Monday"
        break;
    case 2:
        dayElement.innerHTML = "Tuesday"
        break;
    case 3:
        dayElement.innerHTML = "Wednesday"
        break;
    case 4:
        dayElement.innerHTML = "Thursday"
        break;
    case 5:
        dayElement.innerHTML = "Friday"
    break;
    case 6:
        dayElement.innerHTML = "Saturday"
        break;
}