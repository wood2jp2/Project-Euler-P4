var x = 100;
var y = 100;
var z = x*y;

for (y=100; y<1000; y+=1) {
    for (x=100; x<1000; x+=1) {																	
    	z = (x*y).toString(); 																	
    		if (z[5]===z[0] & z[4]===z[1] & z[2]===z[3]) {
        		console.log("z equals: " + z, "; y equals: " + y, "; x equals: " + x)}}}