
$(document).ready(function() {
    console.log("12333");
    if ($("p.notetext").text().length > 0) {


        //$("p.notetext").append("<a class='closeNonetext'></a>");
        $(".zatemnenie").show(300);

        $("div.message").appendTo($('body'));


        $(".closeNonetext").click(function () {

            $("p.notetext").hide();
            $(".zatemnenie").hide();

        });

        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $("p.notetext"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(); // скрываем его
                $(".zatemnenie").hide(300);
            }
        });



    }

});
