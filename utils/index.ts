import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit,fuel } = filters;

    const headers =  {
		'X-RapidAPI-Key': 'fe16682df8mshe88a39694aae103p1c514cjsnbdbbe78d7e94',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
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
    const ageRate = (new Date().getFullYear() - year ) * ageFactor;

    //Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageFactor;

    return rentalRatePerDay.toFixed(0);

};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const { make, year, model} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
    
    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

        searchParams.set(type, value)
    

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      return newPathname
}