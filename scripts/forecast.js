const key = "ekwVRqLgIDfF6HxX9YDtNm4GJB9xO5hy"

const getWeather = async (city) => {

  const base = `http://dataservice.accuweather.com/currentconditions/v1/`
  const query = `${city}?apikey=${key}`

  const response = await fetch(base + query, {
    mode: "cors"
  })

  const data = await response.json()

  return data[ 0 ]
}

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query, {
    mode: "cors"
  });
  const data = await response.json();

  return data[ 0 ]
}



