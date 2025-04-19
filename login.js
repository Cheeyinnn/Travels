document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.querySelector('input[name="password"]');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const form = document.querySelector('form');

    let savedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Get the last saved user (most recent)
    const lastUser = savedUsers.length > 0 ? savedUsers[savedUsers.length - 1] : null;

    if (lastUser) {
        usernameInput.value = lastUser.username;
        rememberMeCheckbox.checked = !!lastUser.rememberMe;

        if (lastUser.rememberMe && lastUser.password) {
            passwordInput.value = lastUser.password;
        }

        usernameInput.dispatchEvent(new Event('input'));
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username) return;

        // Remove existing entry for this user
        savedUsers = savedUsers.filter(user => user.username !== username);

        const userData = {
            username: username,
            rememberMe: rememberMeCheckbox.checked
        };

        // Only store password if "Remember Me" is checked
        if (rememberMeCheckbox.checked) {
            userData.password = password;
        }

        savedUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(savedUsers));

         // Store cookies
         storeCookie();

          // Then, you can either programmatically navigate or continue with the form submission
         window.location.href = "travelmain.html";

    });
});
 

function storeCookie() {

    let expDate = new Date();
    expDate.setMonth(expDate.getMonth() + 1);

    var name = document.getElementById("username").value;

    var userCookieString = "name=" + name + ";expires=" + expDate.toUTCString() + ";path=/";

    document.cookie = userCookieString;

}


function getCookie(name) {

    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
 
  document.addEventListener("DOMContentLoaded", function () {
    var userName = getCookie("name");

    if (userName) {
        let cookieString = "User: " + userName;
        let userConfirmed = confirm(cookieString); // Now it works

        if (userConfirmed) {
            document.querySelector("h1").innerHTML = cookieString;
        } else {
            console.log("User canceled.");
            let cookieNotString = "Welcome, guest!";
            document.querySelector("h1").innerHTML = cookieNotString;
        }
    } else {
        // No cookie found at all
        let cookieNotString = "Welcome, guest!";
        document.querySelector("h1").innerHTML = cookieNotString;
    }
});

