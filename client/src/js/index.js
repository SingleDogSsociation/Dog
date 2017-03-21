;(function(){
    var daofena = $('#daofena');
    var fen = $('#fen');
    var fenli = $('#fen>li');
    var bmj = $('.bm_j');
    var dp = $('.dp');
    //鼠标移入banner分类
    daofena.on('mouseover',function(){
        daofena.show();
    }).on('mouseout',function(){
       daofena.css('display','none');
    });
    daofena.on('mouseover','button',function(){
        $(this).css('border','1px solid #118855');
    }).on('mouseout','button',function(){
        $(this).css('border','1px solid #888888')
    });
    fen.on('mouseover','li',function(){
        $('#yuan').css('z-index','-1');
        $(this).css({'background':'#118855','opacity':'0.8'});
        // console.log(this.index())
        $('.wq').eq($(this).index()).css('z-index','1');
        daofena.show();
        //修手机
        if($(this).index() == 0){
            $.ajax({
                url:"http://localhost:3000/aassdd",
                dataType:'jsonp',
                method:'get',
                success:function(data){
                    // console.log(JSON.parse(data));
                    var json = JSON.parse(data);
                    var str = '<div class="row">';
                    var aaa = json.result;
                    for(var i = 0; i<aaa.length;i++){
                        str+='<ul style="display: flex; font-size: 12px;margin-bottom: 30px">'+'<li class="ll col-md-3" style="margin-left: 10px">'+aaa[i].name+'></li>'
                        for(var j = 0;j<aaa[i].list.length;j++){
                            str+='<li style="margin-left: 10px">|'+'&nbsp;'+aaa[i].list[j].name+'</li>'
                        }
                        str+='</ul>'
                    }
                    str+='</ul></div>';
                    // console.log(str);
                    daofena.html(str);
                }
            })
        }
        if($(this).index() == 1){
            $.ajax({
                url:"http://localhost:3000/aassdd",
                dataType:'jsonp',
                method:'get',
                success:function(data){
                    // console.log(JSON.parse(data));
                    var json = JSON.parse(data);
                    var str2 = '<div class="row"><div class="col-md-2"><p>热门问题:</p></div><div class="col-md-10"><div class="row">';
                    var aaa2 = json.hot;
                    for(var i = 0; i<aaa2.length;i++){
                       str2 += '<span class="col-md-3" style="margin-bottom: 20px; font-size: 12px;">'+'<button style="width: 115px;height: 40px; border: 1px solid #888888; text-align: center; line-height: 20px;">'+aaa2[i].name+'</button></span>'
                    }
                    str2+='</div></div>';
                    // console.log(str2);
                    var str2_2 = '<div class="row"><div class="col-md-2"><p style="margin-left: 15px;">其他问题:</p></div><div class="col-md-10"><div class="row">';
                    var aaa2_2 = json.other;
                    for(var i = 0; i<aaa2_2.length;i++){
                        str2_2 += '<span class="col-md-3" style="margin-bottom: 20px; font-size: 12px;">'+'<button style="width: 115px;height: 40px; border: 1px solid #888888; text-align: center; line-height: 20px;margin-left: -5px">'+aaa2_2[i].name+'</button></span>'
                    }
                    str2_2 +='</div></div>';
                    daofena.html(str2+str2_2);
                }
            })
        }
        if($(this).index()==2){
            $.ajax({
                url:"http://localhost:3000/aassdd",
                dataType:'jsonp',
                method:'get',
                success:function(data){
                    // console.log(JSON.parse(data));
                    var json = JSON.parse(data);
                    var str3 = '<div class="row">'
                    for(var i = 0; i<json.shouji.length;i++){
                        str3+='<botton class="col-md-2" style="width: 115px;height: 40px; border: 1px solid #888888; text-align: center; line-height: 40px;margin-left: 18px;margin-bottom: 18px">'+json.shouji[i].name+'</botton>'
                    }
                    str3 +='</div>';
                    daofena.html(str3)
                }
            })
        }
        if($(this).index()==3){
            $.ajax({
                url:"http://localhost:3000/aassdd",
                dataType:'jsonp',
                method:'get',
                success:function(data){
                    // console.log(JSON.parse(data));
                    var json = JSON.parse(data);
                    var str4 = '<div class="row">'
                    for(var i = 0; i<json.mai.length;i++){
                        str4+='<botton class="col-md-2" style="width: 115px;height: 40px; border: 1px solid #888888; text-align: center; line-height: 40px;margin-left: 18px;margin-bottom: 18px">'+json.mai[i].q+'</botton>'
                    }
                    str4 +='</div>';
                    daofena.html(str4)
                }
            })
        }
        //鼠标移出
    }).on('mouseout','li',function(){
        $('#yuan').css('z-index','1');
        fenli.css({'background':'url("https://p.ssl.qhmsg.com/t01c035e0988a964a21.png")','opacity':'1'});
        daofena.css('display','none');
        $('.wq').eq($(this).index()).css('z-index','-1');
    });
    dp.on('mouseover',function(){
        bmj.eq($(this).index()).show();
        // $('$(this)>bmj).show();
    }).on('mouseout',function(){
        bmj.css('display','none');
    });
    $.ajax({
        url:"http://localhost:3000/aassdd",
        dataType:'jsonp',
        method:'get',
        success:function(data){
            var json = JSON.parse(data);
            var hcity = '<div class="row">';
            for(var i = 0; i<json.hotcity.length; i++){
                hcity+= '<a class="col-md-2" style="font-size: 10px;color: #000">'+json.hotcity[i].name+'</a>';
            }
            hcity+='</div>';
            // console.log(hcity);
            $('#hotcity').html(hcity);
            $('#hotcity2').html(hcity);
        }
    });
    $.ajax({
        url:"http://localhost:3000/aassdd",
        dataType:'jsonp',
        method:'get',
        success:function(data){
            var json = JSON.parse(data);
            var zm = '<li class="active">';
            // console.log(json.zm)
            for(var i = 0; i<json.zm.length; i++){
                zm +='<a href="#'+json.zm[i].id+'" aria-controls="'+json.zm[i].id+'" role="tab" data-toggle="tab" style="width: 15px;height: 15px;padding-left: 2px;padding-right: 1px;padding-top: 0px ;padding-bottom: 1px;">'+json.zm[i].zm+'</a></li><li>'
            }
            // console.log(zm);
            $('#zimu').html(zm);
        }
    });
    $.ajax({
        url:"http://localhost:3000/aassdd",
        dataType:'jsonp',
        method:'get',
        success:function(data){
            var json = JSON.parse(data);
            var zm = '<li class="active">';
            // console.log(json.zm)
            for(var i = 0; i<json.zm.length; i++){
                zm +='<a href="#a'+json.zm[i].id+'" aria-controls="a'+json.zm[i].id+'" role="tab" data-toggle="tab" style="width: 15px;height: 15px;padding-left: 2px;padding-right: 1px;padding-top: 0px ;padding-bottom: 1px;">'+json.zm[i].zm+'</a></li><li>'
            }
            console.log(zm);
            $('#zimu2').html(zm);
        }
    });
    $.ajax({
        url:"http://localhost:3000/aassdd",
        dataType:'jsonp',
        method:'get',
        success:function(data){
            var json = JSON.parse(data);
            var city = '<div role="tabpanel" class="tab-pane active"';
            // console.log(json.citylist[1]);
            for(var i = 1; i<23;i++){
                city +=' id="'+i+'">';
                for(var j = 0; j<json.citylist[i].length; j++){
                    city+='<a style="font-size: 10px; margin-left: 10px;color: #000;">'+json.citylist[i][j].name+'</a>'
                }
                city+='</div><div role="tabpanel" class="tab-pane"';
            }
            // console.log(city);
            $('#cheng').html(city);
        }
    });
    $.ajax({
        url:"http://localhost:3000/aassdd",
        dataType:'jsonp',
        method:'get',
        success:function(data){
            var json = JSON.parse(data);
            var city = '<div role="tabpanel" class="tab-pane active"';
            // console.log(json.citylist[1]);
            for(var i = 1; i<23;i++){
                city +=' id="a'+i+'">';
                for(var j = 0; j<json.citylist[i].length; j++){
                    city+='<a style="font-size: 10px; margin-left: 10px;color: #000;">'+json.citylist[i][j].name+'</a>'
                }
                city+='</div><div role="tabpanel" class="tab-pane"';
            }
            console.log(city);
            $('#cheng2').html(city);
        }
    });
    $('#ss').on('click',function(){
        $('#mm3').show();
    });
    $('#bb').on('click',function(){
        $('#mm2').show();
    });
    $('#guan').on('click',function(){
        $('#mm3').css('display','none');
    });
    $('#guan2').on('click',function(){
        $('#mm2').css('display','none');
    });
    var map = new AMap.Map('map',{
        zoom: 10,
        resizeEnable: true,
        center: [116.39,39.9],//new AMap.LngLat(116.39,39.9)
    });
    AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
        function(){
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());

            map.addControl(new AMap.OverView({isOpen:true}));
        });
    map.setZoom(10);
    map.setCenter([116.39,39.9]);
    var marker = new AMap.Marker({
        position: [116.480983, 39.989628],//marker所在的位置
        map:map//创建时直接赋予map属性
    });
    //也可以在创建完成后通过setMap方法执行地图对象
    marker.setMap(map);
    marker.on('click',function(){
        AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {

            var infoWindow = new SimpleInfoWindow({
                infoTitle: '<strong>这里是标题</strong>',
                infoBody: '<p>这里是内容。</p>',
                // position:[116.480983, 39.989629],
                map:map
            });
            infoWindow.open(map, [116.480983, 40.009729]);
        });
    });


    $('#inputEmai3').on('blur',function(){
        // console.log(222);
        var a1 = $('#inputEmai3').val();
        if (!/\w{5,11}@(163|qq|sohu).(com|cn)/.test(a1)) {
            // console.log('邮箱错误');
            $('#yx').html('邮箱错误').css('color','red');
        }else{
            $('#yx').html('邮箱正确').css('color','#888888');
        }
    });
    $('#inputPassword33').on('blur',function(){
        // console.log(222);
        var a2 = $('#inputPassword33').val();
        if (!/\w{6,20}/.test(a2)) {
            // console.log('邮箱错误');
            $('#mima').html('密码错误').css('color','red');
        }else{
            $('#mima').html('密码正确').css('color','#888888');
        }
    });
    $('#inputEmai321').on('blur',function(){
        // console.log(222);
        var a2 = $('#inputEmai321').val();
        if (!/^(135|157|186)\d{9}/.test(a2)) {
            // console.log('邮箱错误');
            $('#sjh').html('手机号错误').css('color','red');
        }else{
            $('#sjh').html('手机号正确').css('color','#888888');
        }
    });
    $('#inputPassword110').on('blur',function(){
        // console.log(222);
        var a2 = $('#inputPassword110').val();
        if (!/\w{6,20}/.test(a2)) {
            // console.log('邮箱错误');
            $('#mm').html('密码错误').css('color','red');
        }else{
            $('#mm').html('密码正确').css('color','#888888');
        }
    });
    $(function(){
        function getdata(page_index,page_size){
            $.post('http://localhost:3000/getlist',
                {page_index:page_index,page_size:page_size},
                function(res){
                    console.log(res)
                    var str = '';
                    var lists = res.result;
                    console.log(lists.length);
                    for(var i = 0; i<lists.length;i++){
                        str+='<div class="row dp"><div class="col-md-1"><img class="d1_img" ' +
                            'src="'+lists[i].shop_ico+'"></div><div class="col-md-6"><ul class="d_font">' +
                            '<li><a class="green">'+lists[i].shop_name+'</a>店铺等级:<img src="img/z.png"><img src="img/z.png">' +
                            '</li><li><span>主营：'+lists[i].shop_desc+'</span></li><li><span>地址:'+lists[i].addr+'</span>' +
                            '</li></ul></div><div class="col-md-3"><ul class="d_font"><li><img src="img/qian.png"><span>先行赔付' +
                            '</span></li><li><img src="img/v.png"><span>同城帮认证</span></li><li><span>人气:'+lists[i].shop_visit
                            +'</span></li></ul></div><div class="col-md-2"><div class="bm_j"><span>进入店铺</span></div></div>' +
                            '</div>';
                    }
                    console.log(str);
                    $('#aaass').html(str);
                }
            )
        }
        $.get('http://localhost:3000/qqqq',function(res){
            var total = res.length;
            initPagination(total);
        })
        var initPagination = function(total){
            console.log("total:"+total);
            $("#Pagination").pagination(total*2,{
                num_edge_entries:1,
                num_display_entries:5,
                items_per_page:10,
                callback:pageselectCallback,
                prev_text:'上',
                next_text:'下'
            })
        };
        function pageselectCallback(page_index, jq){
            getdata(page_index,5);
            return false;
        }
    })
})(Zepto);
