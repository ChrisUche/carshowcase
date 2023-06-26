
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

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay =50; // base rental price per day in dollars
    const mileageFactor = 0.1; // additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    //calculate aditional rate based on mileage & age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear - year ) * ageFactor;

    //Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageFactor;

    return rentalRatePerDay.toFixed(0);

};