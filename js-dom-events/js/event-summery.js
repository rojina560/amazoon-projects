
// option-1 
function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "thext shold be changed";
}
// option-2
document.getElementById("event-listner").addEventListener("click", function () {
  const statusHandle = document.getElementById("status-handle");
  statusHandle.innerText = " abu sayed";
});
// option-2 recap
document.getElementById("update").addEventListener('click', function () {
    const inputField = document.getElementById("input");
    const inputText = inputField.value
    const p = document.getElementById("input-text");
    p.innerText = inputText;
    inputField.value =''
});

<script>
        // step-1
        document.getElementById('btn').addEventListener('click',function(){
        //    steop-2
        const commentBox = document.getElementById('new-comment');
        const newComment = commentBox.value;
     
        const commentContainer = document.getElementById('comment-container');
            const p = document.createElement('p');
            p.innerText = newComment;
           commentContainer.appendChild(p)
           commentBox.value = '';
      

        })
    {/* </script>  */}
