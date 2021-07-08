$( () => {
	

	var NotShowNoticeCookie = Getcookie("NotshowNoticeToday");
	if (NotShowNoticeCookie !== "")
	{
		$('#noticeModal').modal('hide');
	}
	else {
		$('#noticeModal').modal('show');
	}
	// 공지사항 팝업
	
	
	$("#NotShowToday").on("click", function(){
		var NotshowNoticeToday = "NotshowNoticeToday";
		SetCookie(NotshowNoticeToday, "NotShowNoticeToday", 1);
		$("#noticeModal").modal('hide');
	});
	
	function Getcookie(cookieName)
	{
		// cookie값 가져오기
		var cookieName = cookieName + "=";
    	var ca = document.cookie.split(';');
    	for (var i = 0; i < ca.length; i++) {
        	var c = ca[i];
        	while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    	return "";
	}

	function SetCookie(cookieName, value, exdays)
	{
		// cookie 값 생성
		var day = new Date();
		day.setTime(day.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = "expires=" + day.toUTCString();
		document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";

	}
});