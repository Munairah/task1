var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''
recognition.continuous = true
recognition.onstart = function()
 {
 instructions.text("Voice Recognition is On")
}
recognition.onspeechend = function() {
 instructions.text("no Action")
}
recognition.onerror = function() {
 instruction.text("try Again")
}
recognition.onresult = function(event) {
 var current = event.resultIndex;
 var transcript = event.results[current][0].transcript
 content += transcript
 textbox.val(content)
}
$("#start-btn").click(function(event) {
 recognition.start()
})
textbox.on('input', function() {
 content = $(this).val()
})