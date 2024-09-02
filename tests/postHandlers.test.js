
const config = require('../config');

const requestBody = {
  "products": [
    {
      "id": 5,
      "quantity": 1
    },
    {
      "id": 4,
      "quantity": 5
    }
  ]
}

test('Check Status', async () => {
  let postStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    postStatus = response.status;
  } catch (error) {
    console.error('Fetch error:', error);
  }
  expect(postStatus).toBe(200);
});

