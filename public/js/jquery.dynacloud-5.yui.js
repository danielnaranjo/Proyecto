jQuery.fn.highlight=function(b){function a(e,j){var l=0;if(e.nodeType==3){var k=e.data.toUpperCase().indexOf(j);if(k>=0){var h=document.createElement("span");h.className="highlight";var f=e.splitText(k);var c=f.splitText(j.length);var d=f.cloneNode(true);h.appendChild(d);f.parentNode.replaceChild(h,f);l=1}}else{if(e.nodeType==1&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(var g=0;g<e.childNodes.length;++g){g+=a(e.childNodes[g],j)}}}return l}return this.each(function(){a(this,b.toUpperCase())})};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()};jQuery.dynaCloud={max:20,sort:true,auto:true,single:true,wordStats:true,scale:4,stopwords:["a","about","above","accordingly","after","again","against","ah","all","also","although","always","am","among","amongst","an","and","any","anymore","anyone","are","as","at","away","be","been","begin","beginning","beginnings","begins","begone","begun","being","below","between","but","by","ca","can","cannot","come","could","did","do","doing","during","each","either","else","end","et","etc","even","ever","far","ff","following","for","from","further","furthermore","get","go","goes","going","got","had","has","have","he","her","hers","herself","him","himself","his","how","i","if","in","into","is","it","its","itself","last","lastly","less","many","may","me","might","more","must","my","myself","near","nearly","never","new","next","no","not","now","o","of","off","often","oh","on","only","or","other","otherwise","our","ourselves","out","over","perhaps","put","puts","quite","s","said","saw","say","see","seen","shall","she","should","since","so","some","such","t","than","that","the","their","them","themselves","then","there","therefore","these","they","this","those","though","throughout","thus","to","too","toward","unless","until","up","upon","us","ve","very","was","we","were","what","whatever","when","where","which","while","who","whom","whomever","whose","why","with","within","without","would","yes","your","yours","yourself","yourselves"]};jQuery(function(){jQuery.dynaCloud.stopwords=new RegExp("\\s(("+jQuery.dynaCloud.stopwords.join("|")+")\\s)+","gi");if(jQuery.dynaCloud.auto){jQuery(".dynacloud").dynaCloud()}});jQuery.fn.dynaCloud=function(a){var b={};return this.each(function(){var n=[];var m=0;if(jQuery.wordStats&&jQuery.dynaCloud.wordStats){jQuery.wordStats.computeTopWords(jQuery.dynaCloud.max,this);for(var h=0,f=jQuery.wordStats.topWords.length;h<f&&h<=jQuery.dynaCloud.max;++h){var o=jQuery.wordStats.topWords[h].substring(1);if(typeof b[o]=="undefined"){b[o]={count:jQuery.wordStats.topWeights[h],el:o}}else{b[o].count+=jQuery.wordStats.topWeights[h]}m=Math.max(b[o].count,m)}jQuery.wordStats.clear()}else{var d=jQuery(this).text().replace(/[^A-Z\xC4\xD6\xDCa-z\xE4\xF6\xFC\xDF0-9_]/g," ").replace(jQuery.dynaCloud.stopwords," ").split(" ");var c=/^[a-z\xE4\xF6\xFC]*[A-Z\xC4\xD6\xDC]([A-Z\xC4\xD6\xDC\xDF]+|[a-z\xE4\xF6\xFC\xDF]{3,})/;jQuery.each(d,function(l,p){if(c.test(p)){var j=p.toLowerCase();if(typeof b[j]=="undefined"){b[j]={count:1,el:p}}else{b[j].count+=1}m=Math.max(b[j].count,m)}})}jQuery.each(b,function(j,l){n[n.length]=l});if(jQuery.dynaCloud.sort){n.sort(function(j,i){if(j.count==i.count){return j.el<i.el?-1:(j.el==i.el?0:1)}else{return j.count<i.count?1:-1}})}var g;if((g=jQuery(a?a:"#dynacloud")).length==0){jQuery(document.body).append('<p id="dynacloud"></p>');g=jQuery("#dynacloud")}g.empty();var e=jQuery.dynaCloud.max==-1?n.length:Math.min(jQuery.dynaCloud.max,n.length);for(var h=0;h<e;++h){g.append('<a href="#'+n[h].el+'" style="font-size: '+Math.ceil((n[h].count/m)*jQuery.dynaCloud.scale)+'em"><span>'+n[h].el+"</span></a> &nbsp; ")}var k=this;jQuery("a",g).each(function(){jQuery(this).click(function(){if(jQuery.dynaCloud.single){jQuery(document.body).removeHighlight()}var i=jQuery(this).text().toUpperCase();jQuery(k).each(function(){jQuery(this).highlight(i)});return false})})})};