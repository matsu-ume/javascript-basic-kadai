const dateName = new Date (2023, 8, 1);

const year = dateName.getFullYear();
const month = dateName.getMonth();
const day = dateName.getDay()+17;

console.log(year + '年' + month + '月' + day + '日');