import { createSelector } from "reselect";

// //selectors:
// // 1. input selectors
// const selectCart = state => state.cart
// const selectUser = state => state.user

const selectCart = (state) => state.cart;

// // 2. output selector (uses input selectors and createSelector to built itself)
// export const selectCartItems = createSelector(
//     [selectCart, selectUser], //a collection of input selectors
//     (cart, user) => "whatever we output will be output of selector" //a fx that returns the value we want out of the selectors
// )

//because we used createSelector, it is now a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//selector for 'hidden' property in header
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//gives us back the total quantity in the cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
