const Body = document.querySelector("body");
async function getUser() {
    const res = await fetch(`https://api.github.com/search/users?q=q`, {
        method: "GET",
    });

    const data = await res.json();
    console.log(data);
    for(let i = 0; i < data.items.length; i++) {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = data.items[i].avatar_url;

        let txt = document.createElement("p");
        txt.textContent = data.items[i].login;
            box.appendChild(img);
            box.appendChild(txt);
            Body.appendChild(box);
    }

}

getUser();