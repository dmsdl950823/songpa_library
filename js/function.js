$(document).ready(function(){
	
	/* 언어 */
    $('#lang').mouseenter(function(){
        $(this).children('#otherlang').slideDown()
		$(this).removeClass().addClass('lang on')
    })
	$('#otherlang').mouseleave(function(){
         $(this).slideUp()
		 $(this).parent('#lang').removeClass().addClass('lang')
    })
	/* 언어 e */
	
	
	/*gnb*/
	$('.gnbdpth').each(function(){
        var divgnb=$(this).find('div');
        
        $(this).mouseenter(function(){
//			console.log($(this).index())
			divgnb.show()
		})
            $(this).mouseleave(function(){
			divgnb.hide()
		})
	})	
	/*gnb e*/
    
    
    /*광고넘김*/
    setInterval(autoset,4000)
    function autoset(){
        $('.adWrap03 ul').animate({
            'left':'-385px'
        },1000,function(){
            $('.adWrap03 ul').append($('.adWrap03 ul li:first'));
            $('.adWrap03 ul').css('left','0')
        })
    }    
    /*광고넘김 e*/
    
    
	
	/*공지사항*/
	
	$('.noticeWrap > li > h3').each(function(){
		$(this).click(function(e){
            e.preventDefault();
			$('.noticeWrap > li > ul').removeClass().addClass('inside')
			$(this).next().addClass('inside noticeon')
            
            $('.noticeWrap > li > h3').removeClass('on')
            $(this).addClass('on')
            
		})
	})
	/*공지사항 e*/
	
	
	/*개관시간 행사달력*/
	$('.calul > li > h3').each(function(){			
		$(this).click(function(e){
            e.preventDefault();
			$('.calul > li > div').removeClass('calon')
			$(this).next().addClass('calon')
            
            $('.calul > li > h3').removeClass('on')
            $(this).addClass('on')
		})
	})
	/*개관시간 행사달력 e*/
	
	
	
	/*신착도서, 인기도서,추천도서*/
	$('.headline').each(function(){
		$(this).click(function(e){
            e.preventDefault();
			$('.headline').next().removeClass('pgshow')
			$(this).next().addClass('pgshow')
			
            $('.headline').removeClass('on')
            $(this).addClass('on')
		})
		
	})
	
	/*신착도서, 인기도서,추천도서e*/
	
        $('.txtbtn:eq(0) ul li a').each(function(){
        
            var liatag=$('.txtbtn:eq(0) ul li a')

            $(liatag).click(function(e){
                e.preventDefault();
                $(liatag).parent().removeClass().addClass('press')
                $(this).parent().removeClass().addClass('presson')

                $('.pgshow').find('.bkpage').css('top', (-220 * $(this).parent().index())+'px')
                  
                })
        })
	
	$('.txtbtn:eq(1) ul li a').each(function(){
        
            var liatag=$('.txtbtn:eq(1) ul li a')

            $(liatag).click(function(e){
                e.preventDefault();
                $(liatag).parent().removeClass().addClass('press')
                $(this).parent().removeClass().addClass('presson')

                $('.pgshow').find('.bkpage').css('top', (-220 * $(this).parent().index())+'px') 
                })
        })
    
    $('.txtbtn:eq(2) ul li a').each(function(){
        
            var liatag=$('.txtbtn:eq(2) ul li a')

            $(liatag).click(function(e){
                e.preventDefault();
                $(liatag).parent().removeClass().addClass('press')
                $(this).parent().removeClass().addClass('presson')

                $('.pgshow').find('.bkpage').css('top', (-220 * $(this).parent().index())+'px')
                })
        })
	
	
//    })
    /*신착도서 e*/
    
    
    
    
    
	/*행사안내/영화상영*/
    $('.perpage2 > h3').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            $('.evntpgbox').removeClass('eventon');
            $(this).next().addClass('eventon');
            
            $('.perpage2 > h3').removeClass('on')
            $(this).addClass('on')
        })
    })
    
    $('.evtbtn:eq(0) ul li a').each(function(){        
            var liatag=$('.evtbtn:eq(0) ul li a')

            $(liatag).click(function(e){
                e.preventDefault();
                $(liatag).parent().removeClass().addClass('press')
                $(this).parent().removeClass().addClass('presson')

                $('.eventon').find('.Eventpor').css('top', (-220 * $(this).parent().index())+'px')
                })
        })
    $('.evtbtn:eq(1) ul li a').each(function(){        
            var liatag=$('.evtbtn:eq(1) ul li a')

            $(liatag).click(function(e){
                e.preventDefault();
                $(liatag).parent().removeClass().addClass('press')
                $(this).parent().removeClass().addClass('presson')

                $('.eventon').find('.Eventpor').css('top', (-220 * $(this).parent().index())+'px')
                })
        })
    
    
	/*행사안내/영화상영 e*/
	
    
    
    
	/*배너움직임*/
	
   $('.lftbanner').click(function(e){
        e.preventDefault();
		if($('.otherban').is(':animated')==false){
			$('.otherban').prepend($('.otherban li:last'));
			$('.otherban').css('left','-130px')
			$('.otherban').animate({
				'left':'0px'
			},1000)
		}
    })
    $('.rghtbanner').click(function(e){
        e.preventDefault();
		if($('.otherban').is(':animated')==false){
			$('.otherban').animate({
				'left':'-'+(130)+'px'
			},1000,function(){
				$('.otherban').append($('.otherban li:first'));
				$('.otherban').css('left','0px')
			})
		}
    })
	
	/*배너움직임 e*/
	
	
    
    /*타기관 바로가기*/
    $('.otherinstA > a').click(function(e){
        e.preventDefault();
		$(this).parent().toggleClass('on')
        $(this).parent().next().fadeToggle('fast')
    })    
    /*타기관 바로가기 e*/
	
	
	
    
    
    
    
    
    /*----------sub1-----------*/
    
    $('.howmany').click(function(e){
        e.preventDefault();
        $('.howmany > a').toggleClass('tenclose')
        if($('.howmany > a').hasClass('tenclose')==true){ //가지고있으면 열린상태
                $('.howmany .off').show()
           }else {//없으면 닫힌상태
               $('.howmany .off').hide()
           }
    })
	
	
    /*----------sub2-----------*/
    
    $('.idtxt').focus(function(){
        if($(this).val()=='아이디'){
            $(this).val('');
        }
    })
    $('.pwnon').click(function(){
        $('.pwnon').css('display','none')
        $('.pwtxt').val('');
    })
    $('.pwtxt').focus(function(){
        $('.pwnon').css('display','none')
    })
    
    
    $('.loginbtn').click(function(e){
        if($('.idtxt').val()==''||$('.idtxt').val()=='아이디'){
            alert('아이디를 입력하여 주세요');
            $('.idtxt').focus()
            $('.idtxt').val('')
            return false;
        }
        if($('.pwtxt').val()==''||('.pwnon').css('display','block')){
            alert('비밀번호를 입력하여 주세요');
            $('.pwnon').css('display','none')
            $('.pwtxt').focus()
            return false;
        }
    })
    
})