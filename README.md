bandwidthCalculator
==================

This non-blocking script use a webworker to calculate approximatively the bandwidth of the user.

Take detectbandwidth.html as a tutorial on how to create the webworker, send the file url to test and receive the result.

##detectbandwidth.js

This script receive the file to test and get its filesize by sending an HTTP HEAD request (very fast).

Once done, it downloads the file and calculate the time taken. It then calculates the rate in kb/s and send the result as a json :

```
{'fileSize':1246184,'rate':54181.9,'duration':23}
```

- fileSize : The size in octets of the test file
- rate : The rate in kb/s that can handle this connection
- duration : The duration in ms taken to download the file