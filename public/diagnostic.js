/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//

const Order = Ember.Object.extend({
  orderPrice: Ember.computed('price', 'quantity', function(){
    let price = price;
    let quantity = quantity;
    return price * quantity;
  })
});
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
const Cart = Order.extend({
  orders: [],
  addToCart: Ember.computed('order', function(){
    let orders = this.get('orders');
    orders.pushObject('order');
  }),
  totalPrice: Ember.computed.sum('orderPrice'),
});

// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)
let newCart = Cart.create ({
  orders: [
    Ember.Object.create({ order: 'Hat', quantity: 2, price: 5 }),
    Ember.Object.create({ order: 'Desk Lamp', quantity: 1, price: 20 }),
    Ember.Object.create({ order: 'Hand Towl', quantity: 3, price: 8 })
  ]
});
