$(function() {
	//轮播2
	$("#an1").on('click', function() {
		$("#m1").show();
		$("#m3").show();
	})
	$("#an2").on('click', function() {
		$("#m1").hide();
		$("#m3").hide();
	})

	$("#m1").mousemove(function() {
		$(".pppp").show();
		$("#m1").css('box-shadow', '1px 1px 30px 1px #ccc')
	})
	$("#m1").mouseout(function() {
		$(".pppp").hide();
		$("#m1").css('box-shadow', '0 0 0 0');
	})
	$("#m3").mousemove(function() {
		$(".pppp2").show();

		$("#m3").css('box-shadow', '1px 1px 30px 1px #ccc')
	})
	$("#m3").mouseout(function() {
		$(".pppp2").hide();
		$("#m3").css('box-shadow', '0 0 0 0');
	})
	$("#m4").mousemove(function() {
		$(".pppp3").show();
		$("#m4").css('box-shadow', '1px 1px 30px 1px #ccc')
	})
	$("#m4").mouseout(function() {
		$(".pppp3").hide();
		$("#m4").css('box-shadow', '0 0 0 0');
	})
	$("#m5").mousemove(function() {
		$(".pppp4").show();

		$("#m5").css('box-shadow', '1px 1px 30px 1px #ccc')
	})
	$("#m5").mouseout(function() {
		$(".pppp4").hide();
		$("#m5").css('box-shadow', '0 0 0 0');
	})

	var intiff = parseInt(500000);

	function timer(intiff) {
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0;
			if(intiff > 0) {
				day = Math.floor(intiff / (60 * 60 * 24));
				hour = Math.floor(intiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if(minute <= 9) minute = '0' + minute;
			if(second <= 9) second = '0' + second;
			$('.hour_show').html('<s id="h"></s>' + hour + ':');
			$('.minute_show').html('<s></s>' + minute + ':');
			$('.second_show').html('<s></s>' + second + '');
			intiff--;
		}, 1000);
	}
	$(function() {
		timer(intiff);
	});



   $(function(){
        function getdata(page_index,page_size){
            $.post('http://localhost:3000/getlistt',
                {page_index:page_index,page_size:page_size},
                function(res){
                    console.log(res);
                    var str3 = '';
                    var ler3 = res.result;
                    console.log(ler3.length);
                    for(var i = 0;i <ler3.length;i++){
                       str3 += '<div class="col-md-2 pf">' + '<div class="row n3">' +
					'<div><img src="' + ler3[i].thum_img.min + '"></div>' +
					'<div class="n4"><h5>' + ler3[i].title + '</h5><p class="z">' + ler3[i].subhead +
					'</p><span class="y">￥</span><strong>' + ler3[i].view_volume + '</strong><span class="fff">' + ler3[i].discount + '折</span><del>￥' + ler3[i].com_price + '</del></div>' +
					'</div></div>'

                    }
                    console.log(str3)
                    $('#tuu').html(str3);
                })
        }

        $.get('http://localhost:3000/gettotal',function(res){
            var total = res.length;
            // console.log(total)
            initPagination(total);
        })

        var initPagination = function(total) {
            // 创建分页
            console.log("total:" + total)
            $("#Pagination").pagination(10, {
                num_edge_entries: 3, //边缘页数
                num_display_entries: 6, //主体页数
                items_per_page:1,
                callback: pageselectCallback,
                prev_text: "《 上一页",
                next_text: "下一页 》"
            });
        };

        function pageselectCallback(page_index, jq){
            getdata(page_index,20);
            return false;
        }

    });
    
	
	
	
	
	
	
	
	
	
	
	
	
	

	$.ajax({
		url: 'http://localhost:3000/gitlist',
		dataType: 'jsonp',
		method: 'get',
		success: function(data) {
			//		console.log(JSON.parse(data));

			var json = JSON.parse(data);
			var str = '';
			var str2 = '';
			var ler = json.result;

			for(var i = 0; i < ler.length; i++) {
				str += '<div class="row ha1 swiper-slide">' +
					'<div class="col-md-2"><img src="' + ler[i].product_img + '"></div>' +
					'<div class="col-md-10 ba11"><p>' + ler[i].comment_mobile + '</p><p>' + ler[i].comment_content + '<p></div>' +
					'</div>'

			}

			$('.haaa').html(str);
			var str2 = '';
			var ler2 = json.product_list;
			for(var i = 0; i < ler2.length; i++) {
				str2 += '<div class="col-md-2 pf2">' + '<div class="row ha2">' +
					'<div><img src="' + ler2[i].thum_img.min + '"></div>' +
					'<div><p>' + ler2[i].title + '</p><strong>' + ler2[i].price + '</strong><p  class="z">' + ler2[i].selling_point + '</p><p>' + ler2[i].explain + '<p></div>' +
					'</div></div>'
			}

			$(".haaa2").html(str2);

			var str3 = '';
			var ler3 = json.good_list;
//			for(var i = 0; i < ler3.length; i++) {
//
//				str3 += '<div class="col-md-2 pf">' + '<div class="row n3">' +
//					'<div><img src="' + ler3[i].thum_img.min + '"></div>' +
//					'<div class="n4"><h5>' + ler3[i].title + '</h5><p class="z">' + ler3[i].subhead + '</p><span class="y">￥</span><strong>' + ler3[i].view_volume + '</strong><span class="fff">' + ler3[i].discount + '折</span><del>￥' + ler3[i].com_price + '</del></div>' +
//					'</div></div>'
//
//			}
//
//			$(".tuu").html(str3);
		}

	})
	
	
	
	
	
	
	//返回顶部
	 $(window).scroll(function(){
   var sc=$(window).scrollTop();
   var rwidth=$(window).width()
   if(sc>0){
    $("#goTopBtn").css("display","block");
    $("#goTopBtn").css("left",(rwidth-36)+"px")
   }else{
   $("#goTopBtn").css("display","none");
   }
 })
 $("#goTopBtn").click(function(){
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
 })
 
 
 


	
})
