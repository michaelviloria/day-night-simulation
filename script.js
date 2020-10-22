const time = document.getElementsByClassName("page");
var switched = document.getElementById("switch");
switched.addEventListener("change", function()
{
    if(this.checked)
    {
        time[0].classList.add("night");
    }
    else
    {
        time[0].classList.remove("night");
    }
});