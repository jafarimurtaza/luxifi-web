/**
 * Formats an ISO date string into a readable format
 * @param {string} date - ISO date string (e.g., "2025-08-18T14:42:08.602Z")
 * @returns {string} - Formatted date (e.g., "August 18, 2025")
 */
export function formatDate(date) {
  if (!date) return "";

  try {
    const dateObj = new Date(date);

    // Check if date is valid
    if (isNaN(dateObj.getTime())) {
      return "";
    }

    // Format options
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return dateObj.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}

/**
 * Formats an ISO date string into a short readable format
 * @param {string} date - ISO date string
 * @returns {string} - Short formatted date (e.g., "Aug 18, 2025")
 */
export function formatDateShort(date) {
  if (!date) return "";

  try {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      return "";
    }

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return dateObj.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}

/**
 * Formats an ISO date string with time
 * @param {string} date - ISO date string
 * @returns {string} - Formatted date with time (e.g., "August 18, 2025 at 2:42 PM")
 */
export function formatDateTime(date) {
  if (!date) return "";

  try {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      return "";
    }

    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = dateObj.toLocaleDateString("en-US", dateOptions);
    const formattedTime = dateObj.toLocaleTimeString("en-US", timeOptions);

    return `${formattedDate} at ${formattedTime}`;
  } catch (error) {
    console.error("Error formatting date time:", error);
    return "";
  }
}
