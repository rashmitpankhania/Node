function placeOrder(orderNumber) {
	// body...
	console.log('Customer number:', orderNumber);
	createdAndDelivered(function () {
		// body...
		console.log('Order Placed:', orderNumber);
	})

}

function createdAndDelivered(callback) {
	// body...
	setTimeout(callback, 3000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);