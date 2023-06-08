const GET_USER_LIST_API = "https://dummyjson.com/users";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

document.body.appendChild(wrapper);

function getUsers() {
  fetch(GET_USER_LIST_API)
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);

      const { users } = data;

      users.forEach((user) => {
        card(user);
      });
    });
}

getUsers();

function card(user) {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = user.image;
  image.classList.add("image");

  div.classList.add("card");
  const firstName = document.createElement("h1");
  const age = document.createElement("h3");
  const email = document.createElement("h3");
  const phone = document.createElement("h3");
  const university = document.createElement("h3");
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "More";

  button.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user));
    window.open("details.html", "_self");
  });

  firstName.innerHTML = `${user.firstName}`;
  age.innerHTML = `Age:  ${user.age}`;
  email.innerHTML = `Email:  ${user.email}`;
  phone.innerHTML = `Phone number:  ${user.phone}`;
  university.innerHTML = `Uni: ${user.university}`;

  div.appendChild(image);
  div.appendChild(firstName);
  div.appendChild(age);
  div.appendChild(phone);
  div.appendChild(university);
  div.appendChild(email);
  div.appendChild(button);
  wrapper.appendChild(div);
}
