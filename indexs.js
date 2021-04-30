// chrome.storage.sync.get(null, function(items) {
//     var allKeys = Object.keys(items);
//     console.log(allKeys,items);
// });

chrome.storage.local.get(null, function(items) {
	    var allKeys = Object.keys(items);
	    var allVals=Object.values(items);
    console.log(allKeys,items,allVals);
    cont=document.body.innerHTML
   //  allVals=JSON.parse(allVals)
    console.log("wat",allVals,allVals[0])
    for(i=0;i<parseInt(allVals.length);i++){
       mmm=JSON.parse(allVals[i])

    	// if(allKeys[i].substring(0,1)!="s"){
    	cont+='<div style="padding:15px;border-style:ridge;position:relative;"><div><a target="_blank"style="float:left;width:500px;" href="'+allKeys[i]+'">'+mmm.title+'</a><div style="display:inline-block">'
       for(test=0;test<mmm.values.length;test++){
         hrs=parseInt(mmm.values[test]/3600)
         // min=(values-hrs*3600)/60
         min=parseInt((mmm.values[test]%3600)/60)
         sec=parseInt((mmm.values[test]%3600)%60)
          cont+='<div><a target="_blank" href="'+allKeys[i]+'&t='+mmm.values[test]+'">'+hrs+':'+min+':'+sec+'</a>'+'--'+mmm.ideabox[test]+'</div>'
       }
       cont+='</div></div></div>'
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
