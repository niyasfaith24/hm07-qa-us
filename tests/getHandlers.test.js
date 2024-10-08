const config = require('../config');

// Test status code 200
test('should return status code 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
        console.log('Response Status Code:', response.status);  // Debugging linenpx
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

// Test response contains data
test('should return expected response data', async () => {
    let responseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        responseBody = await response.json();
        console.log('Response Body:', responseBody);  // Debugging line
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200)

});