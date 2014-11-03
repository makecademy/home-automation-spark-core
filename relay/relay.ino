// Define the pin
int relay_pin = D3;

// This routine runs only once upon reset
void setup()
{
   //Register our Spark function here
   Spark.function("relay", relayControl);
   
   // Set relay pin to OUTPUT
   pinMode(relay_pin,OUTPUT);
}


// This routine loops forever 
void loop()
{
   // Nothing to do here
}

// Relay control
int relayControl(String command)
{
    // Get state
   int state = command.toInt();

   // Apply command
   digitalWrite(relay_pin,state);
   
   return 1;
}