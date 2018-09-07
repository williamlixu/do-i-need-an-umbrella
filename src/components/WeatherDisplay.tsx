// tslint:disable:no-console
import * as React from 'react';

interface IProps {
    city: string,
    country: string,
    error: string,

    // Weather info:
    isRaining: boolean,
    condition: string,
    description: string,
    temp: number,
    wind: number
}

interface IDisplayProps {
    city: string,
    country: string,
    isRaining: boolean,
    condition: string,
    description: string,
    temp: number
    wind: number,
}

function Display(props : IDisplayProps) : any {
    let result;
    if(props.isRaining) {
        result = <div>
            <img src="http://placehold.it/400x400" alt="umbrella" />
            <p>Yes, it's raining.</p>
        </div>
    } else {
        result = <div>
            <img src="http://placehold.it/400x400" alt="happy sun" />
            <p>No, it's not raining.</p>
        </div>
    }
    return(
        <div>
            {result}
            <p>{props.condition}</p>
            <p>{props.description}</p>
            <p>The temperature is {props.temp}&deg;C</p>
            <p>The wind speed is {props.wind} km/h</p>
        </div>
    );
}

class WeatherDisplay extends React.Component<IProps,{}> {
    public render() {
        let display;
        if (this.props.error) {
            // Form submitted with error
            display = <p className="errorMessage">{this.props.error}</p>
        } else if (this.props.city && this.props.country) {
            // Form has been submitted
            display = <Display 
                isRaining   = {this.props.isRaining}
                condition   = {this.props.condition}
                description = {this.props.description}
                temp        = {this.props.temp}
                wind        = {this.props.wind}
            />
        }
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default WeatherDisplay;