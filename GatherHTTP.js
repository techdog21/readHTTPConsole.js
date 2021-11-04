// This is a script of code to place in the console of a Nessus 
// nginx HTTP Server Detection OR Apache HTTP Server Version section
// to be able to pull up all http://addresses and create a 
// new webpage of addresses for eyewitness.

var x = document.querySelectorAll("pre");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.substr(0, nametext.lastIndexOf("V"));
myarray.push([cleantext]);
};
function make_table() {
    var table = '<table><thead><th>Eyewitness List</th>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0];
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()
