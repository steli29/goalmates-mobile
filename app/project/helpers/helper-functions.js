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

export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval === 1 ? `${interval  } year ago` : `${interval  } years ago`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval === 1 ? `${interval  } month ago` : `${interval  } months ago`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval === 1 ? `${interval  } day ago` : `${interval  } days ago`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval === 1 ? `${interval  } hour ago` : `${interval  } hours ago`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval === 1 ? `${interval  } minute ago` : `${interval  } minutes ago`;
    }

    return 'Just now';
}

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
        uri: `data:image/png;base64,${base64Str}`,
    };
    return obj;
};
