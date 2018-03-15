var x = document.getElementsByName("iAgree");
var y = document.getElementsByName("register");
for (i = 0; i < x.length; i++) {
    if (x[i].type === "checkbox") {
        x[i].checked = true;
    }
}
document.forms["guestloginForm"].submit();