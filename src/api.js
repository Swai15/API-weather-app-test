// Write the functions that hit the API.You’re going to want functions that can take a location and return the weather data for that location.For now,just console.log() the information.;



let arrayEx = [];

export default async function accessApi() {
  const location = "London";
  const key = "376608a803a41fcac5a52ce33f1139ae";
  const tempUnit = "metric";    // imperial

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=${tempUnit}`);
  const result = await data.json();
  console.log(result);

  //location
  const description = result.weather[0].description;
  const feelsLike = result.main.feels_like;
  const humidity = result.main.humidity;

  console.log(humidity);
}





// Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
