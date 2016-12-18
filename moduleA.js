(function () {
  function ModuleA(a) {
    this.a = a;
    MyApp.log("ModuleA was created with \"" + a + "\"");
  };

  ModuleA.prototype.mailbox = function (message) {
    MyApp.log("ModuleA (" + this.a + ") received message: " + message);
  };

  MyApp.ModuleA = ModuleA;
  MyApp.log("ModuleA loaded");
})();
