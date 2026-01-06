let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("from").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsafe.first_name + " " + tg.initDataUnsafe.last_name
});

order.addEventListener("click", () => {
    tg.close();
})