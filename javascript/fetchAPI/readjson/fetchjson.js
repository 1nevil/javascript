const fetchdata = async () => {
  try {
    const res = await fetch("data.json");
    console.log(res);
    if (!res.ok && !res.status == 400) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    s = "";
    data.forEach((element) => {
      s += "<li>" + element.id + "</li>";
      s += "<li>" + element.name + "</li>";
      s += "<li>" + element.dno + "</li>";
    });
    document.getElementById("data").innerHTML = s;
  } catch (error) {
    console.log(error);
  }
};
