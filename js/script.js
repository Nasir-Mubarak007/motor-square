// // login page DOM manipulation

// const loginPassword = document.getElementById("loginPassword");
// const togglePassword = document.getElementById("togglePassword");

// const newBike = document.getElementById("new");
// const modal = document.querySelector(".modal");
// const list = document.querySelectorAll(".li");
// const closeBTn = document.getElementsByClassName("closeBtn")[0];
// const delit = document.querySelectorAll("#delete");
// const addBike = document.getElementById("add-b");
// const warn = document.querySelector(".warning");
// const sucess = document.querySelector(".success.del-b");
// const addedB = document.querySelector(".success.add-b");
// const del = document.getElementById("pry");
// const cancel = document.getElementById("none");
// const ok = document.getElementById("ok");
// const ok2 = document.getElementById("ok2");
// const ok3 = document.getElementById("ok3");
// const option = document.querySelectorAll("#option");
// const optionz = document.querySelectorAll(".opt-m");
// const saveHours = document.querySelector("#save-time");
// const saveTime = document.querySelector(".success.t-save");
// saveHours?.addEventListener("click", saveTheTime);

// // togglePassword.addEventListener('click', passwordVisible)
// newBike?.addEventListener("click", openModal);

// window.addEventListener("click", outside);

// closeBTn?.addEventListener("click", closeModal);

// delit?.forEach((item) =>
//   item.addEventListener("click", () => (warn.style.display = "block"))
// );

// del?.addEventListener("click", () => {
//   warn.style.display = "none";
//   sucess.style.display = "block";
// });

// addBike?.addEventListener("click", () => {
//   modal.style.display = "none";
//   addedB.style.display = "block";
// });

// function saveTheTime() {
//   const visible = saveTime.getAttribute("data-visible");
//   saveTime.setAttribute("data-visible", true);
// }

// option.forEach((item) => {
//   item.addEventListener("click", openOption);
// });

// cancel?.addEventListener("click", () => {
//   warn.style.display = "none";
// });

// ok?.addEventListener("click", () => {
//   sucess.style.display = "none";
// });

// ok3?.addEventListener("click", () =>
//   saveTime.setAttribute("data-visible", false)
// );

// ok2?.addEventListener("click", () => {
//   addedB.style.display = "none";
// });

// list.forEach((item) => item.addEventListener("click", activeLink));

// function passwordVisible(e) {
//   // toggle the type attribute
//   const type =
//     loginPassword.getAttribute("type") === "password" ? "text" : "password";
//   loginPassword.setAttribute("type", type);
//   // toggle the eye slash icon
//   this.classList.toggle("fa-eye-slash");
// }


// function openOption(e) {
//   optionz.forEach((item) => {
//     item.style.display = "none";
//   });
//   optionz[e.target].display = "block";
// }

// function openModal() {
//   modal.style.display = "block";
// }

// function closeModal() {
//   modal.style.display = "none";
// }

// function outside(e) {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// }
const newBike = document.getElementById("new");
const modal = document.querySelector(".modal");
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
const option = document.querySelectorAll("#option");
const optionz = document.querySelectorAll(".opt-m");

// function activeLink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
saveHours?.addEventListener("click", saveTheTime);
//Book a new Job
const newJob = document.getElementById("book-job-btn");
const addJobModal = document.getElementById("add-job-modal");
const cancelBtn = document.getElementById("cancel-btn");
const confirmed = document.getElementById("confirm");
const confirmation = document.getElementById("comfirmation-modal");
const doneBtn = document.getElementById("done-btn");

// newJob?.addEventListener("click", function () {
//   addJobModal.style.display = "block";
// });

newJob.addEventListener("click", function () {
  addJobModal.style.display = "block";
});

cancelBtn.addEventListener("click", () => (addJobModal.style.display = "none"));
confirmed.addEventListener(
  "click",
  () => (
    (addJobModal.style.display = "none"), (confirmation.style.display = "block")
  )
);
doneBtn.addEventListener("click", () => (confirmation.style.display = "none"));

//  Time-Zones
//Nigeria
const nigeriaTimeZone = function () {
  document.getElementById("nigeria").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
nigeriaTimeZone();
setInterval(nigeriaTimeZone, 1000);

//Ghana
const ghanaTimeZone = function () {
  document.getElementById("ghana").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
ghanaTimeZone();
setInterval(ghanaTimeZone, 1000);
//Burkina-faso
const burkinafasoTimeZone = function () {
  document.getElementById("burkina-faso").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
burkinafasoTimeZone();
setInterval(burkinafasoTimeZone, 1000);
//Kenya
const kenyaTimeZone = function () {
  document.getElementById("kenya").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
kenyaTimeZone();
setInterval(kenyaTimeZone, 1000);
//Morroco
const morrocoTimeZone = function () {
  document.getElementById("morroco").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
morrocoTimeZone();
setInterval(morrocoTimeZone, 1000);
//Senegal
const senegalTimeZone = function () {
  document.getElementById("senegal").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
senegalTimeZone();
setInterval(senegalTimeZone, 1000);
//Benin
const beninTimeZone = function () {
  document.getElementById("benin").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
beninTimeZone();
setInterval(beninTimeZone, 1000);
//Togo
const togoTimeZone = function () {
  document.getElementById("togo").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
togoTimeZone();
setInterval(togoTimeZone, 1000);


newBike.addEventListener("click", openModal);

window.addEventListener("click", outside);

closeBTn?.addEventListener("click", closeModal);

delit?.forEach((item) =>
  item.addEventListener("click", () => (warn.style.display = "block"))
);

del?.addEventListener("click", () => {
  warn.style.display = "none";
  sucess.style.display = "block";
});

addBike?.addEventListener("click", () => {
  modal.style.display = "none";
  addedB.style.display = "block";
});

option.forEach((item) => {
  item.addEventListener("click", openOption);
});

cancel?.addEventListener("click", () => {
  warn.style.display = "none";
});

ok?.addEventListener("click", () => {
  sucess.style.display = "none";
});

ok2?.addEventListener("click", () => {
  addedB.style.display = "none";
});

list.forEach((item) => item.addEventListener("click", activeLink));

// function swipeContent(id) {
//   content1.style.display = "none";
//   content2.style.display = "none";
//   content3.style.display = "none";
//   scroll1.style.background = "#F2F2F2";
//   scroll2.style.background = "#F2F2F2";
//   scroll3.style.background = "#F2F2F2";


// ok?.addEventListener("click", () => {
//   sucess.style.display = "none";
// });

// ok3?.addEventListener('click',() => saveTime.setAttribute('data-visible',false))

function openOption(e) {
  optionz.forEach((item) => {
    item.style.display = "none";
  });
  optionz[e.target].display = "block";
}

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

