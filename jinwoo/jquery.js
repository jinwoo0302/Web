window.onload=pageload;

function pageload(){
	setCTime();
}


function setCTime(){
	var now=new Date();
	var s=now.getHours() +':'+now.getMinutes() +':'+now.getSeconds();
	var month=now.getMonth();
	var date=now.getDate();
	var m;
	switch(month){
		case 0:
		m="January"
		break;
		case 1:
		m="February"
		break;
		case 2:
		m="March"
		break;
		case 3:
		m="April"
		break;
		case 4:
		m="May"
		break;
		case 5:
		m="June"
		break;
		case 6:
		m="July"
		break;
		case 7:
		m="August"
		break;
		case 8:
		m="September"
		break;
		case 9:
		m="October"
		break;
		case 10:
		m="November"
		break;
		case 11:
		m="December"
		break;

	}


	document.getElementById('ctime').innerHTML=m+" "+date+". "+s;

	setTimeout(setCTime,1000);
}



var i=0;
$(document).ready(function() {	
	$("div.out").
	mouseover(function() {
		$("p:first",this).text("mouse over"); /*$div.out p:first도 가능*/
		$("p:last", this).text(++i);
	})
	.mouseout(function() {
		$("p:first", this).text("mouse out");
	})


	$("#b1").on("click",
		{url:"http://www.google.com",
		winattributes: "resize=1, scrollbars=1, status=1"},
		max_open);

	function max_open(event){
		var maxwindow=window.open(event.data.url,"",event.data.winattributes);
		maxwindow.moveTo(0,0);
		maxwindow.resizeTo(screen.availWidth, screen.availHeight);
	}



	function flash(){
		$("#off_test").show().fadeOut("slow");
	}
	
	$("#bind").click(function() {
		$("body")
		.on("click","#theone",flash)
		.find("#theone")
		.text("Can Click!");
	});

	$("#unbind").click(function() {
		$("body")
		.off("click","#theone",flash)
		.find("#theone")
		.text("Does nothing...");
	});


	$("#trigger_test button:first").click(function(){
		update($("#trigger_test span:first"));
	});
	$("#trigger_test button:last").click(function(){
		$("#trigger_test button:first").trigger("click");
		update($("#trigger_test span:last"));
	});

	function update(j){
		var n=parseInt(j.text(),10);
		j.text(n+1);
	}

	$("#imageArea").click(function(){
		if($("#imageArea img").attr("src")=="alps.jpg")
			$("#imageArea img").attr("src","london.jpeg");
		else
			$("#imageArea img").attr("src","alps.jpg");
		
	})

	var imgArray=["alps.jpg","japan.jpg","london.jpeg","newyork.jpg","spain.jpg"];
	var albumIndex=0;
	$("#imgAlbum").attr("src", imgArray[albumIndex]);
	$("#imgAlbum").click(function(){
		albumIndex=(albumIndex+1)%imgArray.length;
		$("#imgAlbum").attr("src",imgArray[albumIndex]);	
	});








	//실습 7번
	$(".main-menu").hover(function(){  //hover의 경우 over , out 조건 두개 주기
		$(this).css({"font-size":"20px", "background-color":"green"})}
	, function(){
		$(this).css({"font-size":"16px", "background":"none"})});

	




	//실습8번
	
	$("#add_img img").on("click", show_note_form);
	$("#add_note").on("click", push_note);
	$(window).resize(function(){  //화면을 늘이거나 줄여도 여전히 중앙정렬
		change_position($(".popup"));
	});
	
	//실습9번
	$("#moving_button").on("click", movebox);

	

	//실습10번-show_note_form에 effect 추가


});

	function show_note_form(){
		$("#note_form").slideDown();
		$("#note_form").addClass("popup");
		change_position($(".popup"));


	}

	function change_position(obj){
		var popupX = ($(window).width() - obj.width())/ 2;
		var popupY = ($(window).height() - obj.height())/ 2;
		obj.css({top: popupY, left:popupX});		
	}

	function push_note(){
		var title=$("#note_title").val();
		var date=$("#note_date").val();
		var content=$("#note_content").val();
		var str="<p>"+title+"<br>"+date+"<br>"+content+"</p><br>";
		$("#note_form").slideUp();
		$("#note").append(str);
	}

	function movebox(){
		var body_width=$("#animation_test").width();
		var box_width=$("#moving_box").width();
		console.log(body_width);
		console.log(box_width);

		if(box_width < body_width-50){
			$("#animation_test").animate({
				height:'+=50px'
			});

			$("#moving_box").animate({
				right: '0px',
				height:'+=50px',
				width:'+=50px'
			});
		}
	}