
export const requestOptions = (data) => ({
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    mode: 'no-cors',
});