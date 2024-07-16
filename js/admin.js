const newBike = document.getElementById("new");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal.jobModal");
const list = document.querySelectorAll(".li");
const closeBTn = document.getElementsByClassName("closeBtn")[0];
const delit = document.querySelectorAll("#delete");
const addBike = document.getElementById("add-b");
const warn = document.querySelector(".warning");
const sucess = document.querySelector(".success.del-b");
const addedB = document.querySelector(".success.add-b");
const del = document.getElementById("pry");
const cancel = document.getElementById("none");
const ok = document.getElementById("ok");
const ok2 = document.getElementById("ok2");
const apoint = document.querySelectorAll("#apoint");
const ok3 = document.getElementById("ok3");
const option = document.querySelectorAll("#option");
const optionz = document.querySelectorAll(".opt-m");
const saveHours = document.querySelector("#save-time");
const saveTime = document.querySelector(".success.t-save");

saveHours?.addEventListener("click", saveTheTime);

newBike?.addEventListener("click", openModal);

window.addEventListener("click", outside);

closeBTn?.addEventListener("click", closeModal);

delit?.forEach((item) =>
  item.addEventListener("click", () => warn.setAttribute("data-visible", true))
);
apoint?.forEach((item) =>
  item.addEventListener("click", () => (modal.style.display = "block"))
);

del?.addEventListener("click", () => {
  warn.setAttribute("data-visible", false);
  sucess.style.display = "block";
});

addBike?.addEventListener("click", () => {
  modal.style.display = "none";
  addedB.style.display = "block";
});

function saveTheTime() {
  const visible = saveTime.getAttribute("data-visible");
  saveTime.setAttribute("data-visible", true);
}

option.forEach((item) => {
  item.addEventListener("click", openOption);
});

cancel?.addEventListener("click", () => {
  warn.setAttribute("data-visible", false);
});

ok?.addEventListener("click", () => {
  sucess.style.display = "none";
});

ok3?.addEventListener("click", () =>
  saveTime.setAttribute("data-visible", false)
);

ok2?.addEventListener("click", () => {
  addedB.style.display = "none";
});

list.forEach((item) => item.addEventListener("click", activeLink));

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

//generate-invoice
const generateInvo = document.querySelector("#generate-invoice");
const whole = document.querySelector(".whole");
const clearInvo = document.getElementById("clear-invo");
generateInvo?.addEventListener("click", () => (whole.style.display = "block"));
clearInvo?.addEventListener("click", () => {
  whole.style.display = "none";
});

const saVedButton = document.querySelector(".saVed");
const saveInvoice = document.querySelector(".save-invoice");
const okButton = document.querySelector("#ok7");
saVedButton?.addEventListener("click", function () {
  saveInvoice.style.display = "block";
});
okButton?.addEventListener("click", function () {
  saveInvoice.style.display = "none";
});

// for notification
const dropListBtn = document.querySelector(".drop-list");
const notificationContainer = document.querySelector(".notification-container");
const closeNotificationBtn = document.querySelector(".close-notification");

dropListBtn?.addEventListener("click", function () {
  notificationContainer.style.display = "block";
});

closeNotificationBtn?.addEventListener("click", function () {
  notificationContainer.style.display = "none";
});

// /THREE DOT
let icons = document.getElementsByClassName("clk-btn");
let icons_arr = [...icons];
let dot = document.getElementsByClassName("dot-ul");
let dot_arr = [...dot];

icons_arr.forEach((element, index) =>
  element.addEventListener("click", () => {
    dot_arr.forEach((item, ind) => {
      if (index === ind) {
        item.style.display = "block";
      }
      if (index != ind) {
        item.style.display = "none";
      }
    });
  })
);


/* ACCESS THREE DOT */

// document.querySelector('table').onclick = ({
//   target
// }) => {
//   if (!target.classList.contains('more')) return
//   document.querySelectorAll('.dropout.active').forEach(
//     (d) => d !== target.parentElement && d.classList.remove('active')
//   )
//   target.parentElement.classList.toggle('active')
// }
