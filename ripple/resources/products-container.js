module.exports = function(products){
  once(this, 'h2')
    .text('Flux Shup Demo (Ripple)')
    .classed('uk-h2', true)

  once(this, 'products-list').attr('data', 'products')
}