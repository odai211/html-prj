function submitBid() {
    const car = document.getElementById('carSelect').value;
    const amount = document.getElementById('bidAmount').value;

    if (!car) {
        alert("Please select a car.");
        return;
    }

    if (!amount || amount <= 0) {
        alert("Please enter a valid bid amount.");
        return;
    }

    alert("Your bid of $" + amount + " for " + car + " has been submitted!");
}
