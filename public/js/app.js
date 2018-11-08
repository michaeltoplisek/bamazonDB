$(
    $.get('/').then(function (products) {
        $('#products').append(products);
    })
)