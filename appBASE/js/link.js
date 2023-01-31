$(document).ready(function(){

    $("#YTvideoLINK").click(function(){
        $("#YTvideo").css("display", "block");
        $("#YTmusic").css("display", "none");
        $("#YTstudio").css("display", "none");
    });

    $("#YTmusicLINK").click(function(){
        $("#YTvideo").css("display", "none");
        $("#YTmusic").css("display", "block");
        $("#YTstudio").css("display", "none");
      });

      $("#YTstudioLINK").click(function(){
        $("#YTvideo").css("display", "none");
        $("#YTmusic").css("display", "none");
        $("#YTstudio").css("display", "block");
      });

  });