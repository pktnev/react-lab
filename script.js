const elements = {
  inputElement: document.getElementById("inputNumber"),
  button100: document.getElementById("button100"),
  button500: document.getElementById("button500"),
  button1000: document.getElementById("button1000"),
  buttonMono: document.getElementById("button-mono"),
  buttonGpay: document.getElementById("button-gpay"),
  btnAnotherBank: document.getElementById("another-bank"),
  resultMoney: document.getElementById("accumulated-money"),
  dollarIcon: document.getElementById("dollar"),
  nameDonater: document.getElementById("name-donater"),
  comments: document.getElementById("comments"),
  numberCard: document.getElementById("number-card"),
  mounth: document.getElementById("mounth"),
  day: document.getElementById("day"),
  cvv2: document.getElementById("cvv2"),
  jarGlass: document.querySelector(".jar__glass")
};

elements.jarGlass.src = "https://send.monobank.ua/img/jar/0.png";

elements.button100.addEventListener("click", function () {
  addMoney(100);
});

elements.button500.addEventListener("click", function () {
  addMoney(500);
});

elements.button1000.addEventListener("click", function () {
  addMoney(1000);
});

elements.buttonMono.addEventListener("click", function () {
  handleDonation("Mono");
});

elements.buttonGpay.addEventListener("click", function () {
  handleDonation("Gpay");
});

elements.btnAnotherBank.addEventListener("click", function () {
  handleDonation("OtherBank");
});

function addMoney(value) {
  var number = parseInt(elements.inputElement.value);
  var newNumb = number + value;
  elements.inputElement.value = newNumb;
  changeColor();
}

function handleDonation(method) {
  var donationAmount = parseInt(elements.inputElement.value);
  var currentAmount = parseInt(
    elements.resultMoney.textContent.replace(" ₴", "")
  );
  var newTotalAmount = currentAmount + donationAmount;
  elements.resultMoney.textContent = newTotalAmount + " ₴";

  var goalAmount = 25000;
  var halfGoalAmount = goalAmount / 2;
  if (newTotalAmount > 0 && newTotalAmount < halfGoalAmount) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_33.png";
  } else if (newTotalAmount >= halfGoalAmount && newTotalAmount < goalAmount) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_50.png";
  } else if (newTotalAmount >= goalAmount) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_100.png";
  }

  console.log(
    `Користувач: ${elements.nameDonater.value};\nКоментар: ${elements.comments.value};\nСума донату: ${donationAmount} грн.`
  );
}

function displayMoney() {
  var nowMoney = parseInt(elements.inputElement.value);
  var futureMoney = parseInt(elements.resultMoney.textContent);
  if (isNaN(futureMoney)) {
    futureMoney = 0;
  }
  var res =
    nowMoney > 10 && nowMoney < 29999 ? nowMoney + futureMoney : futureMoney;
  elements.resultMoney.textContent = res + " ₴";
}

function changeJarPhoto() {
  var currentAmount = parseInt(
    elements.resultMoney.textContent.replace(" ₴", "")
  );
  var goalAmount = 25000;

  if (currentAmount >= goalAmount) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_100.png";
  } else if (currentAmount >= goalAmount / 2) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_50.png";
  } else if (currentAmount > 0 && currentAmount < goalAmount / 2) {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_33.png";
  } else {
    elements.jarGlass.src = "https://send.monobank.ua/img/jar/uah_0.png";
  }
}

document.getElementById("toggleButton").addEventListener("click", function () {
  var element = document.getElementById("hiddenElement");
  var elementTwo = document.getElementById("toggleButton");
  var elementThree = document.getElementById("hideHr");
  if (element.style.display === "none") {
    element.style.display = "block";
    elementTwo.style.display = "none";
    elementThree.style.display = "none";
  } else {
    element.style.display = "none";
  }
});

function changeColor() {
  var errorValue = document.getElementById("error-value");
  var btnDonate = document.getElementById("btn-donate");
  var value = parseInt(elements.inputElement.value);

  if (value < 10 || value > 29999) {
    elements.inputElement.style.color = "#d984a9";
    elements.dollarIcon.style.color = "#d984a9";
    errorValue.style.display = "flex";
    btnDonate.style.marginTop = "10px";
  } else {
    elements.inputElement.style.color = "black";
    elements.dollarIcon.style.color = "black";
    errorValue.style.display = "none";
    btnDonate.style.marginTop = "25px";
  }
}

function redirectToLottery() {
  window.location.href = "https://send.monobank.ua/owner.html?sendId=dzBdJ3737"; 
}

function redirectToWidget() {
  window.location.href = "https://send.monobank.ua/widget/builder.html?longJarId=NZc6STYSe5P47sw3dfvVoRYbfSnV82&sendId=dzBdJ3737"; 
}
