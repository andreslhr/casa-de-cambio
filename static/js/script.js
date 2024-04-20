let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//create dropdown from the currencies array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

//repeat other dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

//setting default value
fromDropDown.value = "USD";
toDropDown.value = "VES";

let convertCurrency = () => {
    //create references
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    //if amount field is not empty
    if (amount.length != 0) {
      fetch(api).then((resp) => resp.json()).then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

        // Calculate 15% of the converted amount
        const porcentage = convertedAmount * 0.05;

        // Add 15% to the converted amount
        const totalAmount = convertedAmount + porcentage;


        // Generate the result text including the 5%
        const resultText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency} + 5% = ${totalAmount.toFixed(2)} ${toCurrency}`;
        
        resultado.innerHTML = resultText;
     
      });
    } else {
        alert("Por favor complete la cantidad");
    }
};

document.querySelector("#convert_button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);



