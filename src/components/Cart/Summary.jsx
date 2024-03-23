import './CartContainer.css'
const Summary = ({cartItems}) => {

    //total summary
    const totalAmount = cartItems.reduce((acc,item)=>{
        return(acc+ item.price*item.quantity)
    },0);

    //add 2% tax on the total amount
    const taxAmount = totalAmount*0.02;

    //total quantity in cart 
    const totalQuantity = cartItems.reduce((acc,item)=>{
        return acc+item.quantity
    },0);

    //over all price
    const totalAmountWithTax=totalAmount+taxAmount;
  return (
    <div className="cart-summary">
        <h3 className="summary-title">summary</h3>
        <div className="summary-total">
            <span>Subtotal*</span>${totalAmount.toFixed(2)}
        </div>

        <div className="summary-total-tax">
            <span className="">Tax Charges (2%)</span>${taxAmount.toFixed(2)}
        </div>

        <div className="summary-total-quantity">
            <span>Total Quantity*</span>{totalQuantity}
        </div>

        <div className="summary-total-amount">
            <span>Total Price</span>${totalAmountWithTax.toFixed(2)}
        </div>

        <button className="check-out-btn">Proceed To Checkout</button>
    </div>
  )
}

export default Summary