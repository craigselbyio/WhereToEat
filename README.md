# Where To Eat?

### Nothing is Impossible... Except deciding where to eat! <br>

Text your zip code and get a recommended restaurant using Twilio and Yelp!

<div align="center">
<img src="assets/wheretoeat.gif" alt="Where To Eat Demo">
</div>

## Sign up with Yelp

Create an app to obtain an [API Key](https://www.yelp.com/developers)

## Get Started with Twilio

1. [Sign Up](https://www.twilio.com/try-twilio)

2. After signing up, buy a phone number in your console, go to Phone Numbers > Buy a Number

### Create Serverless Function

Twilio Functions provides an awesome serverless environment, enabling developers to quickly and easily create event-driven Twilio applications, without having to worry about maintaining or scaling the infrastructure.

1. In your console go to Functions > Create Service > Name your Service > Add + > Add Function > Name your Function <br>

2. Copy the code in functions / WhereToEat.js for this serverless function

> You can also deploy your local project with the [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/deploying)

### Add axios Dependency

I'm using axios to make the HTTP request to Yelp

1. In the functions editor, Go to Settings > Dependencies

2. Under "Import npm modules into your application", Enter the name axios & version 0.21.1 > Add

### Environment Variables

After creating your serverless function, in the functions editor, Go to Settings > Environment Variables

1. Add Key YELP_API_KEY : Value is your Yelp API key

2. Add Key MY_PHONE_NUMBER : Value is your Twilio Phone Number

### Connect Serverless Function to Phone Number

1. In your console go to Phone Numbers > Click Your Phone Number

2. Under Messaging, A MESSAGE COMES IN, Select Function, Your Service Name, Environment and Function path & Save

## Text your zip code or city to your Twilio phone number and get a recommendation!
