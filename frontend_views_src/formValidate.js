

function fnameValidate() {     // fnameValidate() function enable the client side validation on first name
    const fname = document.getElementById('firstName').value;
    const fname_error = document.getElementById('fname-error')

    if (fname=='') {
        console.log('zereo');
        fname_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*First name must not be empty</span>';
        return true;
    }
    const exp = /^[a-zA-Z ]+$/;
    if (!exp.test(fname)) {
        console.log('hello');
        fname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*First name only includes alphabates and spaces</span>';
        return true;  
    }
    if (fname.length<3) {
        console.log('hello');
        fname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*First name must be atleast three character</span>';
        return true;  
    }
    if (fname.length>30) {
        console.log('hello');
        fname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*First name must be atmost 30 character</span>';
        return true;  
    }
   

    
    fname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture;  


}

function lnameValidate() {      // lnameValidate() function enable the client side validation on last name
    const lname = document.getElementById('lastName').value;
    const lname_error = document.getElementById('lname-error');

    if (lname=='') {
       lname_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;"></span>';
        return true;
    }

    const exp = /^[a-zA-Z ]+$/;
    if (!exp.test(lname)) {
        lname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Last name only includes alphabates and spaces</span>';
        return true;  
    }
    if (lname.length>30) {
        lname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Last name must be atmost 30 character</span>';
        return true;  
    }

    lname_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 

    
}

function emailValidate() {          // emailValidate() function enable the client side validation on email
    const email = document.getElementById('email').value;
    const email_error = document.getElementById('email-error');

    if (email=='') {
        email_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Email must not be empty</span>';
        return true;
    }
    const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!exp.test(email)) {
        email_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Enter correct Email id</span>';
        return true;  
    }
    if (email.length>100) {
        email_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Email must be atmost 100 character</span>';
        return true;  
    }

    email_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
    
}

function aadharValidate() {         // aadharValidate() function enable the client side validation on Aadhar no
    const aadhar = document.getElementById('aadhar').value;
    const aadhar_error = document.getElementById('aadhar-error');

    if (aadhar=='') {
        aadhar_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Aadhar No. must not be empty</span>';
        return true;
    }
    if (aadhar.length>100) {
        aadhar_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Aadhar No. must be atmost 100 digits</span>';
        return true;  
    }


    aadhar_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}
function dobValidate() {            // dobValidate() function enable the client side validation on date of birth
    const dob = document.getElementById('dob').value;
    const dob_error = document.getElementById('dob-error');

    if (dob=='') {
        dob_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Enter Date of Birth</span>';
        return true;
    }
    dob_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}

function mobileValidate() {            // mobileValidate() function enable the client side validation on Mobile No
    const mobile = document.getElementById('mobile').value;
    const mobile_error = document.getElementById('mobile-error');

    if (mobile=='') {
        mobile_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Mobile No. must not be empty</span>';
        return true;
    }
    if (mobile.length!=10) {
        mobile_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Mobile No. must be 10 digit</span>';
        return true;  
    }


    mobile_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}

function countryValidate() {            // CountryValidate() function enable the client side validation on Couuntry name
    const country = document.getElementById('country').value;
    const country_error = document.getElementById('country-error');

    if (country=='') {
        country_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;*Select Country name</span>';
        return true;
    }
    country_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}

function stateValidate() {              // StateValidate() function enable the client side validation on State name
    const state = document.getElementById('state').value;
    const state_error = document.getElementById('state-error');

    if (state=='') {
        state_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;*Select State name</span>';
        return true;
    }
    state_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}
function cityValidate() {               // cityValidate() function enable the client side validation on City name
    const city = document.getElementById('city').value;
    const city_error = document.getElementById('city-error');

    if (city=='') {
        city_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;*Select City name</span>';
        return true;
    }
    city_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}

function streetValidate() {             // streetValidate() function enable the client side validation on Street
    const street = document.getElementById('street').value;
    const street_error = document.getElementById('street-error');

    if (street=='') {
       street_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">*Street Address must not be empty</span>';
        return true;
    }

    const exp = /^[a-zA-Z0-9 -.:_]+$/;
    if (!exp.test(street)) {
        street_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;*Street only include alphabates , numbers and (-,space,:,underscore)</span>';
        return true;  
    }
    if (street.length>100) {
        street_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;*Street Address must be atmost 100 character</span>';
        return true;  
    }

    street_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 

    
}
function landmarkValidate() {           // landmarkValidate() function enable the client side validation on Landmark field
    const landmark = document.getElementById('landmark').value;
    const landmark_error = document.getElementById('landmark-error');

    if (landmark=='') {
       landmark_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">*Lankmark must not be empty</span>';
        return true;
    }

    const exp = /^[a-zA-Z0-9 ]+$/;
    if (!exp.test(landmark)) {
        landmark_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;*Landmark only include alphabates,numbers and space</span>';
        return true;  
    }
    if (landmark.length>100) {
        landmark_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;*Landmark must be atmost 100 character</span>';
        return true;  
    }

    landmark_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 

    
}
function pincodeValidate() {                // pincodeValidate() function enable the client side validation on Pincode
    const pincode = document.getElementById('pincode').value;
    const pincode_error = document.getElementById('pincode-error');

    if (pincode=='') {
        pincode_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;*Pincode can not be empty</span>';
        return true;
    }
    if (pincode.length>10) {
        pincode_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;*Pincode must be less than 10 digit</span>';
        return true;  
    }
    pincode_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 
}

function usernameValidate() {               // usernameValidate() function enable the client side validation on Username
    const username = document.getElementById('username').value;
    const username_error = document.getElementById('username-error');

    if (username=='') {
       username_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Username can not be empty </span>';
        return true;
    }
    if (username.length<6) {
        username_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Username must be atleast 5 character</span>';
        return true;  
    }

    const exp = /^[a-zA-Z0-9]+$/;
    if (!exp.test(username)) {
        username_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Username must be alphanumeric value only</span>';
        return true;  
    }
    if (username.length>30) {
        username_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Username must be atmost 30 character</span>';
        return true;  
    }

    username_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 

    
}
function passwordValidate() {               // passwordValidate() function enable the client side validation on Password
    const password = document.getElementById('password').value;
    const password_error = document.getElementById('password-error');

    if (password=='') {
       password_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Password can not be empty </span>';
        return true;
    } 
    if (password.length<11) {
        password_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Password must be atleast 10 characters</span>';
        return true;  
    }

    // const exp = /^[a-zA-Z0-9]+$/;
    // if (!exp.test(password)) {
    //     password_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Password includes alphabates ,numbers and all special charaters</span>';
    //     return true;  
    // }
    if (password.length>30) {
        password_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Password must be atmost 30 character</span>';
        return true;  
    }

    password_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
    return ture; 

    
}

function hobbiesValidate(checkboxGroup) {               // hobbiesValidate() function enable the client side validation on Hobbies 
    hobbies_error = document.getElementById('hobbies-error');
    const checkedBoxes = checkboxGroup.filter(checkbox => checkbox.checked);
    const numChecked = checkedBoxes.length;

    if(numChecked<2){
        hobbies_error.innerHTML='<span id="fname-error" style="color: red;font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Select atleast two hobbies </span>';
        return false;
    }
    else{
        hobbies_error.innerHTML='<span id="fname-error" style="color: red; font-size: 15px;"></span>';
        return true; 
    }
    
}
