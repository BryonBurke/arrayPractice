$(document).ready(function(){

  $("form#survey").submit(function(event) {
    event.preventDefault();

  var fave1=$("#favThing1").val();
  var fave2=$("#favThing2").val();
  var fave3=$("#favThing3").val();
  var fave4=$("#favThing4").val();



  favThingsArray = [fave1,fave2,fave3,fave4];

  var newArray = [];
  newArray.push(fave2);
  newArray.push(fave1);
  newArray.push(fave3);


var text1=newArray[0];
var text2=newArray[1];
var text3=newArray[2];


$("#li1").text(text1);
$("#li2").text(text2);
$("#li3").text(text3);

  console.log(newArray);




  console.log(fave1);
  console.log(fave2);
  console.log(fave3);
  console.log(fave4);
  console.log(favThingsArray);
});

});
