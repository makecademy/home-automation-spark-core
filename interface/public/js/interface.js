// Refresh sensor data
setInterval(function() {

  // Update light level & core status
  $.get('/get', {command: '/light', core: 'sensor_core'}, function(json_data) {

    // Light level
    if (json_data.result){
      $("#lightDisplay").html("Light level: " + json_data.result + "%");
    }

    // Core status
    if (json_data.coreInfo['connected'] == true){
      $("#sensorsCoreStatus").html("Core Online");
      $("#sensorsCoreStatus").css("color","green");    
    }
    else {
      $("#sensorsCoreStatus").html("Core Offline");
      $("#sensorsCoreStatus").css("color","red");     
    }
  });

  // Update temperature
  $.get('/get', {command: '/temperature', core: 'sensor_core'}, function(json_data) {
    if (json_data.result){
      $("#tempDisplay").html("Temperature: " + json_data.result + " °C");
    }
  });

  // Update humidity
  $.get('/get', {command: '/humidity', core: 'sensor_core'}, function(json_data) {
    if (json_data.result){
      $("#humidityDisplay").html("Humidity: " + json_data.result + "%");
    }
  });      

}, 1000);

setInterval(function() {

 // Update relay Core status
 $.get('/get', {command: '', core: 'relay_core'}, function(json_data) {
  if (json_data.connected == true){
    $("#relayCoreStatus").html("Core Online");
    $("#relayCoreStatus").css("color","green");    
  }
  else {
    $("#relayCoreStatus").html("Core Offline");
    $("#relayCoreStatus").css("color","red");     
  }
 });

}, 1000);

// Function to control the lamp
function buttonClick(clicked_id){

  if (clicked_id == "1"){
    $.get('/post', {command: '/relay', core: 'relay_core', params: '1'});
  } 

  if (clicked_id == "2"){
    $.get('/post', {command: '/relay', core: 'relay_core', params: '0'});
  } 

}