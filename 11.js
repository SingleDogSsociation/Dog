
var dl = document.getElementById('dl');
var denglu = document.getElementById('denglu');
var mtk = document.querySelector('.div_overlay');
dl.onclick = function () {
    denglu.style.display = 'block';
    mtk.style.display = 'block';
}


var dt = document.getElementById('dt');
var ditu = document.getElementById('ditu');
dt.onclick = function (e) {
    e.preventDefault();
    ditu.style.display = 'block';
    mtk.style.display = 'block';
}

var dt = document.getElementById('guanbi');
dt.onclick = function () {
    denglu.style.display = 'none';
    mtk.style.display = 'none';
}




var uu1 = document.getElementById('uu1');
var oo1 = document.getElementById('oo1');
uu1.onmousemove = function () {
    oo1.style.display = 'block';
}
uu1.onmouseout = function () {
    oo1.style.display = 'none';
}



window.onload=function(){
    function tab(){
        var aBtn=document.querySelectorAll('#an img');
        var aDiv=document.querySelectorAll('#index div');
        var index=document.querySelector('#index');

        for(var i=0;i<aBtn.length;i++){
            aBtn[i].index=i;
            aBtn[i].onmousemove=function(){
                index.style.display='block';
                for(var i=0;i<aBtn.length;i++){
                    aDiv[i].style.display='none';
                }
                aDiv[this.index].style.display='block';
            }
        }
    }
    tab();
}
//轮播
var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
});
document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
});
document.querySelector('.prepend-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
});

// $.ajax({
//     url:'http://localhost:3002/aaa',
//     dataType:'jsonp',
//     method:'get',
//     success:function (data) {
// //            console.log(JSON.parse(data))
//         var json =JSON.parse(data);
//         console,log(2)
//         var str = '<div class="out "><ul class="img ">';
//         var xa = json.img.lunbo;
//         for(var i =0;0<xa.length;i++){
//             str+= '<li><a href="#">'+'<img src="'+xa[i].lunbo_img+'" alt=" " class="img2">'+'</a></li>'
//         }
//         str+='</ul></div>';
//         console.log(str)
//         $('#ss').html(str);
//     }
// })
// $.ajax({
//     url:'http://localhost:3002/aaa',
//     dataType:'jsonp',
//     method:'get',
//     success:function (data) {
//         var json =JSON.parse(data);
//         var str = '';
//         var xa = json.img.guzhang;
//         for(var i =0;0<xa.length;i++){
//             str+= '<a href="#" onmousemove=""><img src="'+xa[i].img+'"><br>屏幕</a>'
//         }
//         console.log(str)
//         $('').html(str);
//     }
// })