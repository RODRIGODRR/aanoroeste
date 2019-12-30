$(document).ready(function () {
    $('#header').load('masters/header.html');
    $('#footer').load('masters/footer.html');            
});

scrollDown = () => {
    $("html, body").animate({ scrollTop: "50px" });
}