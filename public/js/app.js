$(function () {
    $.get('/api/products').then(function (products) {
        for (let i = 0; i < products.length; i++) {
            const id= `${products[i.id]}`
            $('#product').append(`<div class="card mb-3 mx-auto w-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Product: ${products[i].product_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Quantity: ${products[i].stock_quantity}</h6>
          <p class="card-text">Price: ${products[i].price}</p>
          <div class="form-group">
    <label for="formGroupExampleInput">How many</label>
    <input type="text" class="form-control purchaseQuantity" placeholder="Enter a number">
  </div>
          <button id="purchaseButton" type="button" class="btn btn-primary purchaseButton" data-name="${products[i].product_name}"
          data-price="${products[i].price}" data-quantity="${products[i].stock_quantity}" data-department="${products[i].department_name}">Purchase</button>
        </div>
      </div>`);
        }
    })

    $('#product').on('click', '.purchaseButton', function (e) {
        e.preventDefault();
        const quantity = $('.purchaseQuantity').val()
        const available = $(this).attr("data-quantity")
        const price = Number($(this).attr("data-price"))
        const cost = (price*quantity)
        console.log(available)
        console.log(quantity)
        if( quantity < available) {

            const update = {
                product_name: $(this).attr("data-name"),
                department_name: $(this).attr("data-department"),
                price: $(this).attr("data-price"),
                stock_quantity: (available-quantity)
            }
            $.ajax({
                url: `api/products/${$(this).attr("data-name")}`,
                method: 'PUT',
                data: update
            }).then(function(data) {

                $('#product').empty();
                $('#product').append(`<h1>Your total is ${cost}</h1>`);

            })

        } else {
           $('#product').empty();
           $('#product').text('Sorry, Insufficent quantity');
        }           
       
    })
})