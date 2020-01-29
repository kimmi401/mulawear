$(function(){
    
    //배너 슬라이드
   
   var nowIdx=0;
    
    setInterval(function(){
       
        
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        $('#topbanner>ul').stop().animate({top: -50*nowIdx })
    },3000);
    
    //메뉴


    var nowidx=0;
    
    setInterval(function(){
       $('#main_banner>ul>li').eq(nowidx).stop().fadeOut();
        
        if(nowidx<2){
            nowidx++;
        }else{
            nowidx=0;
        }
        
    $('#main_banner>ul>li').eq(nowidx).stop().fadeIn();
    },3000);
    
    $('.gnb>ul>li').on('mouseover',function(){
       $(this).find('.sub').stop().slideDown(300);
        $('.sub_bg').stop().slideDown(300);
    });
    $('.gnb>ul>li').on('mouseout',function(){
       $(this).find('.sub').stop().slideUp(300);
        $('.sub_bg').stop().slideUp(300);
    });
    

});



