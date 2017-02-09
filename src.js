





	var testpassedTime ;
	var minutes =10 ;
	var timer;
	var paused = 0;
	var initialTime = 0;



function PTimer(){

	
	var	methods = {


				passed : function(){return testpassedTime;},

				startTime : function (initial) {
					initialTime =initial;
				    
				    
				    var s = initialTime % 60;
				    var m0 = initialTime / 60;
				    var m = parseInt(m0);

				    // add a zero in front of numbers<10
				    m = PTimer().AddZero(m);
				    s = PTimer().AddZero(s);
				    var time = m + " : " + s ;
				    //console.log( m + ":" + s) ;

				    passedTime = initialTime - 1 ;
				    testpassedTime = passedTime ;
					document.getElementById('box').innerHTML = time ;	
	                if(passedTime >= 0){
	                	timer = setTimeout(function(){ PTimer().startTime(passedTime) }, 1000);
	                }

	                else{
	                	PTimer().stop(passedTime);
	                    }
					
					
				    return time;
				},

				stop : function (stopedAt) {
					passedTime = stopedAt;
				    if (timer) {
				           clearTimeout(timer);
				           timer = 0;


				       } 
				 },
				 pause : function () {
					//if(paused == 0){
				        if (timer) {
				            PTimer().stop(passedTime);
				       } 
				       else{
				       	    PTimer().startTime(passedTime);

				       }
				 },


			   Reset : function (min){

						PTimer().stop(passedTime);
						document.getElementById('box').innerHTML = "00 : 00" ;
				},

				setMinutes : function (min){
					
					document.getElementById('box').innerHTML = min +" : 00" ;	
						minutes = min ;
					console.log(min , minutes);
				},

				AddZero : function (i) {
					    if (i<10) {
							  i = "0" + i;
							      }
				   return i;
			   },
			   DisableButton : function (){
						document.getElementById("ClickButton").disabled =true;
				},
				EnableButton : function (){
						document.getElementById("ClickButton").disabled =false;
				},
	         };

return methods ;


}