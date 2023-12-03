const min=document.querySelector("#minute")
const hour=document.querySelector("#hour")
const sec=document.querySelector("#second")
const period=document.querySelector("#period")
const clock=()=>{
    const h=new Date().getHours();
    const m=new Date().getMinutes();
    const s=new Date().getSeconds();
    const ampm=h>=12?
    "PM":"AM"; 
    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    period.innerHTML=ampm;

}
clock()

const TimingCondition=()=>{
    setInterval(clock,1000)
}

TimingCondition()