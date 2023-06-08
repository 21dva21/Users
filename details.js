const user = JSON.parse(localStorage.getItem("user"));
console.log("user: ", user);

const block1 = document.createElement("div");
block1.classList.add("block1");
document.body.appendChild(block1);

function userImg(user) {
  const ava = document.createElement("div");
  ava.classList.add("ava");
  const img = document.createElement("img");
  img.src = user.image;
  img.classList.add("img");
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Buy";

  ava.appendChild(img);
  ava.appendChild(button);

  block1.appendChild(ava);
}

userImg(user);

function mainInf(user) {
  const inf = document.createElement("div");
  inf.classList.add("av");
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

  block1.appendChild(inf);
}

mainInf(user);

function physicalInformation(user) {
  const pI = document.createElement("div");
  pI.classList.add("aa");
  const h1 = document.createElement("h1");
  const age = document.createElement("h3");
  const eyeColor = document.createElement("h3");
  const gender = document.createElement("h3");
  const hair = document.createElement("h3");
  const har = document.createElement("h3");
  const height = document.createElement("h3");
  const weight = document.createElement("h3");
  const bloodGroup = document.createElement("h3");

  h1.innerHTML = `Physical Information`;
  age.innerHTML = `Age:  ${user.age}`;
  eyeColor.innerHTML = `Eye color: ${user.eyeColor}`;
  gender.innerHTML = `Gender:  ${user.gender}`;
  hair.innerHTML = `Hair color:  ${user.hair.color}`;
  har.innerHTML = `Hair type: ${user.hair.type}`;
  height.innerHTML = `Height:  ${user.height}`;
  weight.innerHTML = `Weight: ${user.weight}`;
  bloodGroup.innerHTML = `Blood Group: ${user.bloodGroup}`;

  pI.appendChild(h1);
  pI.appendChild(age);
  pI.appendChild(eyeColor);
  pI.appendChild(gender);
  pI.appendChild(hair);
  pI.appendChild(har);
  pI.appendChild(height);
  pI.appendChild(weight);
  pI.appendChild(bloodGroup);

  block1.appendChild(pI);
}

physicalInformation(user);

function legalInformation(user) {
  const lI = document.createElement("div");
  lI.classList.add("av");

  const h1 = document.createElement("h1");
  const address = document.createElement("h3");
  const birthday = document.createElement("h3");
  const city = document.createElement("h3");
  const state = document.createElement("h3");
  const post = document.createElement("h3");

  h1.innerHTML = `Legal Information`;
  birthday.innerHTML = `BirthDate:  ${user.birthDate}`;
  address.innerHTML = `Address:  ${user.address.address}`;
  city.innerHTML = `City:  ${user.address.city}`;
  state.innerHTML = `State: ${user.address.state}`;
  post.innerHTML = `PostalCode: ${user.address.postalCode}`;

  lI.appendChild(h1);
  lI.appendChild(birthday);
  lI.appendChild(address);
  lI.appendChild(city);
  lI.appendChild(state);
  lI.appendChild(post);

  block1.appendChild(lI);
}

legalInformation(user);
