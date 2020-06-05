$(document).ready(function () {
    $('#header').load('masters/header.html');
    $('#footer').load('masters/footer.html');
});

scrollDown = () => {
    $("html, body").animate({ scrollTop: "50px" });
}

function btnEnviarEmail_onClick(event) {
    event.preventDefault();
}

function trataPaginacao(index) {
    $('[data-blocoFotos]').addClass('hiddenElements');
    $('[data-blocoFotos="' + $(index).text() + '"]').removeClass('hiddenElements');

    $('[data-blocoFotos="' + $(index).text() + '"]').gallerie();
    $('.gallerie-captionbox').css("box-sizing", "content-box");
    $('.gallerie-image').addClass("imgHeight");
}

$('[data-itemPaginacao]').click(function (event) {
    event.preventDefault();
    $('#paginationId').val($(this).text());
    trataPaginacao(this);

    atualizaElementosPaginacao();
});

$('[data-navegacaoPaginacao="anterior"]').click(function (event) {
    event.preventDefault();

    var index = $('#paginationId').val();
    index = parseInt(index, 10);

    var indexOld = index;
    index = index - 1;

    var element = "#pgImages" + index;
    $(element).click();
    $('[data-itemPaginacao="' + index + '"]').addClass("fadeInLeft animated");
    $('[data-itemPaginacao="' + index + '"]').parent().addClass("active");

    $('[data-itemPaginacao]').removeClass('active');

    // aqui apenas para efetivar o efeito da animação na paginação
    setTimeout(function () {
        $('[data-itemPaginacao="' + index + '"]').removeClass("fadeInLeft animated");
        $('[data-itemPaginacao="' + indexOld + '"]').parent().removeClass("active");
    }, 1000);

});

$('[data-navegacaoPaginacao="proximo"]').click(function (event) {
    event.preventDefault();

    var index = $('#paginationId').val();
    index = parseInt(index, 10);

    var indexOld = index;
    index = index + 1;

    var element = "#pgImages" + index;
    $(element).click();
    $('[data-itemPaginacao="' + index + '"]').addClass("fadeInLeft animated");
    $('[data-itemPaginacao="' + index + '"]').parent().addClass("active");

    // aqui apenas para efetivar o efeito da animação na paginação
    setTimeout(function () {
        $('[data-itemPaginacao="' + index + '"]').removeClass("fadeInLeft animated");
        $('[data-itemPaginacao="' + indexOld + '"]').parent().removeClass("active");
    }, 1000);
});

function atualizaElementosPaginacao() {
    $('[data-itemPaginacao]').parent().removeClass("active");
    $('[data-itemPaginacao="' + $('#paginationId').val() + '"]').parent().addClass("active");
}

function frasePaginacao() {    
    var result = Math.floor(Math.random() * 11);    
    var retorno = "";

    switch (true) {
        case result < 2:            
            retorno = "Certos momentos o tempo não apaga";
            break;
        case result < 4:            
            retorno = "A vida é cheia de surpresas";
            break;
        case result < 6:            
            retorno = "Eu me lembro dos dias em que orei pelo que tenho hoje";
            break;
        case result < 8:            
            retorno = "Confia no poder que você tem para transformar a sua pópria história";
            break;
        default:
            retorno = "Amigos a gente não procura, o coração é quem encontra";
    }

    return retorno;
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