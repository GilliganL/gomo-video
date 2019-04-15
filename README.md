# Gomo Coding Challenge
## Lynsey Powell

This challenge sends video fragment data to a backend endpoint which processes the data to calculate the Unique View Time (UVT). It also returns the unique ranges of viewing time. 

### Dependencies
Please install Node 
Instructions can be found here:
https://nodejs.org/en/

Please run **npm install** to install the following dependencies after installing node

Express
body-parser

### How to run 

Please open the site by going to http://localhost:8080/index.html after starting your by using the command **npm start**

### Design
After thinking over the challenge I decided to pass a JSON object from the client side to a backend since that is most likely how this would be done in production. Without setting up a database I sent the whole object at once for processing. The endpoint takes this data and calculates the UVT by first determining the ranges, removing any overlapping times. The total time is then calculated from these ranges. The results are displayed in a very, very basic html page with just enough styling to be organized and responsive. 

### Testing
In testing I would use Mocha and Chai to add through testing of the endpoint. This would include processing of bad inputs, no inputs, calculations, edge cases, and status codes. 
