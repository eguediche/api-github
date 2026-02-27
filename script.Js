const Body = document.querySelector("body");
async function getUser() {
    const res = await fetch(`https://api.github.com/search/users?q=q`, {
        method: "GET",
    });

    const data = await res.json();
    console.log(data);
    /*alors ta vus que au lieu de ???.data.??? ou ???.data[i].??? ya ???.data.items[i].??? car sur l'api github ya items dedans... c comme ca fro :sob: */
    for(let i = 0; i < data.items.length; i++) {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = data.items[i].avatar_url;

        let url = document.createElement("a");
        url.href = data.items[i].html_url;
        let txt = document.createElement("p");
        txt.textContent = data.items[i].login;
            box.appendChild(img);
            box.appendChild(txt);
            box.appendChild(url);
            url.appendChild(txt);
            Body.appendChild(box);
    }

}

getUser();