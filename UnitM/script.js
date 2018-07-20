/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:MUHAMMAD HUSNI BIN MOHAMMED HARON   
   Date:20/7/18    
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */

var smallsize = document.querySelector(".smaller-size");
var largesize = document.querySelector(".larger-size");
var defaultsize = document.querySelector(".default-size");
var text = document.querySelector("html");

function smaller() {
  smallsize.className = "smaller-size, selected-button";
  text.className = "smaller-size";
  defaultsize.className = "default-size";
  largesize.className = "larger-size";
}

function larger() {
  largesize.className = "selected-button";
  text.className = "larger-size";
  defaultsize.className = "default-size";
  smallsize.className = "smaller-size";
}

function defaulter() {
  defaultsize.className = "selected-button";
  text.className = "default-size";
  smallsize.className = "smaller-size";
  largesize.className = "larger-size";
}

smallsize.addEventListener("click",smaller);
largesize.addEventListener("click",larger);
defaultsize.addEventListener("click",defaulter);
