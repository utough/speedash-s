'use strict';

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

// ハンバーガーメニュー クリックした時、メニュー開く
$(".openbtn").click(function () {//ボタンがクリックされたら
    var kariHozon = $(this).attr('id');

    if ( kariHozon == "hamburger-btn"){
        if ($(".search-panel").hasClass('panelactive')){
            $("#search-icon").removeClass('active');//ボタンの activeクラスを除去し
            $(".search-panel").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
            $(".close-mask").toggleClass("active");
        };
        $("#hamburger-icon").toggleClass('active');//ボタン自身に activeクラスを付与し
        $(".hamburger-panel").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        $(".close-mask").toggleClass("active");
    } else if( kariHozon == "search-btn" ) {
        if ($(".hamburger-panel").hasClass('panelactive')){
            $("#hamburger-icon").removeClass('active');//ボタンの activeクラスを除去し
            $(".hamburger-panel").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
            $(".close-mask").toggleClass("active");
        };
        $("#search-icon").toggleClass('active');//ボタンのなかみの画像に activeクラスを付与し、画像を切り替えた
        $(".search-panel").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        $(".close-mask").toggleClass("active");
    } else {
        $(".open-btn-image").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav,.hamburger-panel,.search-panel").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
        $(".close-mask").removeClass("active");
    };

	// $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    // $(".hamburger-panel").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a,.close-mask,a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open-btn-image").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav,.hamburger-panel,.search-panel").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $(".close-mask").removeClass("active");
});

// feature ファーストビューカルーセルというか、スライドショー 
$('#slick01').slick({
    autoplay: true, 
    autoplaySpeed: 7000,
    dots: true, //複数書く場合は「,」でつなぐ
    arrows: false,
});

// カルーセル - ブログ
$(function() {
    $('.lineup-carousel').on('init', function(event, slick) {
        $('.current').text("0" + (slick.currentSlide + 1));
        $('.total').text("0" + slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.slick-prev-blog'),
        nextArrow: $('.slick-next-blog'),
        responsive: [{
        breakpoint: 599,  //ブレイクポイントを指定
            settings: {
            slidesToShow: 1,
            infinite: true,
            }
        }]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text("0" + (nextSlide + 1) );
    });
});

// ランキング カルーセル
$('.ranking-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [{
    breakpoint: 599,  //ブレイクポイントを指定
        settings: {
        slidesToShow: 2,
        }
    }]
});


