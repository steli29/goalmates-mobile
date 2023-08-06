export const getDateAfterMonths = (months) => {
    // Create a new date object for the current date
    const currentDate = new Date();

    // Get the month and year from the current date
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Calculate the target month and year
    let targetMonth = currentMonth + months;
    const targetYear = currentYear + Math.floor(targetMonth / 12); // Adjust the year if necessary
    targetMonth %= 12; // Normalize the month to 0-11

    // Set the new month and year
    currentDate.setMonth(targetMonth);
    currentDate.setFullYear(targetYear);

    // Return the updated date
    return currentDate;
};

export const formatDate = (date) => {
    // Extract the day, month, and year components
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const year = date.getFullYear();

    // Format the date in "Day Month Year" format
    const formattedDate = `${day} ${month} ${year}`;

    // Return the formatted date
    return formattedDate;
};

export const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
};

export const convertJavaByteArrayToJS = (javaByteArray) => {
    const hexValues = javaByteArray.substring(3).split('');
    const byteArray = new Uint8Array(
        hexValues
            .map((value, index) => parseInt(value + hexValues[index + 1], 16))
            .filter((value) => !Number.isNaN(value))
    );
    return byteArray;
};

export const convertBase64ToImage = (base64Str) => {
    const obj = {
        uri: `data:image/png;base64,${base64Str}`
    }
    return obj;
}
