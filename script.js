function generateBill() {
  const appleQty = parseInt(document.getElementById('apple').value) || 0;
  const breadQty = parseInt(document.getElementById('bread').value) || 0;
  const milkQty = parseInt(document.getElementById('milk').value) || 0;
  const coffeeQty = parseInt(document.getElementById('coffee').value) || 0;

  const appleTotal = appleQty * 5;
  const breadTotal = breadQty * 7;
  const milkTotal = milkQty * 12;
  const coffeeTotal = coffeeQty * 10;

  const total = appleTotal + breadTotal + milkTotal + coffeeTotal;
  const discount = total * 0.1;
  const finalTotal = total - discount;

  const output = `
    <h3># Your Bill is #</h3>
    <table>
      <tr><th>Item</th><th>Qty</th><th>Price ($)</th></tr>
      <tr><td>Apple</td><td>${appleQty}</td><td>${appleTotal}</td></tr>
      <tr><td>Bread</td><td>${breadQty}</td><td>${breadTotal}</td></tr>
      <tr><td>Milk</td><td>${milkQty}</td><td>${milkTotal}</td></tr>
      <tr><td>Coffee</td><td>${coffeeQty}</td><td>${coffeeTotal}</td></tr>
    </table>
    <p><strong>Total: $${total}</strong></p>
    <p>🎉 Congratulations! You get a 10% Discount</p>
    <p><strong>Final Total: $${finalTotal.toFixed(2)}</strong></p>
    <p>Welcome back, sir!</p>
  `;

  document.getElementById('billOutput').innerHTML = output;
}
