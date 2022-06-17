let curdate1 =new Date().getFullYear();
var month = new Date().getMonth() 
let curdate=new Date().getDate()
document.getElementById("year").value =curdate1;
document.getElementById("month").value =month+1;
console.log(typeof(curdate1))
function nodays(mm, yyyy){
    var daysofmonth;
    if((mm == 4) || (mm ==6) || (mm ==9) || (mm == 11)){
    daysofmonth = 30;
    }
    else{
    daysofmonth = 31
    if(mm == 2){
    if (yyyy/4 - parseInt(yyyy/4) != 0){
    daysofmonth = 28
    }
    else{
    if (yyyy/100 - parseInt(yyyy/100) != 0){
    daysofmonth = 29
    }
    else{
    if(yyyy/400 - parseInt(yyyy/400)!=0){
    daysofmonth = 28
    }
    else{
    daysofmonth =29
    }
    }
    }
    }
    }
    return daysofmonth;
}
function renderTable(month, year){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let d = new Date(year,month-1);
    let day = weekday[d.getDay()]; 
    let b=weekday.indexOf(day)
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const month2 = new Date(year,month-1);
    let MONTH=monthNames[month2.getMonth()];
    console.log(b)
    console.log(day)   
    let table=document.createElement('table')
    let printmonth=document.createElement('h3')
    printmonth.textContent=MONTH
    printmonth.setAttribute("class",'move')  
    let printyear=document.createElement('h3')
    printyear.textContent=year
    printyear.setAttribute("class",'move')
    table.setAttribute('id','table')
    let template = `
    <thead>
        <td id ='tablename'><strong>Sun</strong></td>
        <td id ='tablename' ><strong>Mon</strong></td>
        <td id ='tablename' ><strong>Tue</strong></td>
        <td id ='tablename' ><strong>Wed</strong></td>
        <td id ='tablename' ><strong>Thur</strong></td>
        <td id ='tablename' ><strong>Fri</strong></td>
        <td id ='tablename' ><strong>Sat</strong></td>
        </thead>    `
    table.innerHTML += template;
    let d1=nodays(month,year)
    let a=1;
    for(let i=0;i<=5;i++){
        let tbody=document.createElement('tbody')
        let tr=document.createElement('tr')
        tr.setAttribute('id','row'+i)
        tbody.append(tr)
        table.append(tbody)
        for(let j=0;j<=6;j++){
            if (i ==0 && j < b) {
                let td = document.createElement("td");
                let text = document.createTextNode("");
                td.append(text);
                tr.append(td);
            }
            else{
                let td = document.createElement("td");
                let button1=document.createElement('button') 
                let task=document.createElement('h4')
                button1.setAttribute('class','day')
                button1.setAttribute('type','submit')
                button1.setAttribute('onclick','task(this.id)')
                button1.setAttribute('data-bs-toggle','modal')
                button1.setAttribute('data-bs-target','#myModal')
                if(a<=d1){
                    button1.setAttribute('id',`${a}`)
                    task.setAttribute('id',`${a+"/"+MONTH+"/"+year}`)
                    button1.append(a)
                    td.append(button1)
                    td.append(task)
                    a=a+1;
                    tr.append(td) 
                }
            }   
        } 
    }
    bodyDiv = document.getElementById("tablearea"); 
    bodyDiv.innerHTML="";
    bodyDiv.append(printmonth) 
    bodyDiv.append(printyear)
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
    }
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
function month_0(){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("month").value = month-1;
    renderTable(month-1, year)
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
function month_1(){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("month").value = month+1;
    renderTable(month+1, year)
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
function year_0(){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("year").value = year-1;
    renderTable(month, year-1)
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
function year_1(){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    document.getElementById("year").value = year+1;
    renderTable(month, year+1)
    document.getElementById(`${curdate}`).style.background='#4dbbff';
    document.getElementById(`${curdate}`).style.borderRadius = '50%';
}
let date_1
function task(clicked){
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    const month2 = new Date(year,month-1);
    let MONTH=monthNames[month2.getMonth()];
    date_1=clicked+"/"+MONTH+"/"+year;
} 
function Submit2(){
    let user_number=document.getElementById(date_1)
    let Task_1=document.getElementById('data').value;
    localStorage.setItem(date_1,Task_1)
    let loc=localStorage.getItem(date_1)
    user_number.append(loc) 
    document.getElementById('data').value = ''
}
function cancel(){
    document.getElementById('data').value = ''
}
