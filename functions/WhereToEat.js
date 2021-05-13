let axios = require("axios");

exports.handler = function (context, event, callback) {
  let body = event.Body.trim();

  axios({
    url: `https://api.yelp.com/v3/businesses/search?location=${body}&open_now=true&sort_by=rating&categories=restaurants`,
    headers: { Authorization: `Bearer ${context.YELP_API_KEY}` },
  })
    .then((response) => {
      if (response.status == 200) {
        // Create variable named businesses from response
        const { businesses } = response.data;

        // Generate a random index from the businesses array
        let randomBusinessesIdx = Math.floor(Math.random() * businesses.length);

        // Choose a random business from businesses
        let chosenBusiness = response.data.businesses[randomBusinessesIdx];

        // Return business name & Yelp URL
        return callback(null, `${chosenBusiness.name} - ${chosenBusiness.url}`);
      }
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
};
