 function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

 const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h; // (or alternatively) h = String(h).padStart(2, '0')
    m = m < 10 ? '0' + m : m; // (or alternatively) m = String(m).padStart(2, '0')
    return `${h}:${m}`;
  }

  function timeToMins(time) {
    var b = time.split(':');
    return b[0]*60 + +b[1];
  }
  //addTimes(),timeFromMins(),timeFromMins - ADD times
  // Convert minutes to a time in format hh:mm
  // Returned value is in range 00  to 24 hrs
  function timeFromMins(mins) {
    function z(n){return (n<10? '0':'') + n;}
    var h = (mins/60 |0) % 24;
    var m = mins % 60;
    return z(h) + ':' + z(m);
  }
  
  // Add two times in hh:mm format
  function addTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) + timeToMins(t1));
  }

  function subTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) - timeToMins(t1));
  }
  function load(){
    dt1= new Date()
    currentTime = "Current Time : "+dt1.getHours()+":"+dt1.getMinutes()+":"+dt1.getSeconds()
    var ele3=document.getElementById('ctime')
    ele3.innerHTML=currentTime
  }
 
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }

  function refresh(){
    window.location.reload("Refresh")
  }

  function openKeka(){
    window.open("https://techigai.keka.com/#/me/attendance/logs", "_blank");
  }
  function darkMode() {
    var element = document.body;
    if(element.className=="dark-mode")
      element.classList.remove('dark-mode');
    else
    element.classList.add('dark-mode');
  }
  function ready(){
    var t11 = document.getElementById("intimehr");
    var t12 = document.getElementById("intimemin");
    var t21 = document.getElementById("servedtimehr");
    var t22 = document.getElementById("servedtimemin");
    var time11 = t11.options[t11.selectedIndex].text;
    var time12 = t12.options[t12.selectedIndex].text;
    var time21 = t21.options[t21.selectedIndex].text;
    var time22 = t22.options[t22.selectedIndex].text;
    var t2=time21+":"+time22
// console.log(time11,time12)
//get current time
dt1= new Date()

//get last-in time
dt2= new Date()

//set hours, minutes - 24hr format
dt2.setHours(time11)
dt2.setMinutes(time12)

//New time computed
newtime=convertMinsToHrsMins(diff_minutes(dt1,dt2))
// console.log(newtime)

//Served so far for...
served=addTimes(t2,newtime)
// console.log(served);

//need to serve more..
tobeserved=subTimes("8:30",served)
// console.log(tobeserved);

var op1="Served so far for : "+served+" hours"
var op2="Need to serve more : "+tobeserved+" hours for 8:30hrs"
// console.log(dt1.getHours())

  ctime=dt1.getHours()+":"+dt1.getMinutes();
  outtime=addTimes(ctime,tobeserved)
  var op3="Your out-time is "+outtime+"hrs. (With no BREAKS)"
  console.log(dt1.getHours())
  
  if(dt1.getHours()<dt2.getHours()){
    op1="Current Time should be greater than last-in time"
    op2=""
    op3=""
  }
  if(served > '08:30'){
    op1="Served so far for : "+served+" hours"
    op2=""
    op3="You can leave!!!"
  }
  if(dt1.getHours()>=0 && dt1.getHours()<7){
    op1="Try between 7 AM to 11 PM"
    op2=""
    op3=""
  }
  var ele=document.getElementById('op1')
  ele.innerHTML=op1
  var ele2=document.getElementById('op2')
  ele2.innerHTML=op2
  var ele3=document.getElementById('op3')
  ele3.innerHTML=op3
  }
