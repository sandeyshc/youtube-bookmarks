// import loc from "./loc.png"
// // var t=setInterval(runFunction,1000);


// // function runFunction(){
// //     console.log(document,"foreground content")
// // }

//     // Do something after the sleep!
//     // click((window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().left)+(24/total_times)*get_widths, window.scrollY + document.querySelector('.ytp-timed-markers-container').getBoundingClientRect().top);


// function printMousePos(event) {
//     console.log(
//       "clientX: " + event.screenX +
//       " - clientY: " + event.screenY)
//       var el = document.elementFromPoint(event.screenX, event.screenY);
//     console.log(el);
//   }
  
//   document.addEventListener("click", printMousePos);
// function click(x, y)
// {
//     var ev = new MouseEvent('click', {
//         'view': window,
//         'bubbles': true,
//         'cancelable': true,
//         // 'screenX': x,
//         // 'screenY': y
//         'pageX':164,
//         'pageY':398,
//     });

//     var el = document.elementFromPoint(x, y);
//     console.log(el,"yes dispatched"); //print element to console
//     el.dispatchEvent(ev);
// }
// console.log(document,"foreground content")
// intime=document.getElementsByClassName("ytp-time-current")[0].textContent
// totaltime=document.getElementsByClassName("ytp-time-duration")[0].textContent
// get_width=document.getElementsByClassName("ytp-chrome-bottom")[0].style.width
// console.log(parseInt(get_width))
// get_widths=parseInt(get_width)

// color_change=document.getElementsByClassName("ytp-scrubber-container")[0].style.transform
// // color_change.background="white"
// contentw=document.createElement('div')
// contentw.setAttribute("class","ytp-set-current-ok")

// // contentw.style.position="absolute"
// contentw.style.top="-4px"
// contentw.style.left="-6.5px"
// contentw.style.zIndex=100
// contentw.style.background="white"
// contentw.style.transform="translateX(138px)"

// document.getElementsByClassName("ytp-progress-bar")[0].append(contentw)
// now_time=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuenow")
// total_time=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuemax")
// total_times=parseInt(total_time)
// console.log((window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().left)+(24/total_times)*get_widths, window.scrollY + document.querySelector('.ytp-timed-markers-container').getBoundingClientRect().top)
// // click((window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().left)+(24/total_times)*get_widths, window.scrollY + document.querySelector('.ytp-timed-markers-container').getBoundingClientRect().top);

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }

// sleep(10000).then(() => {
//     // Do something after the sleep!
//     click((window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().left)+(55/total_times)*get_widths, window.scrollY + document.querySelector('.ytp-progress-bar').getBoundingClientRect().top+2);
//     // document.elementFromPoint(300,491).click()
//     click(538,250)
//     click(164,499)
// });
// // click(250,496)
// console.log(intime,totaltime,get_width,color_change,document.getElementsByClassName("ytp-set-current-ok")[0])


// // var evt = new MouseEvent("click", {
// //     view: window,
// //     bubbles: true,
// //     cancelable: true,
// //     clientX: 305,
// //     clientY: 320,
    
// //     /* whatever properties you want to give it 24*/
// // });
// // targetElement=document.getElementsByClassName('ytp-progress-bar')[0]
// // targetElement.dispatchEvent(evt);

// // x=305
// // y=320
// // document.elementFromPoint(x, y).click();



// console.log(window.scrollY + document.querySelector('.ytp-timed-markers-container').getBoundingClientRect().top) // Y

// console.log(window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().left) // X
// // console.log(window.scrollY + document.querySelector('.ytp-progress-bar').getBoundingClientRect().top) // Y

// console.log(window.scrollX + document.querySelector('.ytp-chapters-container').getBoundingClientRect().right) // X
// console.log('completed')


// // function conv(a,b){
// //     // curr=a[]*60+b
// //     // tot=
// //     console.log(a.substring(0,2),a.substring(3,5))
// //     console.log(b.substring(0,2),b.substring(3,5))
// // }    
// // conv(intime,totaltime)
    

// // .ytp-scrubber-container {
// //     position: absolute;
// //     top: -4px;
// //     left: -6.5px;
// //     z-index: 43;
// // }
// var currents=0;

// chrome.runtime.onMessage.addListener(
//     function(message, sender, sendResponse) {
//         if(message.type=="sendmessages"){
//           currents=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
//                 chrome.runtime.sendMessage({type: "senttime",currents}, function(count) {
//                 console.log('msg sent from content')
// });
//                 }
      
//         }
    
// );
// chrome.runtime.onConnect.addListener(port => {
//   console.log('connected ', port);

//   if (port.name === 'hi') {
//     port.onMessage.addListener(this.processMessage);
//   }
// });
// chrome.storage.local.remove(["https://www.youtube.com/watch?v=l5L66_KBH8M"])
console.log(window.location.host)
if(window.location.host==="www.youtube.com"){
console.log("content.js running",document.getElementsByClassName("ytp-progress-bar")[0])
// while(!document.getElementsByClassName("ytp-progress-bar")[0]==undefined){
//   console.log("waiting")
firs(sec);
// }
// chrome.storage.sync.get(null, function(items) {
//     var allKeys = Object.keys(items);
//     console.log(allKeys,items);
// });
// chrome.storage.local.get(null, function(items) {
//    for (key in items) {
//        //do stuffs here
//        console.log(key)
//    }
// });
var values=[]
var tot=""
var ideabox=[]
var keys=window.location.href.split('&')[0]
console.log(window.location.href.split('&'))
chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
   if( request.message === "fetch_top_domains" ) {
    console.log("got msg")
//     keys=window.location.href

//     chrome.storage.local.get(keys, function(result) {
//       console.log(result,result[keys])

//       if(Object.keys(result).length !== 0){
//     console.log('Value currently is ' + result[keys]);
//       values=JSON.parse(result[keys])
//       console.log(values,'changed')
//       }
//       else{
//         values=[]
//         console.log(values,'emptied')
//       }
tot=document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].textContent || document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText
console.log(tot,ideabox,values,"jajajaj") 
      curr_value=parseInt(document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow'))
      console.log("checking",values,curr_value,!values.includes(curr_value),values.length==0,typeof(values))
      if(values.length==0 || !values.includes(curr_value)){

      values.push(curr_value)
      console.log(values,keys,"yes")
      ideabox.push("")
  chrome.storage.local.set({[keys]:JSON.stringify({values,title:tot,ideabox:ideabox})}, function() {
  console.log('Value is set to ' + values+keys);
});

//     chrome.storage.local.set({['s'+keys]:tot}, function() {
//   console.log('Value is set to tots' );
// });



    // });
contentw=document.createElement('img')
contentw.setAttribute("class","ytp-set-current-ok"+values[values.length-1])
contentw.setAttribute("src","chrome-extension://"+chrome.runtime.id+"/location.png")

contentw.style.position="absolute"
contentw.style.top="-25px"
// contentw.style.left="-6.5px"

// contentw.style.right="5px"
// contentw.style.bottom="0px"
contentw.style.zIndex=100
// contentw.style.background="white"
  // nows=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
  maxs=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuemax')
check_width=document.getElementsByClassName("ytp-chrome-bottom")[0].style.width
trans=(values[values.length-1]/parseInt(maxs))*parseInt(check_width)
console.log(trans)
contentw.style.transform="translateX("+trans+"px)"
contentw.style.height="15px"
contentw.style.width="10px"
contentw.style.cursor="pointer"


toolstip=document.createElement('div')
toolstip.setAttribute("class","sytp-set-current-ok"+values[values.length-1])
toolstip.style.position="absolute"
toolstip.style.top="-40px"
// contentw.style.left="-6.5px"
toolstip.style.zIndex=100
toolstip.style.transform="translateX("+trans+"px)"
toolstip.style.height="20px"
toolstip.style.width="auto"
toolstip.innerText=ideabox[i]
toolstip.style.visibility="hidden"
toolstip.style.display="inline-block"
// toolstip.style.width


thir(contentw,"ytp-set-current-ok"+values[values.length-1],values[values.length-1],toolstip,"sytp-set-current-ok"+values[values.length-1])

      }
      else{
        console.log("this time stamp is already present")
      }





  // console.log(chrome.storage.local.get(keys))
    // console.log(keys)
// console.log(window.location.host)

// var arrays = []
// var city = window.location.href
          // currents=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
          //       chrome.runtime.sendMessage({"messagess": "senttime",contents:currents}, function(count) {
          //       console.log('msg sent from content')
// });

                

// Handle the message
// chrome.runtime.sendMessage({"message": "all_urls_fetched"});
    }
  }

);

chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
   if( request.message === "remove" ) {
    // ce=document.getElementsByClassName('ytp-set-current-ok'+request.idtosend)
    //     ce.parentNode.removeChild(ce);
    wan=parseInt(request.idtosend)
    ewq=document.getElementsByClassName("ytp-set-current-ok"+wan)[0]
    ewq.parentNode.removeChild(ewq);
    myindex=0
    values=values.filter(function(value, index, arr){
      myindex=index 
        return value !=wan;
    });
    // tot=tot.splice(myindex, 1);
    console.log(tot,"tot",myindex)

    ideabox.splice(myindex,1)
      chrome.storage.local.set({[keys]:JSON.stringify({values,title:tot,ideabox:ideabox})}, function() {
  console.log('Value is set to ' + values+keys+"updated");
});

   }
  if(request.message==="ideaboxsending"){
    myideaval=request.idtosend
    myideaid=request.idd
    ideabox[myideaid]=myideaval
    chrome.storage.local.set({[keys]:JSON.stringify({values,title:tot,ideabox:ideabox})}, function() {
      console.log('Value is set to ' + values+keys+"updated");
    });
    document.getElementsByClassName("sytp-set-current-ok"+values[myideaid])[0].innerHTML=myideaval
    console.log('noerr',)

  }
  
  })

// chrome.storage.onChanged.addListener(function(changes, namespace) {
//   for (key in changes) {
//     var storageChange = changes[key];
//     console.log('Storage key "%s" in namespace "%s" changed. ' +
//                 'Old value was "%s", new value is "%s".',
//                 key,
//                 namespace,
//                 storageChange.oldValue,
//                 storageChange.newValue);
//     if(key==keys){
//       // console.log(typeof(storageChange.newValue))
//       console.log(storageChange.newValue)
//       values=storageChange.newValue
//        console.log(values[values.length-1])
//     }
//   }
// });

var check_width;

function firs(callback){
  console.log('what firs')
  keys=window.location.href.split('&')[0]
  console.log(keys)

chrome.storage.local.get(keys, function(result) {
  console.log(result,result[keys])

  if(Object.keys(result).length !== 0){
console.log('Value currently is ' + result[keys]);
  alldata=JSON.parse(result[keys])
  // alldata=result[keys]
  values=alldata.values
  tot=alldata.title
  ideabox=alldata.ideabox
  console.log(values,"pres",values,tot,ideabox)
  }
  else{
    values=[]
    ideabox=[]
    console.log(values,'its null')
  }

  callback();
})

}
// while(!document.getElementsByClassName("ytp-progress-bar")[0]==undefined){
//   console.log("waiting")
// firs(sec);
// }

function sec(){

  console.log(values,"in sec")
  if(values!=[]){
//     chrome.runtime.sendMessage({'mymessage':'cool','allvalues':values}, function(count) {
// console.log('msg sent from content')
//   // for(ij=0;ij<values.le)
//   });
    for(i=0;i<values.length;i++){
contentw=document.createElement('img')
contentw.setAttribute("class","ytp-set-current-ok"+values[i])
contentw.setAttribute("src","chrome-extension://"+chrome.runtime.id+"/location.png")

contentw.style.position="absolute"
contentw.style.top="-25px"
// contentw.style.left="-6.5px"
contentw.style.zIndex=100
// contentw.style.background="white"
  // nows=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
  maxs=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuemax')
check_width=document.getElementsByClassName("ytp-chrome-bottom")[0].style.width
trans=(values[i]/parseInt(maxs))*parseInt(check_width)
console.log(trans)
contentw.style.transform="translateX("+trans+"px)"
contentw.style.height="15px"
contentw.style.width="10px"
contentw.style.cursor="pointer"


toolstip=document.createElement('div')
toolstip.setAttribute("class","sytp-set-current-ok"+values[i])
toolstip.style.position="absolute"
toolstip.style.top="-40px"
// contentw.style.left="-6.5px"
toolstip.style.zIndex=100
toolstip.style.transform="translateX("+trans+"px)"
toolstip.style.height="20px"
toolstip.style.width="auto"
toolstip.innerText=ideabox[i]
toolstip.style.visibility="hidden"
toolstip.style.display="inline-block"
// toolstip.style.cursor="pointer"


thir(contentw,"ytp-set-current-ok"+values[i],values[i],toolstip,"sytp-set-current-ok"+values[i])
}
}
}

function thir(contentw,tagname,myval,toolstip,tagsname){
  // ytp-player-content ytp-iv-player-content
// currents=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
document.getElementsByClassName("ytp-chrome-bottom")[0].append(contentw)
document.getElementsByClassName("ytp-chrome-bottom")[0].append(toolstip)



// console.log(document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow'))
document.getElementsByClassName(tagname)[0].addEventListener('click',function(){
  console.log('clicked')
  console.log(document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow'))
  console.log(document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuemax'))
  // function sleep (time) {
  //   return new Promise((resolve) => setTimeout(resolve, time));
  // }


  console.log("changing time")
  document.getElementsByClassName('video-stream html5-main-video')[0].currentTime=myval


})
console.log(document.getElementsByClassName(tagsname)[0])
document.getElementsByClassName(tagname)[0].addEventListener('mouseover',function(){
  console.log('mousseover')
    document.getElementsByClassName('s'+this.getAttribute('class'))[0].style.visibility="visible"
},false)
document.getElementsByClassName(tagname)[0].addEventListener('mouseout',function(){
  console.log('mouseout')
  document.getElementsByClassName('s'+this.getAttribute('class'))[0].style.visibility="hidden"
},false)

// document.getElementsByClassName(tagsname)[0].onmouseover=function(){
//   console.log('mousseinn')
// }
// document.getElementsByClassName(tagsname)[0].onmouseout=function(){
//   console.log('mousseout')
// }

}

// document.getElementsByClassName("video-stream html5-main-video")[0].load(function(){console.log("yes")});
// document.getElementsByClassName("video-stream html5-main-video")[0].addEventListener('load',function(){alert("cools")})
// window.onload=function(){alert("cool")}
document.addEventListener('yt-page-data-updated',function(){
  console.log('yo')

  function checks(callback){
  var rem = document.querySelectorAll("[class*='ytp-set-current-ok']"), i = 0;
for (; i < rem.length; i++)
    rem[i].parentNode.removeChild(rem[i]);
  console.log(rem[i])
  var rems = document.querySelectorAll("[class*='sytp-set-current-ok']"), i = 0;
  for (; i < rems.length; i++)
      rems[i].parentNode.removeChild(rems[i]);
    console.log(rems[i])
  callback(sec)
}
checks(firs)

// firs(sec)
})
// function myFunction() {
//   var x = document.getElementById("video-stream html5-main-video");
//     console.log("dsds")

// }
// while(check_width!=document.getElementsByClassName("ytp-chrome-bottom")[0].style.width){
//   sec()
// }


// if(typeof chrome.app.isInstalled!=='undefined'){
//    chrome.runtime.sendMessage()
// }

// document.addEventListener('resize',function(){

// console.log('yed')
// if(values==[]){
//   console.log('noed')
//   sec()
// }
// })

// document.addEventListener('yt-set-fullerscreen-styles',function(){
//   console.log('hjhj')
// })
document.addEventListener('fullscreenchange',function(){
  console.log('hjq')
    function checks(callback){
  var rem = document.querySelectorAll("[class*='ytp-set-current-ok']"), i = 0;
for (; i < rem.length; i++)
    rem[i].parentNode.removeChild(rem[i]);
  console.log(rem[i])
  callback(sec)
}
checks(firs)
  //   if(values=[]){
  //   firs(sec)
  // }
  // else{sec()}
})


document.addEventListener('yt-set-theater-mode-enabled',function(){
  // console.log('hjw')
  // if(values=[]){
  //   firs(sec)
  // }
  // else{sec()}
    function checks(callback){
  var rem = document.querySelectorAll("[class*='ytp-set-current-ok']"), i = 0;
for (; i < rem.length; i++)
    rem[i].parentNode.removeChild(rem[i]);
  console.log(rem[i])
  callback(sec)
}
checks(firs)
})


}













