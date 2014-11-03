// This #include statement was automatically added by the Spark IDE.
#include "Adafruit_DHT/Adafruit_DHT.h"

// DHT sensor type & pin
#define DHTTYPE DHT11
#define DHTPIN 3

// Variables
int temperature;
int humidity;
int light;

// Pins
int light_sensor_pin = A0;

// DHT sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() {
    
    // Declare variables
    Spark.variable("temperature", &temperature, INT);
    Spark.variable("humidity", &humidity, INT);
    Spark.variable("light", &light, INT);
    
    // Start DHT sensor
    dht.begin();
}

void loop() {
    
    // Humidity measurement
    temperature = dht.getTempCelcius();
    
    // Humidity measurement
    humidity = dht.getHumidity();
    
    // Moisture measurement
    float light_measurement = analogRead(light_sensor_pin);
    light = (int)(light_measurement/4096*100);

}