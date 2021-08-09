function myfunction() {
  let curr = new Date; 
  let first = curr.getDate() - curr.getDay(); 
  let thursday = new Date(curr.setDate(first+4));
  let friday = new Date(curr.setDate(first+5));

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var departure_day = days[friday.getDay()];
  var  deadline_day= days[thursday.getDay()];
  var fmonth = thursday.getUTCMonth() + 1;
  var fday = thursday.getUTCDate();
  var fyear = thursday.getUTCFullYear();
  deadline = fday + "-" + fmonth + "-" + fyear;
  var month = friday.getUTCMonth() + 1; 
  var day = friday.getUTCDate();
  var year = friday.getUTCFullYear();

  departure = day + "-" + month + "-" + year;
  var date = new Date();
  d = date.getDate();
  y = date.getFullYear();
  m = date.getMonth();
  var ShipDeadline=0;
  var ShipDeparture=0;
 
  
  if (1 > d || d < 11) {
     ShipDeparture = new Date(y, m, 12);
     ShipDeadline = new Date(y, m, 11);
  }
  else if(11>d || d<21){
     var ShipDeparture = new Date(y, m,22);
     var ShipDeadline = new Date(y, m,21);
    }
  else if(21>d || d<30) {
    lastday=new Date(y, m+1, 0).getDate();
    console.log(lastday);
    var ShipDeparture = new Date(y, m+1,2);
    var ShipDeadline = new Date(y, m,lastday+1);
   }
   var sdeparture_day = days[ShipDeparture.getDay()];
  var  sdeadline_day= days[thursday.getDay()];
  var fmonth = ShipDeparture.getUTCMonth() + 1;
  var fday = ShipDeparture.getUTCDate();
  var fyear = ShipDeparture.getUTCFullYear();
  sdeparture = fday + "-" + fmonth + "-" + fyear;
  var month = ShipDeadline.getUTCMonth() + 1; 
  var day = ShipDeadline.getUTCDate();
  var year = ShipDeadline.getUTCFullYear();

  sdeadline = day + "-" + month + "-" + year;

  
  let Plane={deadline_day, deadline,departure_day,departure};
  let ship={sdeparture_day, sdeparture,sdeadline_day,sdeadline};
  let Data={Plane,ship};
 return Data;
}
console.log(myfunction());
