let curdate1 = new Date().getFullYear();
var month = new Date().getMonth()
let curdate = new Date().getDate()
let date_1
document.getElementById("year").value = curdate1;
document.getElementById("month").value = month + 1;
let m2=2;
let num=11;
let m9=9;
let m4=4;
let m6=6;
function nodays(mm, yyyy) {
    var daysofmonth;
    if ((mm === m4) || (mm === m6) || (mm === m9) || (mm === num)) {
        daysofmonth = 30;
    }
    else {
        daysofmonth = 31
        if (mm === m2) {
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
let ye=0;
function renderTable(month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date(year-ye, month-1);
    let day = weekday[d.getDay()];
    let b = weekday.indexOf(day)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month2 = new Date(year-ye, month-1);
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
                    task.setAttribute('onclick','Edit(this.id)')
                    task.setAttribute('data-bs-toggle', 'modal')
                    task.setAttribute('data-bs-target', '#myModal')
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
        if(user_number===null){
        }
        else{
        user_number.append(val)
        user_number.style.backgroundColor = "lightseagreen";
        user_number.style.color = "white";
        user_number.style.borderRadius= "5%";
        }
    } 
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
function month_0() {
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
        if(month===(num-10)){
            let a=document.getElementById("month").value = month -1;
            document.getElementById("year").value = year -1;
            ye=ye-1
            renderTable(month - 1, year-1)
            num=num-12;
            m2=m2-12
            m9=m9-12
            m4=m4-12
            m6=m6-12
            console.log(num)
           }
           else{
        document.getElementById("month").value = month  -1;
        renderTable(month-1, year)
        console.log(num)
        for(let i=0;i< localStorage.length;i++){
            let Key=localStorage.key(i)
            let val=localStorage.getItem(Key)
            let user_number=document.getElementById(Key)
            if(user_number===null){
            }
            else{
            user_number.append(val)
            user_number.style.backgroundColor = "lightseagreen";
            user_number.style.color = "white";
            user_number.style.borderRadius= "5%";
            }
        }
    }
    }

function month_1() {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
        if(month>num){
            let a=document.getElementById("month").value = month + 1;
            document.getElementById("year").value = year + 1;
            ye=ye+1
            renderTable(month +1 , year+1)
            num=num+12;
            m2=m2+12
            m9=m9+12
            m4=m4+12
            m6=m6+12
            console.log(num)
           }
           else{
        document.getElementById("month").value = month + 1;
        renderTable(month +1, year)
        console.log(num)
        for(let i=0;i< localStorage.length;i++){
            let Key=localStorage.key(i)
            let val=localStorage.getItem(Key)
            let user_number=document.getElementById(Key)
            if(user_number===null){
            }
            else{
            user_number.append(val)
            user_number.style.backgroundColor = "lightseagreen";
            user_number.style.color = "white";
            user_number.style.borderRadius= "5%";
            }
        }
    }
}
function task(clicked) {
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const month2 = new Date(year, month - 1);
    let MONTH = monthNames[month2.getMonth()];
    date_1 = clicked + "/" + MONTH + "/" + year;
    document.getElementById("delete").style.display="none";
    document.getElementById("delete").style.visibility='hidden';
}
let edit;
function Edit(clicked){
    document.getElementById("delete").style.backgroundColor="red";
    document.getElementById("delete").style.display="block";
    document.getElementById("delete").style.visibility='visible';
    edit=document.getElementById(clicked).textContent;
    date_1=clicked
}
function Submit2() {
    localStorage.removeItem(date_1)
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
    document.getElementById("delete").style.display="none";
    document.getElementById("delete").style.visibility='hidden';
    document.getElementById(date_1).textContent=edit;
    edit="";
    document.getElementById('data').value = ''
}
function Delete(){
    ans=confirm("Do You want to delete the task")
    if(ans==true){
        localStorage.removeItem(date_1);
        document.getElementById(date_1).value = ' '
        document.getElementById(date_1).style.background = 'transparent';
        document.getElementById(date_1).style.borderRadius = 'transparent';
        edit="";
        document.getElementById("delete").style.display="none";
        document.getElementById("delete").style.visibility='hidden';
    }
    else{
    }
}
