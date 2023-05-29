const searchIcon = document.querySelector(".btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-btn");

searchIcon.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// id
// const formFOrId = document.querySelector(".app_id");
// formFOrId.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formFOrId);
//   const formDataSerialized = Object.fromEntries(formData);
//   console.log(formDataSerialized, "formDataSerialized");
// });

var stocks = new Array();
stocks.push({
  Company: "Microsoft",
  Symbol: "MSFT",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "AMAZON",
  Symbol: "AMZN",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "TESLA",
  Symbol: "TSLA",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});

stocks.push({
  Company: "SALESFORCE",
  Symbol: "CRM",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});

stocks.push({
  Company: "GOOGLE",
  Symbol: "GOOGL",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "APPLE",
  Symbol: "AAPL",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "META",
  Symbol: "META",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "COCA-COLA",
  Symbol: "KO",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "PAYPAL",
  Symbol: "PYPL",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});
stocks.push({
  Company: "DANGOTE",
  Symbol: "DANGCEM",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});

stocks.push({
  Company: "BUA",
  Symbol: "BUACEM",
  Start: "01-01-2012",
  End: "12-17-2023",
  Close: "154.98",
  Prediction: "152.656",
});

function dump(item, index) {
  document.getElementById("tableData").innerHTML +=
    "<tr><td>" +
    item.Company +
    "</td><td>" +
    item.Symbol +
    "</td><td>" +
    item.Start +
    "</td><td>" +
    item.End +
    "</td><td>" +
    item.Close +
    "</td><td>" +
    item.Prediction +
    "</td></tr>";
}
stocks.forEach(dump);
