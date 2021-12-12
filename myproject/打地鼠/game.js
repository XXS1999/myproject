var score = 0;
var mouses = $('img');

// 跳出一个地鼠，过一会儿隐藏
function show() {
    var a = Math.floor(Math.random() * 16);
    var mouse = mouses.get(a);

    $(mouse).addClass('mouseUp').removeClass('mouseDown');

    setTimeout(function() {
        $(mouse).addClass('mouseDown').removeClass('mouseUp');
    }, 2500);
}

// 跳出一批地鼠
function play() {
    show();
    show();
    show();
    show();
    show();
    show();
}

// 每隔一段时间跳出一批地鼠
setInterval(play, 2000);

// 打中地鼠
$('img').click(function () {
    $('#dazhong').attr('src', 'audio/dazhong.wav').get(0).play();
    $(this).addClass('mouseDown').removeClass('mouseUp');
    score += 10;
    $('#score').text('得分：' + score);
});

$('body').mousedown(function () {
    $('body').css('cursor', 'url(image/cursor-down.png), auto');
}).mouseup(function () {
    $('body').css('cursor', 'url(image/cursor.png), auto');
});