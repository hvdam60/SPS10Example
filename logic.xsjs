function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello World from HANA Database User " + getUsername();
$.response.setBody(result);
