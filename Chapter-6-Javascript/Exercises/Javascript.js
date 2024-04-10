function Cost() {
    var km = parseFloat(document.getElementById('km').value);
    var gas = parseFloat(document.getElementById('gas').value);

    // Calculate the total cost of petrol
    var cost = (km * gas).toFixed(2);

    // Display the result
    document.getElementById('cost').innerHTML = 'Total cost of petrol:' + cost; + 'aed'
}