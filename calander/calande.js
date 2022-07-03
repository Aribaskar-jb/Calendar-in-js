let curdate1 = new Date().getFullYear();
var month = new Date().getMonth()
let curdate = new Date().getDate()
let date_1

document.getElementById("year").value = curdate1;
document.getElementById("month").value = month + 1;

function nodays(mm, yyyy) {
    var daysofmonth;
    if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) {
        daysofmonth = 30;
    }
    else {
        daysofmonth = 31
        if (mm == 2) {
            if (yyyy / 4 - parseInt(yyyy / 4) != 0) {
                daysofmonth = 28
            }
            else {
                if (yyyy / 100 - parseInt(yyyy / 100) != 0) {
                    daysofmonth = 29
                }
                else {
                    if (yyyy / 400 - parseInt(yyyy / 400) != 0) {
                        daysofmonth = 28
                    }
                    else {
                        daysofmonth = 29
                    }
                }
            }
        }
    }
    return daysofmonth;
}
function renderTable(month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date(year, month - 1);
    let day = weekday[d.getDay()];
    let b = weekday.indexOf(day)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month2 = new Date(year, month - 1);
    let MONTH = monthNames[month2.getMonth()];
    let table = document.createElement('table')
    let printmonth = document.getElementById("curmon")
    printmonth.textContent = MONTH
    let printyear = document.getElementById("curyer")
    printyear.textContent = year
    table.setAttribute('id', 'table')
    let template = `
    <thead>
        <td id ='tablename'> Sun</td>
        <td id ='tablename' >Mon</td>
        <td id ='tablename' >Tue</td>
        <td id ='tablename' >Wed</td>
        <td id ='tablename' >Thu</td>
        <td id ='tablename' >Fri</td>
        <td id ='tablename' >Sat</td>
        </thead>    `
    table.innerHTML += template;
    let d1 = nodays(month, year)
    let a = 1;
    for (let i = 0; i <= 5; i++) {
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        tr.setAttribute('id', 'row' + i)
        tbody.append(tr)
        table.append(tbody)
        for (let j = 0; j <= 6; j++) {
            if (i == 0 && j < b) {
                let td = document.createElement("td");
                let text = document.createTextNode("");
                td.append(text);
                tr.append(td);
            }
            else {
                let td = document.createElement("td");
                td.setAttribute('class', 'TD1')
                let button1 = document.createElement('button')
                let task = document.createElement('button')
                let br = document.createElement('br')
                button1.setAttribute('class', 'day')
                button1.setAttribute('type', 'submit')
                button1.setAttribute('onclick', 'task(this.id)')
                button1.setAttribute('data-bs-toggle', 'modal')
                button1.setAttribute('data-bs-target', '#myModal')
                if (a <= d1) {
                    button1.setAttribute('id', `${a}`)
                    task.setAttribute('id', `${a + "/" + MONTH + "/" + year}`)
                    button1.append(a)
                    td.append(button1)
                    td.append(br)
                    td.append(task)
                    a = a + 1;
                    tr.append(td)
                }
            }
        }
    }
    bodyDiv = document.getElementById("tablearea");
    bodyDiv.innerHTML = "";
    bodyDiv.append(table)
}

function onSubmitForm(){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    renderTable(month, year)
    for(let i=0;i< localStorage.length;i++){
        let Key=localStorage.key(i)
        let val=localStorage.getItem(Key)
        let user_number=document.getElementById(Key)
        user_number.append(val)
        user_number.style.backgroundColor = "lightseagreen";
        user_number.style.color = "white";
        user_number.style.borderRadius= "5%";
    }
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}

function month_0() {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("month").value = month - 1;
    renderTable(month - 1, year)
    document.getElementById(`${curdate}`).style.background = '#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}

function month_1() {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("month").value = month + 1;
    renderTable(month + 1, year)
    document.getElementById(`${curdate}`).style.background = '#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}

function year_0() {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("year").value = year - 1;
    renderTable(month, year - 1)
    document.getElementById(`${curdate}`).style.background = '#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}

function year_1() {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("year").value = year + 1;
    renderTable(month, year + 1)
    document.getElementById(`${curdate}`).style.background = '#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}


function task(clicked) {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const month2 = new Date(year, month - 1);
    let MONTH = monthNames[month2.getMonth()];
    date_1 = clicked + "/" + MONTH + "/" + year;
}

function Submit2() {
    let user_number = document.getElementById(date_1)
    let Task_1 = document.getElementById('data').value;
    localStorage.setItem(date_1, Task_1)
    let loc = localStorage.getItem(date_1)
    user_number.append(loc)
    user_number.style.borderRadius= "5%";
    user_number.style.backgroundColor = "lightseagreen";
    user_number.style.color = "white";
    document.getElementById('data').value = ''
}
function cancel() {
    document.getElementById('data').value = ''
}
