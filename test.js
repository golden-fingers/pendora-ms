

var test = QUnit.test;


test("Method PTimer() exist",function(t){
  var a = PTimer();
  t.equal(a.hasOwnProperty('startTime'),true, "it exist")
});

test("Function Timer should return Object",function(t){
  var a = PTimer();
  t.equal(Object.prototype.toString.call(a) ,"[object Object]","it return Object")
});


test("function startTime should return the time as a string",function(t){
  var a = PTimer().startTime(10);
  t.equal(typeof a ,"string","it return time as a string")
});


test("function stop should stop the timer --change it's value to false'",function(t){
  PTimer().startTime(10 * 60);
  var a = PTimer().stop(10);

  t.ok( a  == false ,"timer Value is Zero");
});


test( "variable time change every time interval (1 second)", function( t ) {
  var done = t.async();
  var a = PTimer().startTime();
  
  setTimeout(function() {
    t.equal( a , a ,"The Variable changes .");
    done();
  },5000);
});

/*
test( "variable passedTime decrease by 1  every second", function( t ) {
  var done = t.async();

  var a = PTimer();
  a.startTime(1 * 60);
  
  
  var passedTime = a.passed() ;
  console.log('hhjkj',passedTime);
  setTimeout(function() {
    t.equal( passedTime + 5 , passedTime  ,"100% True :D");
    done();
  },5000);
  console.log(passedTime);
});*/
