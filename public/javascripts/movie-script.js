$(function() {
    var percent = $("#rate-info").text();
    percent = parseFloat(percent.slice(0, 3))*10;

    $("#rate-bar").css("width", percent+"%");

    $("#more-info").click(function () { window.open("https://www.imdb.com/title/"+$(this).attr('name'), '_blank'); });
});