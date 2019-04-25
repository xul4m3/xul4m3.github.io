console.log('程式執行')

// 檢查年紀
// var checkAge = function() {
//    console.log('被我按到～～')
//    var age = $('#InputAge').val()

//    if (age >= 18) {
//        $('#Output').val('已成年')
//    } else {
//        $('#Output').val('未成年')
//    }
// }

$('#Run').on('click', checkAge)

$('#Run').on('click', function() {
    var age = $('#InputAge').val()

    if (age >= 18) {
        $('#Output').val('已成年')
    } else {
        $('#Output').val('未成年')
    }
})