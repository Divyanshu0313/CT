(function() {
  var names = ["Div", "Pra", "Nid", "shia", "ragh", "vim", "vaib", "greg", "craig", "domi"];
  for (name in names) {
    name = names[name];
    if (name[0].toLowerCase()=='j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
