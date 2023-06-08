const user = JSON.parse(localStorage.getItem("user"));

// function createUser(user) {
//   const div = document.createElement("div");
//   div.classList.add("image");
//   const h1 = document.createElement("h1");
//   const img = document.createElement("img");
//   img.src = user.image;
//   div.appendChild(img);

//   h1.innerHTML = user.firstName;
//   div.appendChild(h1);

//   document.body.appendChild(div);
// }

// createUser(user);

function userImg(user) {
  const ava = document.createElement("div");
  ava.classList.add("ava");
  const img = document.createElement("img");
  img.src = user.image;
  ava.appendChild(img);

  document.body.appendChild(ava);
}

userImg(user);

function mainInf(user) {
  const inf = document.createElement("div");
  inf.classList.add("inf");
  const firstName = document.createElement("h1");
  const age = document.createElement("h3");
  const email = document.createElement("h3");
  const phone = document.createElement("h3");
  const university = document.createElement("h3");

  firstName.innerHTML = `${user.firstName}`;
  age.innerHTML = `Age:  ${user.age}`;
  email.innerHTML = `Email:  ${user.email}`;
  phone.innerHTML = `Phone number:  ${user.phone}`;
  university.innerHTML = `Uni: ${user.university}`;

  inf.appendChild(firstName);
  inf.appendChild(age);
  inf.appendChild(phone);
  inf.appendChild(university);
  inf.appendChild(email);

  document.body.appendChild(inf);
}

mainInf(user);

function physicalInformation(user) {
  const pI = document.createElement("div");
  pI.classList.add("pI");
  const h1 = document.createElement("h1");

  h1.innerHTML = `Physical Information`;

  pI.appendChild(h1);

  document.body.appendChild(pI);
}

physicalInformation(user);
