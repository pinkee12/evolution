let name = document.getElementById('name')
let docID = document.getElementById('docID')
let department = document.getElementById('dept')
let experience = document.getElementById('exp')
let email = document.getElementById('email')
let Mobile = document.getElementById('mbl')
let submit = document.getElementById('f')
var tbody = document.querySelector('tbody')

var arr = []

var cnt = 0

submit.addEventListener('submit', function (ev) {
    ev.preventDefault()
    var obj = {}
    obj['name'] = name.value
    obj['eid'] = docID.value
    obj['dep'] = department.value
    obj['exp'] = experience.value
    obj['email'] = email.value
    obj['mb'] = Mobile.value
    arr.push(obj)

    var tr1 = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    var td7 = document.createElement('td')
    var td8 = document.createElement('td')
    var btn = document.createElement('button')
    
    btn.innerText = 'Remove'
    btn.style.borderRadius = '5px'
    if (obj.exp > 5) {
        td7.innerText = 'Senior'
    } else if (obj.exp >= 2 && obj.exp <= 5) {
        td7.innerText = "Junior"
    } else if (obj.exp <= 1) {
        td7.innerText = 'Fresher'
    }
    
    td1.innerText = obj.name
    td2.innerText = obj.eid
    td3.innerText = obj.dep
    td4.innerText = obj.exp
    td5.innerText = obj.email
    td6.innerText = obj.mb
    td8.appendChild(btn)
    tr1.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr1)

    
    btn.addEventListener('click', function () {
        tr1.remove(); // Remove the row when the button is clicked
    })

   
    console.log(obj)
})



