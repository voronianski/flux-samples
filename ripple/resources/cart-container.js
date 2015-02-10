module.exports = function(cart){
  var self = once(this, 'div.cart.uk-panel.uk-panel-box.uk-panel-box-primary')
    once(self, 'div.uk-badge.uk-margin-bottom').text('Your Cart')
    once(self, 'div.uk-margin-small-bottom', [nodes(), total()]).html(String)
    once(self, 'button.uk-button.uk-button-large.uk-button-success.uk-align-right')
      .on('click', onCheckout)
      .attr('disabled', cart.length ? null : '')
      .text('Checkout')

  function nodes() {
    return cart.length
      ? cart.filter(unique('id')).map(format).join('')
      : '<div>Please add some products to cart.</div>'
  }

  function total() {
    return 'Total: &euro;' + cart.reduce(price, 0).toFixed(2)
  }

  function format(d){
    return '<div>'
         + d.title 
         + '- &euro;' 
         + d.price 
         + ' x '
         + cart.filter(by('id', d.id)).length
         + '</div>'
  }

  function price(p, v){
    return p + v.price
  }

  function onCheckout() {
    console.log('YOU BOUGHT:', cart.map(quantity))
    cart.splice(0)
  }

  function quantity(d){
    return (d.quantity = cart.filter(by('id', d.id)).length), d
  }
}