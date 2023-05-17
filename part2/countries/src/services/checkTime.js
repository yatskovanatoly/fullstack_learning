import * as fs from 'fs';

const file_path = '../weatherData.json';

      // Read the contents of the file
      const contents = fs.readFileSync(file_path, 'utf8');
      let data = JSON.parse(contents);
const DataEraser = () => {
  const eraseData = () => {
    try {
      // Path to your JSON file
      
      console.log(data);

      // Remove the data you want to erase
      data = { "test":[]};

      // Write the updated data to the file
      fs.writeFileSync(file_path, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
    }
  }

  const checkElapsedTime = () => {
    const hourInMilliseconds = 10000
    // const hourInMilliseconds = 60 * 60 * 1000; // 1 hour
    const launchTime = localStorage.getItem('launchTime');
    const currentTime = Date.now();

    if (!launchTime) {
      // Set the launch time
      localStorage.setItem('launchTime', currentTime);
    } else {
      // Check if one hour has elapsed since the launch time
      const elapsed = currentTime - Number(launchTime);

      if (elapsed >= hourInMilliseconds) {
        // Erase the data
        eraseData();
        // Reset the launch time
        localStorage.setItem('launchTime', currentTime);
        console.log('Data erased!');
      } else {
        console.log(`Time remaining: ${hourInMilliseconds - elapsed} ms`);
      }
    }
  }
  checkElapsedTime()
}

export default DataEraser;