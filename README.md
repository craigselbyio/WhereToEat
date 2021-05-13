# Where To Eat?

Nothing is Impossible... Expect deciding where to eat!
Send a text message with your zip code and get a recommended restaurant using Twilio and Yelp!

<div align="center">
<img src="assets/wheretoeat.gif" alt="Where To Eat Demo">
</div>

## Sign up with Yelp

- Create an app to obtain an [API Key](https://www.yelp.com/developers)

## Get Started with Twilio

1. [Sign Up](https://www.twilio.com/try-twilio)

2. After signing up, buy a phone number in your console, go to Phone Numbers > Buy a Number

### Create Serverless Function

In your console go to Functions > Create Service > Choose a Name > Add + </br>

functions / WhereToEat.js is the code for this serverless function

> You can also deploy your local project with the [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/deploying)

## Environment Variables

After creating your serverless function go to Settings > Environment Variables

1. Add YELP_API_KEY : Value is your Yelp API key

2. Add MY_PHONE_NUMBER : Value is your Twilio Phone Number

## Connect Serverless Function to Phone Number

1. In your console go to Phone Numbers > Click Your Phone Number

2. Under Messaging, A MESSAGE COMES IN, Select Function, Your Service Name, Environment and Function path & Save

## Text your zip code or city to your Twilio phone number and get a recommendation!
