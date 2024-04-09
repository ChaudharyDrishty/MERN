console.log("...APP STARTED... ");
function callAPI()
{
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=16d193c80d0d4965bd5d7f03dffcd556")
.then((res)=>{
// console.log(res);
return res.json();})
.then((data)=>{
    renderUI(data);
})
}


function renderUI(data)
{
    //got the articles from data
    const articles=data.articles;
    // console.log(data);
    // const root=document.getElementById("root");
//single article from the articles array
for(let i=0;i<articles.length;i++)
{
    const ar=articles[i];

    // console.log(ar);
    //created parent div
    const div=document.createElement("div");
    div.setAttribute("class","news-card");
    const h3=document.createElement("h3");
    h3.innerText=ar.title;
    const p=document.createElement("p");
    p.innerText=ar.description;
    
    const img=document.createElement("img")
    img.src=ar.urlToImage;
    const a=document.createElement("a");
    a.innerText="Read More..."
    a.target="blank";
    a.href=ar.url;
    a.textContent="To be continued";
    div.appendChild(h3);
    div.appendChild(img);
    root.appendChild(div)
    div.appendChild(p);
    div.appendChild(a);
}
// renderUI();
}
callAPI();