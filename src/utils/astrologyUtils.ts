export const getZodiacSign = (birthdate: Date): string => {
    const month = birthdate.getMonth() + 1; // Months are zero-based
    const day = birthdate.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Pisces';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Sagittarius';
    } else {
        return 'Capricorn';
    }
};

export const fetchAstrologyForecast = async (zodiacSign: string): Promise<string> => {
    // Placeholder for fetching astrology forecast from an API
    const response = await fetch(`https://astrology-api.com/forecast/${zodiacSign}`);
    const data = await response.json();
    return data.forecast;
};