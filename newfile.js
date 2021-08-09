function myfunction() {
  var date = new Date();
  d = date.getDate();
  y = date.getFullYear();
  m = date.getMonth();
  var firstDay=0;
 
  
  if (1 > d || d < 11) {
     firstDay = new Date(y, m, 10).toDateString();
  }
  else if(11>d || d<21){
     var firstDay = new Date(y, m,20).toDateString();
    }
  else{
    lastday=new Date(y, m+1, 0).getDate();
    console.log(lastday);
    var firstDay = new Date(y, m,lastday).toDateString();
   }

  
  console.log(y);
  console.log(m);
  console.log(d);

  return firstDay;
}
console.log(myfunction());
