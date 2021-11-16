$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .menu_conteiner').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

function check() {
    var side_1 = parseFloat(document.getElementById('side_1').value) || 0;
    var side_2 = parseFloat(document.getElementById('side_2').value) || 0;
    var side_3 = parseFloat(document.getElementById('side_3').value) || 0;
    if (((side_1 + side_2) <= side_3) ||
        ((side_1 + side_3) <= side_2) ||
        ((side_2 + side_3) <= side_1) || side_1 <= 0 || side_2 <= 0 || side_3 <= 0) {

        document.getElementById("result_image").src = "tr-4.jpg";
    } else {
        if (side_1 == side_2 || side_1 == side_3 || side_2 == side_3) {
            if (side_1 == side_2 && side_1 == side_3) {
                document.getElementById("result_image").src = "tr-3.jpg";
            } else {
                document.getElementById("result_image").src = "tr-2.jpg";
            }
        } else {
            document.getElementById("result_image").src = "tr-1.jpg";
        }
    }
}