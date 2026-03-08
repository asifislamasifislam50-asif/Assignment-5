document.getElementById("login-btn").addEventListener("click", function(){
    // 1.user name
    const userName = document.getElementById("input-user-name");
    const contactUserName = userName.value;
    console.log(contactUserName);

    // 2,password
    const inputPassword = document.getElementById("input-passeord");
    const password = inputPassword.value;
    console.log(password);

    // 3.match username & password
    if(contactUserName== "admin" && password=="admin123"){
        alert("login Success");

        window.location.assign("/All.html");

    }
    else{
        alert("login Faild");
        return;
    }
}); 