let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (col of colArr) {
        let li = document.createElement("li"); // Create a new list item element
        li.textContent = col.name; // Set the text content to college name
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error -", e);
        return [];
    }
}


