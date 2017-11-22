
$(function(){
	
})

$(document).ready(function(){
	//selectors
	/*$('#one').click(function(){
		alert('hello world')
	});
	$('p').click(function(){
		alert(this)
	});
	$('.two').click(function(){
		alert('hello from li')
	});
*/

//filters

/*$('li:odd').css({
			backgroundColor: 'red',
			color: 'white'	
				})
$('li:even').css({'background-color': 'blue'})
$('li:last-child').css({'text-transform': 'uppercase'})
$('li:not(li:nth-child(2))').css({"text-decoration": "underline"})
$('li:not(li:eq(3))').css({"color": "blue"});
$('li[attribute="second"]').css({"color": "white"})
$('[class^="l"]').css({"border": "1px black solid"})
$('[class$="l"]').css({"border-radius": "10px"})
$('[class*="g"]').css({"border-bottom": "none"})*/


//attribute
/*var linkTo = $('a').eq(0).attr('href');
alert(linkTo);
$('a').eq(1).attr('href', 'http://img.com');
$('a').eq(2).removeAttr('href');
$('a').eq(3).attr({
	'id': 'one',
	'style': 'color:red; background-color: blue'
})
var linkToProp = $('a').eq(0).prop('id')
alert(linkToProp);
//prop like attr
*/




//classes

/*$('li').eq(0).addClass('one');
for(var i = 0; i < $('li').length; i++){
	if($('li').eq(i).hasClass('red')){
		$('li').eq(i).removeClass('red')
	}
}
var btn = $('#toggleButton');

	btn.click(function(){
		
			$('li').eq(0).toggleClass('one')
		
	})
*/


//Dom navigation

/*$('li').eq(0).next().addClass('red');
$('li').eq(1).prev().addClass('one');
$('ul').append('<li>newListItem</li>');
$('ul').prepend('<li>newListItem</li>');
var parent = $('li').eq(0).parent();
alert(parent);
console.log(parent);*/

//events
//KEYBOARD keydown, keyup, keypress
/*$('body').keydown(function(event){
	if(event.keyCode == 38){
		alert('up arrow')
	}
})*/

//MOUSE mousemove, mousein, mouseout, hover, click, dblclick
//FORM blur, focus, change, val, submit, reset
	/*$('li').eq(4).hover(function(){
		$(this).css({'background-color':'red'})
	},function(){
		$(this).css({'background-color':'yellow'})
	}) */
// $(window).resize()
	/*var h = $('.first').height();
	alert(h)
	var w = $('.first').width();
	alert(w);
	var offset = $('.second').offset().top;
	alert(offset)*/

	// $('a[href^="#"]').click(function(){
	// 	$('body,html').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top
	// 	}, 4000)
	// })
	// $(window).scroll(function(){
	// 	console.log($('body,html').scrollTop())
	// })

	/*$('.first').animate({
		width: '100px',
		height: '100px',
		opacity: '0.5'
	}, 1000, function(){
		$(this).animate({
			width: '500px',
			height: '500px'
		}, 1000, function(){

		})
	})*/

	/*$('#show').click(function(){
		$('#test').show(1000, function(){
			alert('smth happened')
		});
	})
	$('#hide').click(function(){
		$('#test').hide(1000, function(){
			alert('smth happened')
		});
	})

	$('#slideDown').click(function(){
		$('#test').slideDown(1000, function(){
			alert('smth happened')
		});
	})
	$('#slideUp').click(function(){
		$('#test').slideUp(1000, function(){
			alert('smth happened')
		});
	})
	$('#slideToggle').click(function(){
		$('#test').slideToggle(1000, function(){
			alert('smth happened')
		});
	})*/
	/*$('#click').click(function(){
		$('#inner').animate({
		top:'+=150px',
		left:'+=200px'
		})
	})
	*/
$('h2').click(function(){
	$('div').slideUp(1000).css({'background-color':'gray'}).css({'color':'white'}).css({'z-index':'10'}).css({'margin-left':'13px'});
	$('h2').removeClass('active').css({'font-size':'1.5em'});
	$(this).addClass('active');
	$(this).next().slideDown(1000);
	
})
// $('wrapper').click(function(){
// 	$('lineOne').css({'rotateZ'('-45deg')};
// 	$('lineTwo').fadeOut(500);
// 	$('lineThree').css({'rotateZ'('45deg')};
// }



})