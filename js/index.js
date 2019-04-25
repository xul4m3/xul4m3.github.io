console.log("程式執行")

$（ '#Run'）.on('click', () => {
    var n = $('Input').val()
    car isPrime = true
    for (i = 2; <= n - 1; i++) {
        if (n % i == 0)
            isPrime = false
        break
    }
    if (isPrime) {
        $('#Onput').val(n + "是質數")
    } else {
        $('#Onput').val(n + "不是質數")
    }
})