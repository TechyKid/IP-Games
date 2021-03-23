playSound("assets/Music.mp3");
onEvent("Question1", "click", function( ) {
  setScreen("screen1");
});
onEvent("Yes", "click", function( ) {
  setScreen("screen2")
});
onEvent("No", "click", function( ) {
  setScreen("screen3")
});
onEvent("button2", "click", function( ) {
  setScreen("screen3")
});
onEvent("not", "click", function( ) {
  setScreen("screen4")
});
onEvent("yet", "click", function( ) {
  setScreen("screen4")
});
onEvent("button7", "click", function( ) {
  setScreen("Home")
});