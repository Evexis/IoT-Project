interface Data {
    id: string;
    date: Date;
    location: { //D.D° format
        latitude: {
            value: number;
            direction: LatitiudeDirection;
        },
        longitiude: {
            value: number;
            direction: LongitudeDirection;
        }
    }
    result: {
        pm1: MeasuredValue;
        pm25: MeasuredValue;
        pm10: MeasuredValue;
        formaldehyde: MeasuredValue;
        temperature: MeasuredValue;
        humidity: MeasuredValue;
    }
}

interface MeasuredValue {
    value: number;
    unit: number;
};

enum LatitiudeDirection { N, S }

enum LongitudeDirection { W, E }

