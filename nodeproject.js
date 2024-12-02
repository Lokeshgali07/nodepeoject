const express = require('express');
const app = express();

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number < 0) {
        return res.status(400).send("Please provide a non-negative integer.");
    }

    const factorial = (n) => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    res.send(`The factorial of ${number} is ${factorial(number)}`);
});

app.listen(3020, () => {
    console.log("Server is running on port 3020");
});
