/* Code credit for showing and hiding based on radio buttons:
https://www.tutorialrepublic.com/faq/show-hide-divs-based-on-radio-button-selection-in-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20show,value%20is%20set%20to%20none%20.
*/
$('input[type="radio"]').click(function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".course-group").not(targetBox).hide();
    $(targetBox).show();
});

$('.img-pair').click(function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".proj-content").not(targetBox).hide();
    $(targetBox).show();
});