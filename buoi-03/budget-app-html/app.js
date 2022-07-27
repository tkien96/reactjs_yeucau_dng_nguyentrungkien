let listData = [
    {
      id: createUUID(),
      description: 'Chi tieu ngay 26/07',
      amount: -100000
    },
    {
      id: createUUID(),
      description: 'Thu nhap thang 06',
      amount: 3000000
    },
    {
      id: createUUID(),
      description: 'Thu nhap thang 07',
      amount: 2000000
    },
    {
      id: createUUID(),
      description: 'Chi tieu ngay 27/07',
      amount: -150000
    },
];

function createUUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
let totalIncomes = 0;
listData.map((item) => { item.amount > 0 && (totalIncomes += item.amount)});

listData.map((item) => {
    if(item.amount > 0){
        document.querySelector("#list-incomes").innerHTML += `<div class="item clearfix">
            <div class="item__description">${ item.description }</div>
            <div class="right clearfix">
            <div class="item__value">+ ${ item.amount }</div>
            <div class="item__delete">
                <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
                </button>
            </div>
            </div>
        </div>`;
    }else{
        document.querySelector("#list-expenses").innerHTML += `<div class="item clearfix">
        <div class="item__description">${ item.description }</div>
        <div class="right clearfix">
          <div class="item__value">- ${ item.amount * -1 }</div>
          <div class="item__percentage">${ Math.round(((item.amount * -1) / totalIncomes ) * 100) }%</div>
          <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div>
        </div>
      </div>`;
    }
});