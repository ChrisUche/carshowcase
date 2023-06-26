
export async function fetchCars() {
    const headers =  {
		'X-RapidAPI-Key': 'fe16682df8mshe88a39694aae103p1c514cjsnbdbbe78d7e94',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;


}