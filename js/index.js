const viewOutPut = document.getElementById("demo");
let x;
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = async function () {
    x = await JSON.parse(this.response);
    z = Object.keys(x.routes);
    console.log(z);
    await createRoutePath(z);
  };
  xhttp.open("GET", "https://exemat.com/wp-json/", true);
  xhttp.send();
}

async function createRoutePath(z) {
  await z.forEach((el) => {
    viewOutPut.innerHTML += `<p>${el}</p>`;
  });
}

loadDoc();
