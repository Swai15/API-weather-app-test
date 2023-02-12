// Write the functions that hit the API.You’re going to want functions that can take a location and return the weather data for that location.For now,just console.log() the information.;




export default async function accessApi() {
  const location = "London";
  const key = "376608a803a41fcac5a52ce33f1139ae";

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`);
  const result = await data.json();
  console.log(result);
}

