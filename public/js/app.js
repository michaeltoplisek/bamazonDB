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
    <input type="text" class="form-control" id="purchaseQuantity" placeholder="Enter a number">
  </div>
          <button id="purchaseButton" type="button" class="btn btn-primary">Purchase</button>
        </div>
      </div>`);
        }
    })


    $('#purchaseButton').on('click', function (e) {
        e.preventDefault();

        
       
    })
})