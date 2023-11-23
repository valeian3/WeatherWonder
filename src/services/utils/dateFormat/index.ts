export function getDayOfWeek(dateString: string): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Create a Date object from the provided date string
  const dateObject = new Date(dateString);

  // Get the day of the week index (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = dateObject.getDay();

  // Return the day of the week based on the index
  return daysOfWeek[dayIndex];
}
