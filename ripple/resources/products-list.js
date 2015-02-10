module.exports = function(products) {
  once(this, 'product-item', products).attr('delay', 0)
}