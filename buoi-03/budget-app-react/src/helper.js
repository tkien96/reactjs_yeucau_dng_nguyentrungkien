export function formatStringAmount(amount) {
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

export function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}

export function formatPercentAmount(amount, total) {
  if (!total) {
    return "0%";
  }

  let percent = Math.round((amount / total) * 100);

  if (percent < 0) {
    percent = percent * -1;
  }

  return percent + "%";
}

export function setStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

export function getStorage(name){
  return JSON.parse(localStorage.getItem(name))
}

export function resetForm() {
  const addType = document.querySelector(".add__type"),
        addDescription = document.querySelector(".add__description"),
        addValue = document.querySelector(".add__value"),
        addBtn = document.querySelector(".add__btn")

  addType.value = "inc";
  addDescription.value = "";
  addValue.value = "";
  
  addType.className = "add__type";
  addDescription.className = "add__description";
  addValue.className = "add__value";
  addBtn.className = "add__btn";
}