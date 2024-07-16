//Book a new Job
const newJob = document.getElementById("book-job-btn");
const addJobModal = document.getElementById("overlay");
const cancelButton = document.getElementById("cancel-btn");
const confirmed = document.getElementById("confirm-newjob");
const confirmation = document.getElementById("comfirmation-modal");
const doneBtn = document.getElementById("done-btn");
const myContent = document.getElementById("my-content");
const checkStatus = document.querySelectorAll(".check-status");

newJob?.addEventListener("click", function () {
  addJobModal.style.display = "block";
});

cancelButton?.addEventListener(
  "click",
  () => (addJobModal.style.display = "none")
);
confirmed?.addEventListener(
  "click",
  () => (
    (addJobModal.style.display = "none"), (confirmation.style.display = "block")
  )
);
doneBtn?.addEventListener("click", () => (confirmation.style.display = "none"));
// checkStatus
function redirect() {
  location.replace("http://127.0.0.1:5500/mechanic/job_invoice.html");
}

//CHECK-STATUS
document
  .querySelectorAll(".check-status")
  .forEach((e) => e.addEventListener("click", redirect));

//Hide the modal when click anywhere on the page
window.onclick = function (event) {
  if (event.target == addJobModal) {
    addJobModal.style.display = "none";
  }
};


//EDIT BUTTON
function redirectToEditMechanic() {
  location.replace("http://127.0.0.1:5500/admin/editMechanic.html");
}
document
  .querySelectorAll(".edit")
  .forEach((e) => e.addEventListener("click", redirectToEditMechanic));

// Nigeria
const nigeriaTimeZone = function () {
  document.getElementById("nigeria").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Africa/Abidjan",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
nigeriaTimeZone();
setInterval(nigeriaTimeZone, 1000);

const ghanaTimeZone = function () {
  document.getElementById("ghana").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Africa/Algiers",
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
      timeZone: "Africa/Windhoek",
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
      timeZone: "Africa/Addis_Ababa",
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
      timeZone: "Africa/Cairo",
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
      timeZone: "America/New_York",
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
      timeZone: "Atlantic/Cape_Verde",
      timeStyle: "short",
      hourCycle: "h24"
    }
  );
};
togoTimeZone();
setInterval(togoTimeZone, 1000);
