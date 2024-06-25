var counter= document.getElementsByClassName("counter");
var followers= document.getElementsByClassName("followers");


var count=1;
setInterval(()=>{
    if(count<1000){

        count++;
        counter.innerText=count;
    }
    
}, 10)

setInterval(()=>{
    followers.innerText="Followers in insta";
}, 6000)
