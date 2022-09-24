const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon  = document.querySelectorAll(".icons span");


//getting new, current year and month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                  "September", "October","November", " December"]

const renderCalender = () => {
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDate(), //getting first date of the month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of the month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of the month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of the month
    let liTag = "";

    

    for (let i = firstDateofMonth; i > 0; i-- ) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                        && currYear === new Date().getFullYear() ?  "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++ ) {
        liTag += `<li class="inactive">${i - lastDayofMonth - 1}</li>`
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag
}
renderCalender();

prevNextIcon .forEach(icon => {
    icon.addEventListener("click", () =>{
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear()
            currMonth = date.getMonth()
        }
        else(
            date = new Date()
        )
        renderCalender();
    });
    
});



//Making dropdown

const selectBtn = document.querySelector('.select-btn');
selectBar1 = document.querySelector('.select-bar1');

selectBar1.addEventListener("click", () => {
    selectBtn.classList.toggle("active");
})

// Making the Reminder work
const Reminder = document.querySelector('.reminder');
rem = document.querySelector('.rem');
option = document.querySelector(".options");

// array of options
let options = ["Repeat", "Repeat once", "Do not repeat"]

function addOptions() {
    options.forEach(options => {
        let li = `<li>${options}</li>`
        options.insertAdjacentHTML("beforeend", li)
    })
}
addOptions()



rem.addEventListener("click", () => {
    Reminder.classList.toggle("active");
})

// Making the alarm clickable
const Alarm = document.querySelector('.alarm');
alarm1 = document.querySelector('.alarm1');

alarm1.addEventListener("click", () => {
    Alarm.classList.toggle("active");
})

// Making the priority work
const Priority = document.querySelector('.priority');
prior = document.querySelector('.prior');

let prio = ["Repeat", "Repeat once", "Do not repeat"]

function addOptions() {
    options.forEach(options => {
        let li = `<li "onclick="updateName(this)">${options}</li>`
        option.insertAdjacentHTML("beforeend", li)
    })
}
addOptions()

function updateName(selectedLi) {
    Reminder.classList.remove("active");
    rem.firstElementChild.innerText = selectedLi.innerText
}

prior.addEventListener("click", () => {
    Priority.classList.toggle("active");
})
