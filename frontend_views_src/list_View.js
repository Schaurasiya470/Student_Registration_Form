const list_View_Api = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/GET_API.php';
const post_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/POST_API.php';
const put_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/PUT_API.php';
const delete_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/DELETE_API.php';

const tbody = document.getElementById('tbody');

fetch(list_View_Api)
.then(Response =>Response.json())
.then(data =>{
    console.log(data);
    data.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML=
        `<td> ${element.id} </td>
        <td>${element.first_name+" "+element.last_name}</td>
        <td>${element.email_id}<br>${element.mobile}</td>
        <td>${element.aadhar_no}</td>
        <td>${element.date_of_birth}</td>
        <td>${element.gender}</td>
        <td>${element.street +" "+element.landmark}<br>${element.city +" "+element.pincode}<br>${element.state +" "+element.country}</td>
        <td> ${element.username}<br>  ${element.password}</td>
        <td> ${element.hobbies}</td>
        <td>.......</td>`
        tbody.appendChild(tr);
    });
})
.catch(error => console.error('Error loading countries:', error));