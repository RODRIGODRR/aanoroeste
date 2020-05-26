$(document).ready(function () {
    $('#header').load('masters/header.html');
    $('#footer').load('masters/footer.html');            
});

scrollDown = () => {
    $("html, body").animate({ scrollTop: "50px" });
}

function btnEnviarEmail_onClick(event){
    event.preventDefault();
}

// var imgArray = [
//     'assets/img/banner_bg.png',
//     'assets/img/banner_bg2.png',
//     'assets/img/banner_bg3.png'],
//     curIndex = 0;
//     imgDuration = 3000;
    
//     function slideShow() {
//         $('.banner_part').addClass('fadeOut');
//         setTimeout(function() {            
//             $('.banner_part').css("background-image", "url('"+ imgArray[curIndex] +"')");
//             $('.banner_part').removeClass('fadeOut');
//         },1000);
//         curIndex++;
//         if (curIndex == imgArray.length) { curIndex = 0; }
//         setTimeout(slideShow, imgDuration);
//     }
//     slideShow();