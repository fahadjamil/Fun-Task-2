function myfunction() {
  let curr = new Date();
  let first = curr.getDate() - curr.getDay();
  console.log(first);
  let thursday;
  
  let n=curr.getDate();
  console.log("current" + n);
  let m = new Date(curr.setDate(first + 4)).getDate();
  console.log("this week thusrday" + m);
  console.log(n );
  console.log(m);
  if (n <= m) {
    thursday = new Date(curr.setDate(first + 4));
  } 
  else if (n>  m) {
    thursday = new Date(curr.setDate(first + 11));
  }

  return thursday;
}
console.log(myfunction());
