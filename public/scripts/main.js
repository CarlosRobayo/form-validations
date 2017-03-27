function save() { 

    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('re_password').value;

    var exp_email = /\w+@\w+\.+[a-z]/;
    var exp_phone = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
    var exp_password = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if ( name == '' || lastName == '' || phone == '' || email == '' || password == '' || rePassword == '' ) {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-danger animated tada" role="alert">' +
            'There are empty fields!' +
        '</div>'
    } else if (!exp_phone.test(phone)) {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-danger animated tada" role="alert">' +
            'The phone must have a minimum of 10 characters!' +
        '</div>'
    } else if (!exp_email.test(email)) {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-danger animated tada" role="alert">' +
            'The email is not valid!' +
        '</div>'
    } else if (!exp_password.test(password)) {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-danger animated tada" role="alert">' +
            'The password must have a minimum of 8 characters, a capital letter and a number!' +
        '</div>'

        $(':password').val('');

    } else if ( password != rePassword ) {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-danger animated tada" role="alert">' +
            'Passwords do not match!' +
        '</div>'

        $(':password').val('');

    } else {
        document.getElementById('alert').innerHTML = 
        '<div class="alert alert-success animated bounceIn" role="alert">' +
            '<strong>Thank you!</strong> Your form has been submitted successfully.' +
        '</div>'
    }

    setTimeout(function(){
        document.getElementById('alert').innerHTML = ''
    }, 2500);

}

////////////////////////////////

window.onload = function() {

    var name = document.getElementById('name');
    var lastName = document.getElementById('lastName');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');

    name.onblur = function() {
        if (name.value == '') {
            name.style.background = '#f2dede';
        }
    }

    lastName.onblur = function() {
        if (lastName.value == '') {
            lastName.style.background = '#f2dede';
        }
    }

    phone.onblur = function() {
        if (phone.value == '') {
            phone.style.background = '#f2dede';
        }
    }

    email.onblur = function() {
        if (email.value == '') {
            email.style.background = '#f2dede';
        }
    }

}


function keyUp() {

    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    if(name) {
        document.getElementById('name').style.background = '#ffffff';
    }

    if(lastName) {
        document.getElementById('lastName').style.background = '#ffffff';
    }

    if(phone) {
        document.getElementById('phone').style.background = '#ffffff';
    }

    if (email) {
        document.getElementById('email').style.background = '#ffffff';
    }

}