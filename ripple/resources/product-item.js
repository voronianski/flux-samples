module.exports = function(){
  var host = this.host
    , product = sel(host).datum()

  if (!product) return

  var self = once(this, 'div')
        .classed('uk-panel uk-panel-box uk-margin-bottom', true)

  once(self, 'img')
    .classed('uk-thumbnail uk-thumbnail-mini uk-align-left', true)
    .attr('src', product.image)

  once(self, 'h4')
    .classed('uk-h4', true)
    .html(product.title + ' - &euro;' + product.price)

  once(self, 'button')
    .classed('uk-button uk-button-small uk-button-primary', true)
    .attr('src', product.image)
    .attr('disabled', product.inventory ? null : 1)
    .on('click', addToCart)
    .text(product.inventory ? 'Add to cart' : 'Sold Out')

  function addToCart(d){
    product.inventory--
    ripple('cart').push(product)
  }
}