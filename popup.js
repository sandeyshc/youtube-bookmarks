console.log(document)
//   document.getElementById("mybutton").addEventListener('click',function(){
//     chrome.runtime.sendMessage({type: "sendmessages"}, function(count) {
//       console.log('msg sent')
// });
//   })
document.getElementsByClassName("myimage")[0].setAttribute('src',"chrome-extension://"+chrome.runtime.id+"/pop.png")

var values=[]
  
// chrome.runtime.onMessage.addListener(
//     function(message, sender, sendResponse) {
//         if(message.mymessage=="cool"){
//           // currents=document.getElementsByClassName("ytp-progress-bar")[0].getAttribute('aria-valuenow')
//           console.log("got that",message.allvalues)
//           // document.createElement
//           values=message.allvalues
//           for(ij=0;ij<values.length;ij++){
//           	hrs=parseInt(values[ij]/3600)
//           	// min=(values-hrs*3600)/60
//           	min=parseInt((values[ij]%3600)/60)
//           	sec=parseInt((values[ij]%3600)%60)
// 	          	// sec= values-min*60-hrs*3600
//           	console.log(hrs+":"+min+":"+sec)


//           	c="<div>"+values[ij]+"</div>"
//           	document.body.innerHTML+=c

//           }
                
//           }
      
//         }
    
// );
// document.addEventListener('change',function(){
// 	console.log("lll")
// })
var keys;
var myactive;
var ideabox=[];
chrome.storage.onChanged.addListener(function(changes, namespace) {

	console.log('hello',document,changes,namespace)
	      // if(values.length==0 || !values.includes(curr_value)){
	  // function checks(callback){
  var rem = document.querySelectorAll("div");
      // r='<button id="mybutton">start</button><script src="popup.js"></script>'
      // document.body.innerHTML=r
      var var1   = document.getElementsByTagName('br');
      console.log(rem,var1,'dddS')

for(var i = var1.length; i--;) {
	console.log('yes')
    var1[i].parentNode.removeChild(var1[i]);
}
for (i=0; i < rem.length; i++){
	// r='<br>'
	// r=document.createElement('br')

    rem[i].parentNode.removeChild(rem[i]);
        // var1[i].parentNode.removeChild(var1[i]);
}
			document.getElementById('yeso').append(document.createElement('br'))
			document.getElementById('yeso').append(document.createElement('br'))

	// r.parentNode.removeChild(r);
//   console.log(rem[i])
  // callback(sec)
  if(Object.keys(changes)[0].substring(0,1)!="s" && Object.keys(changes)[0].includes("https://www.youtube.com/")){
	getval()
	console.log('hahaha')
  }



	})



function start(){
	// myactive=''
	console.log('hi')
chrome.tabs.query({active: true, currentWindow: true},function(tabs){   
	myactive=tabs[0]
	keys = tabs[0].url.split('&')[0];
	getval()
});
}
start()

  // keys=window.location.href
function getval(){
chrome.storage.local.get(keys, function(result) {
  console.log(result,result[keys])

  if(Object.keys(result).length !== 0){
console.log('Value currently is ' + result[keys]);
  alldata=JSON.parse(result[keys])
// alldata=result[keys]
  values=alldata.values
  tot=alldata.title
  ideabox=alldata.ideabox
  console.log(values,"pressss",values,tot,ideabox)
//   console.log(values,"pres")
  }
  else{
    values=[]
    console.log(values,'its null')
  }
  function sending(vale){
  	console.log("sended",vale)
  	chrome.tabs.sendMessage(myactive.id, {"message": "remove","idtosend":vale});
   console.log("sent msg")
  }
  function sendingtoidea(vale,idd){
	console.log("sended",vale,idd,"idd")
	chrome.tabs.sendMessage(myactive.id, {"message": "ideaboxsending","idtosend":vale,"idd":idd});
 console.log("sent msg")
}
  console.log(values,"here")
  if(values!=[]){
  for(ij=0;ij<values.length;ij++){
  	console.log(ij,"this")
          	hrs=parseInt(values[ij]/3600)
          	// min=(values-hrs*3600)/60
          	min=parseInt((values[ij]%3600)/60)
          	sec=parseInt((values[ij]%3600)%60)
	          	// sec= values-min*60-hrs*3600
          	console.log(hrs+":"+min+":"+sec)

			contentwp=document.createElement('div')
			// cqw='<span>'+hrs+':'+min+':'+sec+'</span>'
			cqw=document.createElement('div')
			cqw.innerHTML=hrs+":"+min+":"+sec

			cqw.style.width="50px"
			cqw.style.height="15px"
			cqw.style.fontFamily="Arial, Helvetica, sans-serif"
			cqw.style.float='left'
			imagessss=document.createElement('img')
			imagessss.setAttribute('src',"chrome-extension://"+chrome.runtime.id+"/del.png")
			imagessss.setAttribute('height','15px')
			imagessss.setAttribute('width','15px')
			imagessss.setAttribute("class",values[ij])

			imagessss.style.cursor="pointer"
			contentwp.style.display='inline-block'
			imagessss.style.float='left'
			imagessss.style.marginLeft="10px"
			imagessss.style.marginRight="10px"

			inputs=document.createElement('input')
			inputs.setAttribute('type','text')
			inputs.setAttribute('class','ss'+values[ij])
			inputs.style.float="left"
			inputs.style.width="100px"
			inputs.style.marginRight="30px"
			inputs.setAttribute('placeholder','Enter timestamp msg')
			inputs.setAttribute('value',ideabox[ij])
			// inputs.style.height="15px"

			submits=document.createElement('div')
			submits.innerHTML="Submit"
			submits.setAttribute('class',ij)
			submits.style.cursor="pointer"
			submits.style.background="red"
			submits.style.padding="5px"
			submits.style.fontFamily="Arial, Helvetica, sans-serif"
			submits.style.color="white"
			// removes.width="100px"
			// removes.height="15px"
			// removes.style.height="15px"
			// removes.style.width="px"
			submits.style.float='left'

			contentwp.appendChild(imagessss)
			contentwp.appendChild(cqw)
			contentwp.appendChild(inputs)
			contentwp.appendChild(submits)


			document.body.append(contentwp)









          	// contentw=document.createElement('div')
			// contentw.setAttribute("class","ok-cool"+values[ij])
			// contentw.innerHTML=hrs+":"+min+":"+sec
			// contentw.style.marginRight="10px"
			// contentw.style.width="50px"
			// // contentw.style.padding="5px"
			// contentw.style.height="15px"

			// contentw.style.marginLeft="10px"
			// contentw.style.fontFamily="Arial, Helvetica, sans-serif"

			// contentws=document.createElement('div')
			// contentws.setAttribute("class",values[ij])
			// // contentws.innerHTML="Remove"
			// imagessss=document.createElement('img')
			// imagessss.setAttribute('src',"chrome-extension://"+chrome.runtime.id+"/del.png")
			// imagessss.setAttribute('height','15px')
			// imagessss.setAttribute('width','15px')
			// contentws.appendChild(imagessss)

			// contentws.style.cursor="pointer"
			// // contentws.style.background="red"
			// // contentws.style.padding="5px"
			// contentws.style.fontFamily="Arial, Helvetica, sans-serif"
			// contentws.style.color="white"
			// // contentws.width="100px"
			// // contentws.height="30px"
			// // contentws.style.height="10px"
			// // contentws.style.width="5px"
			// // contentw.append(contentws)
			// contentw.style.float='left'
			// contentws.style.display="inline-block"






			// contentsq=document.createElement('div')

			// inputs=document.createElement('input')
			// inputs.setAttribute('type','text')
			// contentsq.appendChild(contentsq)

			// contentws.setAttribute('onclick','sending('+values[ij]+')')
			// cw=document.createElement('div')
			// cw.append(contentw)
			// cw.append(contentws)
			// cw.style.display="inline-block"
			// document.body.append(contentws)
			// document.body.append(contentw)

			// document.body.append(cw)
			document.body.append(document.createElement('br'))
						document.body.append(document.createElement('br'))
						// document.body.append(document.createElement('br'))

			// document.getElementsByClassName('ss'+values[ij])[0].addEventListener('change',function(){
			// 	console.log(parseInt(this.getAttribute('class').substring(2)))
			// })
			
			document.getElementsByClassName(values[ij])[0].addEventListener('click',function(){
				// console.log(this.getAttribute(class).substring(7))
				
				sending(this.getAttribute("class"))
				console.log(values)
			})
			document.getElementsByClassName(ij)[0].addEventListener('click',function(){
				// console.log(this.getAttribute(class).substring(7))
				inputval=document.getElementsByClassName('ss'+values[parseInt(this.getAttribute("class"))])[0].value
				sendingtoidea(inputval,parseInt(this.getAttribute("class")))

				console.log(values,"submit idea")
			})

          	// c="<div>"+values[ij]+"</div>"
          	// document.body.innerHTML+=c

          }
      }

})


}


  document.getElementById("mybutton").addEventListener('click',function(){
// port = chrome.runtime.connect(null, {name: 'hi'});      
// port.onDisconnect.addListener(obj => {
//   console.log('disconnected port');
// })
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   var activeTab = tabs[0];
   chrome.tabs.sendMessage(activeTab.id, {"message": "fetch_top_domains"});
   console.log("sent msg")
 });
  })


  document.getElementsByClassName("myimage")[0].addEventListener('click',function(){
   chrome.tabs.create({url: chrome.extension.getURL("indexs.html")})
})
