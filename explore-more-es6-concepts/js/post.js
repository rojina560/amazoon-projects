// function postLoad() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => displayPost(data));
// }
// function displayPost(posts) {
//     for (const post of posts) {
//         const postContainer = document.getElementById("post-container");
//         const div = document.createElement('div')
//         div.classList.add('post')
//         div.innerHTML = `
//         <h4>user${post.userId}</h4>
//         <h5> post-title: ${post.title}</h5>
//         <P> post describtion${post.body}</p>
//         `
//         postContainer.appendChild(div)
//     }
    
// }
// postLoad()


function postload() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
    .then( data => displayPost(data))
}
function displayPost(posts) {
   
    for (const post of posts) {
         const postContainer = document.getElementById("post-Container");
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h4> user${post.userId}</h4>
        <h5>post-title:${post.title}</h5>
        <p> post describtion:${post.body} </p>
        `
        postContainer.appendChild(div)
      
        
    }
    
}
postload()