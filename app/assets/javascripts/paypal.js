paypal.Buttons({
  createOrder: function (data, actions) {
    console.log('-- createOrder --')
    console.log(data)
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.01'
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    console.log('-- onApprove --')
    console.log(data)
    return actions.order.capture().then(function (details) {
      console.log('-- details --')
      console.log(details)
      alert('Transaction completed by ' + details.payer.name.given_name);
      console.log(`order_id: ${data.orderID}`)
      console.log(`name: ${details.payer.name}`)
      console.log(`email: ${data.orderID}`)
      // ここでメール送信及、DBへのInsertを行う
      // Call your server to save the transaction
      // return fetch('/paypal-transaction-complete', {
      //   method: 'post',
      //   headers: {
      //     'content-type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     orderID: data.orderID
      //   })
      // });
    });
  }
}).render('#paypal-button-container');