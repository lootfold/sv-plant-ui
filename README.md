# App URL

Project is deployed at `https://svplant.azurewebsites.net/index.html`

# Features implemented

- display all plants on home page
- show alerts if any plant is not watered for more than 6 hours
  - user should manully click and remove the alert for each plant
- Watering a plant
  - user can click on start button to water a plant
  - a toast message will be displayed for 10 seconds after which app will make the request to stop watering
  - user can manually stop watering before the timer ends
  - user should wait for 30 seconds before watering the plant again. If they try to water before that then an error message will be displayed

# Launching the project

run the following command from the root directory of the project:

`npm run build`

Api should be available on `http://localhost:3000/`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
