// Elements
const eleListIncomes = document.querySelector("#list-incomes"),
      eleListExpenses = document.querySelector("#list-expenses"),
      budgetIncome = document.querySelector(".budget__income--value"),
      budgetExpenses = document.querySelector(".budget__expenses--value"),
      budgetValue = document.querySelector(".budget__value");
      budgetPercent = document.querySelector(".budget__expenses--percentage");
      addType = document.querySelector(".add__type");
      addDescription = document.querySelector(".add__description");
      addValue = document.querySelector(".add__value");
      addBtn = document.querySelector(".add__btn");
// Data
let listDefault = [
  {
    id: createUUID(),
    description: "Chi tieu ngay 26/07",
    amount: -100000,
  },
  {
    id: createUUID(),
    description: "Thu nhap thang 06",
    amount: 3000000,
  },
  {
    id: createUUID(),
    description: "Thu nhap thang 07",
    amount: 2000000,
  },
  {
    id: createUUID(),
    description: "Chi tieu ngay 27/07",
    amount: -150000,
  },
];

let listData = JSON.parse(localStorage.getItem("dataStorage")) || listDefault;

renderBudgetList();

// render component
function renderBudgetList() {
  const listIncomes = listData.filter((dataItem) => dataItem.amount > 0);
  const listExpenses = listData.filter((dataItem) => dataItem.amount < 0);
  const totalAmountIncome = calTotalAmount(listIncomes);
  const totalAmountExpense = calTotalAmount(listExpenses);
  const totalAmount = calTotalAmount(listData);

  eleListIncomes.innerHTML = listIncomes
    .map((item) => renderBudgetItem(item, totalAmount))
    .join("");
  eleListExpenses.innerHTML = listExpenses
    .map((item) => renderBudgetItem(item, totalAmount))
    .join("");

  budgetIncome.innerText = formatStringAmount(totalAmountIncome);
  budgetExpenses.innerText = formatStringAmount(totalAmountExpense);
  budgetValue.innerText = formatStringAmount(totalAmount);
  budgetPercent.innerText = formatPercentAmount(
    totalAmountExpense * -1,
    totalAmount
  );
}

function renderBudgetItem(data, total) {
  const { id, amount, description } = data;
  const percent =
    amount < 0
      ? `<div class="item__percentage">${formatPercentAmount(
          amount,
          total
        )}</div>`
      : "";
  return `
  <div class="item clearfix">
    <div class="item__description">${description}</div>
    <div class="right clearfix">
      <div class="item__value">${formatStringAmount(amount)}</div>
      ${percent}
      <div class="item__delete">
        <button class="item__delete--btn"><i data-id="${id}" class="ion-ios-close-outline"></i></button>
      </div>
    </div>
  </div>
  `;
}

// Helpers
function createUUID() {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

function formatStringAmount(amount) {
  let sign = "+";
  let amountFormatted = amount;

  if (amount < 0) {
    sign = "-";
    amountFormatted = -1 * amount;
  }

  amountFormatted = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
  }).format(amountFormatted);

  return `${sign} ${amountFormatted}`;
}

function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}

function formatPercentAmount(amount, total) {
  if (!total) {
    return "0%";
  }

  let percent = Math.round((amount / total) * 100);

  if (percent < 0) {
    percent = percent * -1;
  }

  return percent + "%";
}

addType.addEventListener("change", (e) => {
  if (e.target.value === "exp") {
    addType.className += " red-focus";
    addDescription.className += " red-focus";
    addValue.className += " red-focus";
    addBtn.className += " red";
  }
});

addBtn.addEventListener("click", () => {
  let type = addType.value;
  let description = addDescription.value;
  let value = addValue.value;

  if (!description) {
    addDescription.focus();
    return alert("description is required");
  }

  if (!value) {
    addValue.focus();
    return alert("value is required");
  } else if (value < 0) {
    addValue.focus();
    return alert("value is a positive number");
  }

  listData.push({
    id: createUUID(),
    description: description,
    amount: type === "exp" ? value * -1 : value * 1,
  });

  setStorage(listData);
  resetForm();
  resetClassName();
  renderBudgetList();
});

function resetForm() {
  addType.value = "inc";
  addDescription.value = "";
  addValue.value = "";
}

function resetClassName() {
  addType.className = "add__type";
  addDescription.className = "add__description";
  addValue.className = "add__value";
  addBtn.className = "add__btn";
}

document.addEventListener("click", function (e) {
  let ele = e.target;
  if (ele.classList.contains("ion-ios-close-outline")) {
    if (confirm("delete confirmation!") === true) {
      let id = ele.dataset.id;
      listData = listData.filter((item) => item.id !== id);
      setStorage(listData);
      renderBudgetList();
    }
  }
});

function setStorage(item) {
  localStorage.setItem("dataStorage", JSON.stringify(item));
}