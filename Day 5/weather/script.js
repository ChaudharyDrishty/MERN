function fetchAPI()
{
    const url=("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services
    /timeline/delhi?key=TGZMDRBS9YHSX4BSPGZQ83JDP");
    fetch(url)
    .then((res)=>res.json())
    .then(renderUI);

}
fetchAPI()
const root=document.getElementById("root");


function renderUI(data)
{
    root.append(row);
    const childRow=document.createElement("tr")
    const c1=document.createElement("td");
    c1.innerText='07-04-24';
    childRow.appendChild(c1);
    const c2=document.createElement("td");
    c2.innerText='90 F';
    childRow.appendChild(c2);
    root.appendChild(childRow);
}
renderUI();

//    function renderUI(data)
//    {
// const childRow
//     const days=data.days;
//     console.log(days);
//     const row=document.createElement("tr");

//     let cell=document.createElement("th")
//     cell1.innerText="Date";
//     row.appendChild(cell1);

//     const cell2=document.createElement("th")
//     cell1.innerText="Maximum Temperature";
//     row.appendChild(cell2);

    // const cell3=document.createElement("th")
    // cell1.innerText="Minimum Temperature";
    // row.appendChild(cell3);

//     root.append(row);

//    }
//    renderUI();
