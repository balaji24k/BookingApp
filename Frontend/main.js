window.addEventListener("DOMContentLoaded", () => {
	axios.get("http://localhost:5000/users")
		.then(res => {
      // console.log(res.data, "after refresh");
      res.data.forEach(data => {
        showOnScreen(data)
      });
    })
})

const submitHandler = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const mobile = event.target.mobile.value;

  const data = { name, email, mobile };
  axios.post("http://localhost:5000/users", data)
  	.then(res => {
		console.log(res.data,"after post");
    showOnScreen(res.data);
	});
};

const showOnScreen = (data) => {
  const parent = document.getElementById("list");
  // console.log(data,"showOnScreen")
  const child = 
    `<li id=${data.id}>
      ${data.name} - ${data.email} - ${data.mobile}
      <button onclick=editHandler('${data.id}','${data.email}','${data.name}','${data.mobile}')>Edit</button> 
      <button onclick=deleteHandler('${data.id}')>
        Delete
      </button>
    </li>`
  parent.innerHTML = parent.innerHTML+child;
};

const editHandler = (id,email,name,mobile) => {
  // console.log(email,name,mobile, "edit")
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("mobile").value = mobile;
  deleteHandler(id);
}

const deleteHandler = (id) => {
  removeFromScreen(id);
  // console.log(email,"delete");
  axios.delete(`http://localhost:5000/users/${id}`)
    .then(res => {
      console.log(res.data,"delete req")
    })
};

const removeFromScreen = (id) => {
  const parent = document.getElementById("list");
  const child = document.getElementById(id);
  parent.removeChild(child);
}
