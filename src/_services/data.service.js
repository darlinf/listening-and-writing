let dataSave = {
  data: "",
  dataInput: {},
  completed: {},
  minute: "",
  second: "",
  writingCount: { date: "", count: 0 },
};
let keyLocalStorage = "testObject";

function setData(dataSave) {
  localStorage.setItem(keyLocalStorage, JSON.stringify(dataSave));
}

function getData() {
  let data = JSON.parse(localStorage.getItem(keyLocalStorage));
  if (data) {
    return data;
  } else {
    return dataSave;
  }
}

function deleteData() {
  localStorage.removeItem(keyLocalStorage);
}

export const dataService = {
  getData,
  setData,
  deleteData,
  dataSave,
};
