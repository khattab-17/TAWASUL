// let love = document.querySelector(".react-btny")
// var main = document.getElementsByClassName("main-vid")
// love.onclick = function(){
//     if(this.innerText==="🤍"){
//         this.innerText="💓";
//     }
//     else{
//         this.innerText="🤍";
//     }
// }

// function vidclicked(){
//     alert("sdfrtyui")
// };

$(function(){
    $(".react-btn-love").click(function(){
        if(this.innerText==="🤍"){
            this.innerText="💓";
        }
        else{
            this.innerText="🤍";
        }
    })

    $(".post-pic").click(function(){
        $(this).parents("#post").addClass("ooo")
    })
})