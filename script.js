const btn = document.querySelector(".meme-btn");
const img = document.querySelector(".meme-gen img");
const label = document.querySelector(".meme-label h1");
const memeAuthor = document.querySelector(".meme-author");

const updateMeme = (url, title, author) => {
    img.setAttribute('src', url);
    if(img.clientHeight==0) img.setAttribute("alt", "Error Loading Image");
    label.innerHTML=title;
    memeAuthor.innerHTML=author;
    btn.textContent="Next Meme";
}

const generateMeme = async () => {
    try {
        btn.textContent="Generating...";
        const res = await fetch("https://meme-api.com/gimme");

        const data = await res.json();
        
        updateMeme(data.url, data.title, data.author)
    } catch(e) {
        console.log(e);
        alert("Error fetching meme");
    }
}

btn.addEventListener('click', generateMeme);