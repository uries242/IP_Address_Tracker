// fetch logic


var apiKey = "at_jSpNDc9OnlncMeCSGQN9AWEmulrNX";

async function getIpData(ipAddress) {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`);
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.log("Unable to retrieve data", error);
  }
}


//  CALL FUNCTION
// getIpData("209.85.231.104") 
// .then(data => console.log(data));
