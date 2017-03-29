var alert = document.getElementById('alertTemplate').innerHTML,
    alertTemplate = Handlebars.compile(alert);

var post = document.getElementById('postsTemplate').innerHTML,
    postsTemplate = Handlebars.compile(post);

var error = document.getElementById('errorTemplate').innerHTML,
    errorTemplate = Handlebars.compile(error);

var name = document.getElementById('name'),
    lastName = document.getElementById('lastName'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    rePassword = document.getElementById('re_password');

var exp_email = /\w+@\w+\.+[a-z]/,
exp_phone = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/,
exp_password = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

function save() { 

    if ( name.value == '' || lastName.value == '' || phone.value == '' || email.value == '' || password.value == '' || rePassword.value == '' ) {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'danger', body: 'There are empty fields!'});
    } else if (!exp_phone.test(phone.value)) {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'danger', body: 'The phone must have a minimum of 10 characters!'});
    } else if (!exp_email.test(email.value)) {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'danger', body: 'The email is not valid!'});
    } else if ( password.value != rePassword.value ) {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'danger', body: 'Passwords do not match!'}); 

        $(':password').val('');

    } else if (!exp_password.test(password.value)) {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'danger', body: 'The password must have a minimum of 8 characters, a capital letter and a number!'});

        $(':password').val('');

    } else {
        document.getElementById('alert').innerHTML = alertTemplate({type: 'success', body: 'Thank you, Your form has been submitted successfully!'});

        $('input').val('');

        sendPosts();

    }

    setTimeout(function(){
        document.getElementById('alert').innerHTML = ''
    }, 3000);

}

////////////// validation inputs //////////////////

window.onload = function() {

    var inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach(function(input) {

        input.addEventListener('blur', function() {
            if(this.value == '') {
                this.style.background = '#f2dede';
            }
        });

        input.addEventListener('focus', function() {
            this.style.background = '#ffffff';
        });

    });

}

//////////////////////////// Draw Posts /////////////////////////////////////

function sendPosts() {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(function(data) {
            document.getElementById('posts').innerHTML = postsTemplate({items: data});
        }).catch(function(err){
            document.getElementById('posts').innerHTML = errorTemplate({type: 'danger', body: 'Posts Not Found'}); 
        });
}