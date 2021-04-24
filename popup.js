console.log(document)
//   document.getElementById("mybutton").addEventListener('click',function(){
//     chrome.runtime.sendMessage({type: "sendmessages"}, function(count) {
//       console.log('msg sent')
// });
//   })
document.getElementsByClassName("myimage")[0].setAttribute('src',"chrome-extension://"+chrome.runtime.id+"/pop.png")
console.log(chrome.runtime.id);
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
	keys = tabs[0].url;
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
  values=JSON.parse(result[keys])
  console.log(values,"pres")
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
          	contentw=document.createElement('div')
			contentw.setAttribute("class","ok-cool"+values[ij])
			contentw.innerHTML=hrs+":"+min+":"+sec
			contentw.style.marginRight="10px"
			contentw.style.width="50px"
			contentw.style.padding="5px"

			contentw.style.marginLeft="10px"
			contentw.style.fontFamily="Arial, Helvetica, sans-serif"

			contentws=document.createElement('div')
			contentws.setAttribute("class",values[ij])
			contentws.innerHTML="Remove"
			contentws.style.cursor="pointer"
			contentws.style.background="red"
			contentws.style.padding="5px"
			contentws.style.fontFamily="Arial, Helvetica, sans-serif"
			contentws.style.color="white"
			// contentws.width="100px"
			// contentws.height="30px"
			// contentws.style.height="10px"
			// contentws.style.width="5px"
			// contentw.append(contentws)
			contentw.style.float='left'
			contentws.style.display="inline-block"
			// contentws.setAttribute('onclick','sending('+values[ij]+')')
			// cw=document.createElement('div')
			// cw.append(contentw)
			// cw.append(contentws)
			// cw.style.display="inline-block"
			document.body.append(contentw)
			document.body.append(contentws)
			// document.body.append(cw)
			document.body.append(document.createElement('br'))
						document.body.append(document.createElement('br'))

			document.getElementsByClassName(values[ij])[0].addEventListener('click',function(){
				// console.log(this.getAttribute(class).substring(7))
				sending(this.getAttribute("class"))
				console.log(values)
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
