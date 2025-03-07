function manipulateBodyFilter(r, data, flags) {
    try {
        // If no data is received, pass it through unchanged
        if (!data) {
            r.sendBuffer("", flags);
            return;
        }

        // Log the raw data received
        r.log("Received chunk: " + data);

        // Accumulate the data (since body_filter receives chunks)
        let body = data;

        // Parse the accumulated data as JSON
        let parsedBody = JSON.parse(body);

        // Check if parsedBody.value exists and is a number
        if (parsedBody.value === undefined || typeof parsedBody.value !== 'number') {
            r.error("Invalid response format: 'value' missing or not a number");
            r.sendBuffer("Invalid response format: 'value' missing or not a number", flags);
            return;
        }

        // Add 10 to the value
        parsedBody.value = parsedBody.value + 10;

        // Send the modified JSON back
        r.sendBuffer(JSON.stringify(parsedBody), flags);
    } catch (e) {
        r.error("NJS Error in body filter: " + e.message);
        r.sendBuffer("Internal Server Error: " + e.message, flags);
    }
}

export default { manipulateBodyFilter };
