var MyApp;

(function () {
  var consoleElement;

  MyApp = {};

  MyApp.log = function (message) {
    if (consoleElement) {
      consoleElement.innerHTML += "<br>" + message;
    } else {
      console.log("(Document not loaded yet)", message);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    consoleElement = document.getElementById("consoleOutput");
    
    MyApp.log("(Previous logs may be found in the browser console.)")
    MyApp.log("Page loaded");

    var moduleA = new MyApp.ModuleA("first");
    moduleA.mailbox("foo, bar");

    var moduleB = new MyApp.ModuleB();
    moduleB.sendMessage("Hello, World!");
  });

  MyApp.log("main.js loaded");

})();

