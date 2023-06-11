const data = [{ "country": "Japan", "airportName": "Tokyo International Airport", "airportCode": "HND" }, { "country": "China", "airportName": "Shenzhen Bao'an International Airport", "airportCode": "SZK" }, { "country": "Thailand", "airportName": "Suvarnabhumi International Airport", "airportCode": "BKK" }, { "country": "Japan", "airportName": "Osaka International Airport", "airportCode": "ITM" }, { "country": "Thailand", "airportName": "Don Mueang International Airport", "airportCode": "DMK" }, { "country": "Japan", "airportName": "Narita International Airport", "airportCode": "NRT" }, { "country": "China", "airportName": "Beijing Capital International Airport", "airportCode": "PEK" }, { "country": "Vietnam", "airportName": "Tan Son Nhat International Airport", "airportCode": "SGN" }, { "country": "China", "airportName": "Chongqing Jiangbei International Airport", "airportCode": "CGK" }, { "country": "Malaysia", "airportName": "Kuala Lumpur International Airport", "airportCode": "KUL" }, { "country": "China", "airportName": "Shanghai Pudong International Airport", "airportCode": "PVG" }, { "country": "Malaysia", "airportName": "Penang International Airport", "airportCode": "PEN" }, { "country": "Singapore", "airportName": "Changi Airport", "airportCode": "SIN" }, { "country": "Thailand", "airportName": "Phuket International Airport", "airportCode": "HKT" }, { "country": "Vietnam", "airportName": "Noi Bai International Airport", "airportCode": "HAN" }, { "country": "Japan", "airportName": "Kansai International Airport", "airportCode": "KIX" }];


// Function to format the input JSON
function sortData(data) {

  // Initialise the output array
  let output = [];

  // Loop through each individual airport
  for (const element of data) {

    // Preparing the airport object
    let airportObj = {
      "airportName": element.airportName,
      "airportCode": element.airportCode
    }

    // Find the country in the output
    let countryObj = output.find(e => e.country === element.country);

    // If the country does not exist, initialise it and populate the airports array
    if (!countryObj) {
      output.push({ country: element.country, airports: [airportObj] });

      // If country already exists, then just add the airport object. No need to add the country again
    } else {
      countryObj.airports.push(airportObj);

      // Sort the airports in alphabetical order
      countryObj.airports.sort((a, b) => {
        return a.airportCode.localeCompare(b.airportCode);
      });
    }

    // Sort the countries in alphabetical order
    output.sort((a, b) => {
      return a.country.localeCompare(b.country);
    });

  };

  // Output the expected JSON
  console.log(output);
  //return output;

}

sortData(data);
