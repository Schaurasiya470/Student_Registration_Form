const list_View_Api = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/GET_API.php';
const post_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/POST_API.php';
const put_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/PUT_API.php';
const delete_API = 'http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/DELETE_API.php';

const tbody = document.getElementById('tbody');

fetch(list_View_Api)                    // Returning a promise and then consuming the recieving details
.then(Response =>Response.json())       // parsing the data in json format
.then(data =>{
    console.log(data);
    data.forEach(element => {             // rendering the all details available in that json file
        const tr = document.createElement('tr');
        tr.innerHTML=
        `<td> ${element.id} </td>
        <td>${element.first_name+" "+element.last_name}</td>
        <td>&nbsp;<i class="fa fa-envelope"></i>&nbsp;${element.email_id}<br>&nbsp; <i class="fa fa-phone"></i>&nbsp;${element.mobile}</td>
        <td>${element.aadhar_no}</td>
        <td>${element.date_of_birth}</td>
        <td>${element.gender}</td>
        <td>${element.street +" "+element.landmark}<br>${element.city +" "+element.pincode}<br>${element.state +" "+element.country}</td>
        <td>&nbsp;<i class="fa fa-user"></i>&nbsp;${element.username}<br>&nbsp;<i class="fa fa-lock"></i>&nbsp; ${element.password}</td>
        <td> ${element.hobbies}</td>
        <td><div class="action-btn" onclick="actionList()">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        </div>
        <div id="action-list">
        <div class="action-item"><span class="fa fa-pencil"></span>Modify</div>
        <div class="action-item"><span class="fa fa-trash"></span>Delete</div>
        </div>
        </td>`
        tbody.appendChild(tr);
    });
})
.catch(error => console.error('Error loading countries:', error));

function actionList() {                 
    const action_btn = document.getElementById('action-list');
    action_btn.style.display='block';    
}