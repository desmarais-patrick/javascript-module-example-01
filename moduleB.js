(function () {
  function ModuleB(b) {
    this.moduleA = new MyApp.ModuleA("second");
    MyApp.log("Module B was created");
  }

  ModuleB.prototype.sendMessage = function(message) {
    this.moduleA.mailbox(message);
    MyApp.log("Module B sent a message.");
  }

  MyApp.ModuleB = ModuleB;
})();
