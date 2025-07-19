const countClients = document.querySelector(".counter_value_of_clients");
const countProject = document.querySelector(".counter_value_of_project");
const countWorkExperience = document.querySelector(
  ".counter_value_of_work_experience"
);
setInterval(() => {
  if (countClients.innerText < 200) {
    countClients.innerText++;
  }
}, 50);
setInterval(() => {
  if (countProject.innerText < 1000) {
    countProject.innerText++;
  }
}, 10);
setInterval(() => {
  if (countWorkExperience.innerText < 10) {
    countWorkExperience.innerText++;
  }
}, 1000);
