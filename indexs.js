// chrome.storage.sync.get(null, function(items) {
//     var allKeys = Object.keys(items);
//     console.log(allKeys,items);
// });

chrome.storage.local.get(null, function(items) {
	    var allKeys = Object.keys(items);
	    var allVals=Object.values(items);
    console.log(allKeys,items,allVals);
    cont=document.body.innerHTML
    for(i=0;i<parseInt(allVals.length/2);i++){
    	// if(allKeys[i].substring(0,1)!="s"){
    	cont+='<div style="padding:15px;border-style:ridge;"><div><a target="_blank"style="float:left;width:500px;" href="'+allKeys[i]+'">'+allVals[parseInt(allVals.length/2)+i]+'</a><div>'+allVals[i]+'</div></div></div>'
    // }
    }
    console.log(cont)
    document.body.innerHTML=cont
   // for (key in items) {
   //     //do stuffs here
   //     // console.log(key)
   // }
   // mydiv=document.getElementsByTagName('div')
   // for()
});
