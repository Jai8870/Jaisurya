let songindex=0;
let audioelement= new Audio('Jujubee.mp3');
let masterplay=document.getElementById("play");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songslist=Array.from(document.getElementsByClassName("songslist"));
let songitemplay = Array.from(document.getElementsByClassName("songitemplay"))

let songs1= [
    {songName:"Jujubee",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"Hukum",filepath:"songs/2.mp3",coverpath:"cover/1.jpg"},
    {songName:"Alappara",filepath:"songs/3.mp3",coverpath:"cover/1.jpg"},
    {songName:"Rathamaarey",filepath:"songs/4.mp3",coverpath:"cover/1.jpg"},
    {songName:"Kaavaalaa",filepath:"songs/5.mp3",coverpath:"cover/1.jpg"},
    {songName:"muthuvel",filepath:"songs/6.mp3",coverpath:"cover/1.jpg"},
    {songName:"jailer drill",filepath:"songs/7.mp3",coverpath:"cover/1.jpg"},
    {songName:"jailer theme",filepath:"songs/8.mp3",coverpath:"cover/1.jpg"}
]
songslist.forEach((element,i)=>{
    
    element.getElementsByClassName("songName")[0].innerText=songs1[i].songName;
})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa","fa-play");
        masterplay.classList.add("fa","fa-pause");
        gif.style.opacity=1;
        progress = myprogressbar.value;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa","fa-pause");
        masterplay.classList.add("fa","fa-play");
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timesupdate',()=>{
       progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
       myprogressbar.value=progress;
       console.log(myprogressbar);
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
    console.log(audioelement.currentTime);
})
const  makeAllplays= ()=>{
    songitemplay.forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");                             
    })
}
songitemplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
         
          makeAllplays();
          songindex = parseInt(e.target.id);
          e.target.classList.remove("fa-play");
          e.target.classList.add("fa-pause");
          audioelement.src=`songs/${songindex}.mp3`;
          
          audioelement.currentTime= 0;
          audioelement.play();
          masterplay.classList.remove("fa","fa-play");
          masterplay.classList.add("fa","fa-pause");
    })
})
    document.getElementById("next").addEventListener('click',()=>{
    if (songindex>=9){
        songindex =0;
    } 
    else{
        songindex += 1;
    }
          audioelement.src=`songs/${songindex+1}.mp3`;
          audioelement.currentTime= 0;
          audioelement.play();
          masterplay.classList.remove("fa","fa-play");
          masterplay.classList.add("fa","fa-pause");
        })
        document.getElementById("previous").addEventListener('click',()=>{
            if (songindex<=0){
                songindex =0;
            }else{
                songindex -=1;
            }
        
                  audioelement.src=`songs/${songindex+1}.mp3`;
                  audioelement.currentTime= 0;
                  audioelement.play();
                  masterplay.classList.remove("fa","fa-play");
                  masterplay.classList.add("fa","fa-pause");
                })
            function play(){
             let searchInput = document.getElementById("search").value;
             var audio = new Audio(`${searchInput}.mp3`);
             audio.play();
             }
             function add(){
                var searchInput = document.getElementById("adding").value;
                var audio = new Audio(`${searchInput}.mp3`);
                audio.play();
                }