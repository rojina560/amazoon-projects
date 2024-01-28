const loadAlbum = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();
    console.log(data);
    const tabContainer = document.getElementById("tab-container");
    data.slice(0,10).forEach(element => {
        console.log(element)
      
        
    });
    const div = document.createElement('div')
    div.innerHTML = `
      <a role="tab" class="tab"></a>`;
    tabContainer.appendChild(div)

}
loadAlbum()