const nextbtn1 = document.getElementById('nextbtn1');
const nextbtn2 = document.getElementById('nextbtn2');
const nextbtn3 = document.getElementById('nextbtn3');
const backbtn1 = document.getElementById('backbtn1');
const backbtn2 = document.getElementById('backbtn2');

const container = document.getElementById('container')
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const check = document.getElementById("check-i");
const nobtn = document.getElementById('nobtn');
const yesbtn = document.getElementById('yesbtn');
const file = document.getElementById('file');


nav1.style.backgroundColor = "#14a44e";     
nobtn.addEventListener('click',()=>{            // upload file functionality (Hide the upload button)
    file.style.display="None";

});

yesbtn.addEventListener('click',()=>{        // upload file functionality (show the upload button)
    file.style.display="block";
 
 });

nextbtn1.addEventListener('click',()=>{           // all the changes which made upon 1st next button clicked
    form2.style.top="-550px";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "#14a44e";
    check.style.backgroundColor= "white";
    check.style.border = "2px solid #14a44e";
    check.style.color = "#14a44e";
    nav1.style.color='#14a44e';
    nav2.innerHTML='<i id="check-i" class="fa fa-check"></i>&nbsp;&nbsp;Address Details';
    nav2.style.color='white';

});

nextbtn2.addEventListener('click',()=>{            // all the changes which made upon 2st next button clicked
    form3.style.top="-1100px";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "#14a44e";
    nav3.innerHTML='<i id="check-i" class="fa fa-check"></i>&nbsp;&nbsp;Others Details';
    nav3.style.color='white';
    nav2.innerHTML='<i style="background-color: white; color: #14a44e; border: 2px solid #14a44e;" id="check-i" class="fa fa-check"></i>&nbsp;&nbsp;Address Details';
    check.style.backgroundColor= "white";
    check.style.border = "2px solid #14a44e";
    check.style.color = "#14a44e";
    nav2.style.color='#14a44e';
    nav2.style.backgroundColor='white';

});

backbtn1.addEventListener('click',()=>{      // all the changes which made upon 1st back button clicked
    form2.style.top="550px";
    form3.style.top="1100px";
    nav1.style.backgroundColor = "#14a44e";
    nav2.style.backgroundColor = "white";
    check.style.backgroundColor= "#14a44e";
    check.style.border = "2px solid white";
    check.style.color = "white";
    nav1.style.color='white';
    nav2.innerHTML='<span><input type="radio" name="nav" id="" disabled></span>Address Details';
    nav2.style.color='#aeb0af';

});

// nextbtn3.addEventListener('click',()=>{
//     form3.style.top="-500px";

// });

backbtn2.addEventListener('click',()=>{            // all the changes which made upon 2st back button clicked
    // form2.style.top="500px"; 
    form3.style.top="1100px";
    nav2.style.backgroundColor = "#14a44e";
    nav3.style.backgroundColor = "white";
    nav3.innerHTML='<span><input type="radio" name="nav" id="" disabled></span>Other Details';
    nav3.style.color='#aeb0af';
    nav2.style.color='white';
});




const list_view = document.getElementById('list-view');
const list_button = document.getElementById('list-button');

list_button.addEventListener('click',()=>{                                                       
    list_view.style.display='None';                   // when '+' button is clicked then hiding the list-view container 
    container.style.display='block';                  // and showing the form container
});

