$(function(){
	
//导航条部分
			var seeW = $('body').width();
			$('.erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
				
		$(window).resize(function(){
//			获得body的可见宽度
			var seeW = $('body').width();
			$('.erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
		})
				
//			鼠标移入事件	
		$('.navzitibox li').mouseenter(function(){
//			alert()
			$(this).find('.erji').show().stop().animate({'height':'250px'},200);
			$(this).siblings('li').find('.erji').css({'height':'250px'}).hide();
		})
			
//			鼠标移除事件
		$('.navzitibox').mouseleave(function(){
//			alert()
			$(this).find('.erji').stop().animate({'height':'0px'},200);
		})
//导航条部分结束
	
	
	
	
//轮播图部分		
//			设置大总管变量
			var num = 0;
			var times;
//			公共函数
		function public(){
//				找到id为box里的所有img标签让nun号元素淡入,让img的兄弟元素淡出
			$('.LBTbox img').eq(num).stop().fadeIn(100).siblings('img').stop().fadeOut(100);
//				找到ul里面的所有li让num号li添加class名为active,让他所有的兄弟元素移除class active
			$('.xd li').eq(num).addClass('active').siblings('li').removeClass('active');
		}
	
//			定时器函数
		function run(){
//			让大总管变量自增
				num++;
//				界限判断
				if(num==6){
					num=0;
						}
//				调用函数
				public();	
		}
		
//			设置定时器
			var timer = setInterval(run,3000)
//			给box添加移入事件
		$('.LBTbox').mouseenter(function(){
//				清理定时器
				clearInterval(timer)
		})
//		
//			给box添加移出事件
		$('.LBTbox').mouseleave(function(){
//				恢复定时器
				 timer = setInterval(run,3000)
		})		
//			给左右添加点击事件
		$('#left').click(function(){
				num--;
				if(num==-1){
					num=5
				}
//				调用函数
					public();
			})
		
		$('#right').click(function(){
				num++;
				if(num==6){
					num=0
				}
//			调用函数
			public();
		})	
	
//			给li标签添加点击事件
		$('.xd li').click(function(){
//			获得li标签的序号
				num=$(this).index();
			times = setTimeout(function(){
//			调用函数
				public()
				},100)
		})
//		小圆点移入移除事件	
		$('.xd li').hover(function(){
			$(this).css({'background':'#fff'})
			},function(){
			$(this).css({'background':'rgba(0,0,0,0.3)'})

		})
//轮播图部分结束		
		
		

//小米明星单品图部分
//			定义大总管变量
			var k=0;
//			设置定时器
			var times=setInterval(r,3000);
		function r(){
//			大宗管变量自增
				k++;
				if(k==2){
				k=0;
			}
			$('.y').stop().animate({'left':-1336*k+'px'});
					if(k==1){
						$('.arrow').eq(k).addClass('active').siblings().removeClass('active');
					}else if(k==0){
						$('.arrow').eq(k).addClass('active').siblings().removeClass('active');
					}
		}

		$('.arrow').hover(function(){
//					清理定时器
					clearInterval(times);
				},function(){
//					恢复定时器
					times = setInterval(r,3000);	
		})
//左箭头点击事件
		$('.leftJ').click(function(){
			k--;
			if(k<=0){
			k=0;
			}
			$(this).removeClass('active').siblings().addClass('active');
			$('.y').stop().animate({'left':-1336*k+'px'});
		})

//右箭头点击事件
		$('.rightJ').click(function(){
			k++;
			if(k>=1){
			k=1;
			}
			$(this).removeClass('active').siblings().addClass('active');
			$('.y').stop().animate({'left':-1336*k+'px'});
		})
		
//小米明星单品部分结束



//家电智能部分tab切换部分
		$('.ji li').mouseenter(function(){
			$(this).addClass('i').siblings('li').removeClass('i');
			$(this).parents('#JB').find('.zutubox').eq($(this).index()).show().siblings('.zutubox').hide();
	
		})
		
//			移入li时让下拉框显示
		$('.zutubox li').hover(function(){
//			alert()
			$(this).find('.pull_up').show().animate({'height':'100px'},200);
//			离开li时让下拉框影藏
		},function(){
//					alert()
			$(this).find('.pull_up').animate({'height':'0px'},200);
		})
//家电智能部分tab切换部分结束




//为你推荐图部分
			var r=0;
//			左箭头事件
		$('#top4 .j2').click(function(){
				r--;
				if(r<0){
				r=0;
			}
//				判断左箭头点击后的颜色
				if(r==0){
					$(this).removeClass('act');
					}else{
					$(this).addClass('act').siblings().addClass('act');
				}
					
			$('#tjbox .sjb').stop().animate({'left':-1336*r+'px'},100);
		})
//			右箭头事件	
		$('#top4 .j1').click(function(){
			r++;
			if(r>3){
			r=3;
			}
//				判断右箭头点击后的颜色
			if(r==3){
					$(this).removeClass('act');
				}else{
					$(this).addClass('act').siblings().addClass('act');	
			}

			$('#tjbox .sjb').stop().animate({'left':-1336*r+'px'},100);
		})

//为你推荐图部分结束



//内容部分四个轮播图
// 				定义大总管变
				var n=0;
//		给右箭头添加点击事件
		$('.nrj').click(function(){
			var len = $(this).siblings('.content_box').find('.content').length;	
				n++;
				if(n==len){
					n=len-1;
				}		
			$(this).siblings('.content_box').animate({'left':-316*n+'px'})
			$(this).siblings('.xiaodian').find('span').eq(n).addClass('act').siblings('span').removeClass('act');
						
		})
//		给左箭头添加点击事件
		$('.nlj').click(function(){
				n--;
				if(n==-1){
					n=0;
				}
			$(this).siblings('.content_box').animate({'left':-316*n+'px'})
			$(this).siblings('.xiaodian').find('span').eq(n).addClass('act').siblings('span').removeClass('act');
					
		})
//		当鼠标移入li盒子时左箭头背景颜色改变
		$('.lbt li').hover(function(){
			$(this).find('.nlj').show();
			$(this).find('.nrj').show();
			},function(){
			$(this).find('.nlj').hide();
			$(this).find('.nrj').hide();

		})
//		右箭头	

		$('.lbt .nrj').hover(function(){
			$(this).css({'background':'#757575'})
			},function(){
			$(this).css({'background':'#e0e0e0'})	
		})
//		左箭头

		$('.lbt .nlj').hover(function(){
			$(this).css({'background':'#757575'})
			},function(){
			$(this).css({'background':'#e0e0e0'})	
		})
//		小圆点部分
		$('.xiaodian span').click(function(){
//			获得当前序号
			var xuhao = $(this).index();	
//			让大总管变量等于xuhao
			n=xuhao;
			$(this).parent().siblings('.content_box').animate({'left':-296*n+'px'})
			$(this).addClass('act').siblings('span').removeClass('act');
					
		})
				
//			小点移入事件	
		$('li').mouseenter(function(){
//			获得当前li里面小点的数组长度
			var Slen = $(this).find('.xiaodian span').length;
			for(var a=0;a<Slen;a++){
//						判断
			if($(this).find('.xiaodian span').eq(a).hasClass('act')){
//							alert(a);
							n= a;
			}
			}			
		})
		
//		圆点移入移除事件
		$('.lbt li span').hover(function(){
			$(this).css({'background':'red'})
			},function(){
			$(this).css({'background':'rgba(0,0,0,0.3)'})
		})
		
//内容部分轮播图结束
})

	
				