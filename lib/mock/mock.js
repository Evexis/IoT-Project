const fs = require('fs');
function createRandomData(numberOfSamples) {
    let mockData = [];
    for (let i = 0; i < numberOfSamples; i++) {
        mockData.push({
            deviceId: Math.floor(Math.random() * 5),
            date: new Date(),
            location: {
                latitude: {
                    value: 50 + Math.random(),
                    direction: 'N'
                },
                longitiude: {
                    value: 19 + Math.random(),
                    direction: 'E'
                }
            },
            results: {
                pm1: {
                    value: Math.random() * 500,
                    unit: "ug/m3"
                },
                pm25: {
                    value: Math.random() * 500,
                    unit: "ug/m3"
                },
                pm10: {
                    value: Math.random() * 500,
                    unit: "ug/m3"
                },
                formaldehyde: {
                    value: Math.random() * (2),
                    unit: "mg/m3"
                },
                temperature: {
                    value: Math.random() * (99 + 20) - 20,
                    unit: "°C"
                },
                humidity: {
                    value: Math.random() * 100,
                    unit: "%"
                },
            }
        });
    }
    return mockData;
}
function saveDataToFile(data) {
    fs.writeFile('./mock-data.ts', data, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Mock data generated");
    });
}
function generateMockData(numberOfSamples) {
    const mockData = createRandomData(numberOfSamples);
    saveDataToFile("export const samples =" + JSON.stringify(mockData));
}
generateMockData(500);
//# sourceMappingURL=mock.js.map