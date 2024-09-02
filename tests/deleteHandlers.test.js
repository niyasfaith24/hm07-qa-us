

const config = require('../config');

test('status should be 200', async () => {
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

        // Check status code
        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
	expect(actualStatus).toBe(200)
});

test('response body should contain expected data', async () => {
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

        // Extract response body
        const responseBody = await response.json();
        
        // Check response body
        expect(responseBody).toEqual({ ok: true });
    } catch (error) {
        console.error(error);
    }
	expect(actualStatus).toBe(200)
});