let aqi = 250;

console.log("Index is: " + aqi);

if (aqi >= 0 && aqi <= 50) {
    console.log("Good!");
} else if (aqi >= 51 && aqi <= 100) {
    console.log("Moderate")
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive groups")
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy")
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very unhealthy")
} else {
  console.log("Hazardous")
}

