var autocookie = function (big_cookie_interval, golden_cookie_interval) {

    var my_big_cookie = document.getElementById("bigCookie");
    var my_golden_cookie = document.getElementById("goldenCookie");

    var clicketty = new MouseEvent(
        'click',
        {
            'view': window,
            'bubbles': true,
            'cancelable': true });

    var big_interval_id = window.setInterval(
        function () {
            my_big_cookie.dispatchEvent(clicketty);
        },
        200);

    var gold_1 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_2 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_3 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_4 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_5 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_6 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_7 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500); var gold_8 = window.setInterval(function(){my_golden_cookie.dispatchEvent(clicketty);}, 500);

    var disable_autocookie = function () {
        window.clearInterval(big_interval_id);
        window.clearInterval(gold_1);
        window.clearInterval(gold_2);
        window.clearInterval(gold_3);
        window.clearInterval(gold_4);
        window.clearInterval(gold_5);
        window.clearInterval(gold_6);
        window.clearInterval(gold_7);
        window.clearInterval(gold_8);
    };
    return disable_autocookie;
}
