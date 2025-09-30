import React from 'react';
import './AstrologyForecast.css'; // Import the new CSS file for styling

interface AstrologyForecastProps {
    birthdate: string;
}

const AstrologyForecast: React.FC<AstrologyForecastProps> = ({ birthdate }) => {
    const [forecast, setForecast] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchForecast = async () => {
            // Placeholder for fetching astrology forecast based on birthdate
            //const response = await fetch(`https://api.astrology.com/forecast?birthdate=${birthdate}`);
            const response = await fetch('https://aztro.readthedocs.io/en/latest/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setForecast(data.forecast);
        };

        fetchForecast();
    }, [birthdate]);

    return (
        <div className="forecast-container">
            <div className="forecast-card">
                <h2 className="forecast-title">Your Astrology Forecast for Today</h2>
                {forecast ? (
                    <p className="forecast-text">{forecast}</p>
                ) : (
                    <div className="loading-spinner"></div>
                )}
            </div>
        </div>
    );
};

export default AstrologyForecast;