
const date = new Date(); // Gets the current date and time



console.log(date.getDate());       
// 📌 Returns the day of the month (1–31)
// 🧪 Example Output: 23

console.log(date.getDay());        
// 📌 Returns the day of the week (0–6) → 0 = Sunday, 1 = Monday...
// 🧪 Example Output: 1 (if today is Monday)

console.log(date.getFullYear());   
// 📌 Returns the full year (e.g., 2025)
// 🧪 Example Output: 2025

console.log(date.getMonth());      
// 📌 Returns the month (0–11), so January = 0, June = 5
// 🧪 Example Output: 5 (June)

console.log(date.getTime());       
// 📌 Returns the number of milliseconds since Jan 1, 1970 (Unix timestamp)
// 🧪 Example Output: 1750669523190




console.log(date.toDateString());        
// 📌 Returns date in readable format
// 🧪 Output: "Mon Jun 23 2025"

console.log(date.toISOString());         
// 📌 Returns ISO standard format (used in APIs)
// 🧪 Output: "2025-06-23T06:45:23.190Z"

console.log(date.toLocaleDateString());  
// 📌 Returns date in local format based on your region
// 🧪 Output: "6/23/2025" (may vary by system locale)





console.log(date.toLocaleTimeString());
// 📌 Returns only the time part in local format
// 🧪 Output: "11:45:23 AM"

console.log(date.toTimeString());
// 📌 Returns time with time zone
// 🧪 Output: "11:45:23 GMT+0500 (Pakistan Standard Time)"

console.log(date.toUTCString());
// 📌 Returns UTC format (used in international apps)
// 🧪 Output: "Mon, 23 Jun 2025 06:45:23 GMT"



console.log(Date.now());
// 📌 Returns the current timestamp in milliseconds since 1970
// 🧪 Output: 1750669523190
