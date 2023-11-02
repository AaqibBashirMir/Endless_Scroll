// apikey="aO2Dky_YhP2VbPk-CNmSVKeLhM8IXw7XYaR8FKjUK08";
let container=document.querySelector("#container1")



function append(data){

    for (let i=0;i<data.length;i++){
        console.log(data[i].urls.full);
        let div=document.createElement("div");
        div.innerHTML=`
        <img src="${data[i].urls.full}" height="500px" width="400px" >`;
        const item = document.createElement("a");
        item.href=`${data[i].links.html}`;
        item.textContent="View on Unsplash";
        div.appendChild(item)
       item.style.backgroundColor="black"
       item.style.width="400px"
       item.style.height="30px"
       item.style.textAlign="center"
       item.style.fontSize="larger"
       div.style.padding="10px"

        container.appendChild(div);
        

    }
   
  
}
async function fetchImage(){
        let fetchData= await fetch("https://api.unsplash.com/photos/random/?client_id=aO2Dky_YhP2VbPk-CNmSVKeLhM8IXw7XYaR8FKjUK08&count=10");
        let data=await fetchData.json();
        console.log(data);
        append(data)

   
  
}
fetchImage()

window.addEventListener("scroll",()=>{
if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
fetchImage()

}
})