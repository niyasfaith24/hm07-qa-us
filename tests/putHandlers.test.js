test('status should be 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatus = response.status;
    } catch (error) {
    
    }

});

test('Response Body should change the price of the product', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
        console.log('Response Body:', actualResponseBody); // Add a console log to debug the response
    } catch (error) {
        
    }
    
});

