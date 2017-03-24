function save() { 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('re_password').value;

    var expression = /\w+@\w+\.+[a-z]/;

    if ( name == '' || email == '' || password == '' || rePassword == '' ) {
        document.getElementById('alerta').innerHTML = 
        '<div class="alert alert-danger" role="alert">' +
            'There are empty fields!' +
        '</div>'
    } else if (!expression.test(email)) {
        document.getElementById('alerta').innerHTML = 
        '<div class="alert alert-danger" role="alert">' +
            'The email is not valid!' +
        '</div>'
    } else if ( password != rePassword ) {
        document.getElementById('alerta').innerHTML = 
        '<div class="alert alert-danger" role="alert">' +
            'Passwords do not match!' +
        '</div>'

        $(':password').val('');

    } else if ( password.length < 8 && rePassword.length < 8 ) {
        document.getElementById('alerta').innerHTML = 
        '<div class="alert alert-danger" role="alert">' +
            'Passwords must be at least 8 characters long!' +
        '</div>'

        $(':password').val('');

    } else {
        document.getElementById('alerta').innerHTML = 
        '<div class="alert alert-success" role="alert">' +
            '<strong>Thank you!</strong> Your form has been submitted successfully.' +
        '</div>'
    }

    setTimeout(function(){
        document.getElementById('alerta').innerHTML = ''
    }, 2000);

}

////////////////////////////////

window.onload = function() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');

    name.onblur = function() {
        if (name.value == '') {
            name.style.background = '#f2dede';
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
    var email = document.getElementById('email').value;

    if(name) {
        document.getElementById('name').style.background = '#ffffff';
    }

    if (email) {
        document.getElementById('email').style.background = '#ffffff';
    }

}