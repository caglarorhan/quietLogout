# QuietLogout

QuietLogout is a JavaScript library that logs out users from a web application or web page when they have been inactive for a specified period of time. Inactivity is defined as no mouse movements, clicks, touchpad actions or similar user actions.


## Usage

First, include the library in your HTML file:

` <script src="quietLogout.js"></script>`


Then, you can initialize the library in your JavaScript code:
` quietlogout.init();`

- see [sample page](https://caglarorhan.github.io/quietLogout/)

## Configuration

The `init` function takes an options object with the following properties:

- `timeout`: The period of inactivity (in seconds) after which the user will be logged out. Default is 300 (5 minute).
- `logoutURL`: An url that make this user logged out at the serverside.
- `redirectURL`: An url to be redirected after a successful response retrieved.
- `tryLimit`: The number of times the library will try to logout the user. Default is 3. 
- `afterTryLimitReachedURL`: An url to be redirected after the try limit is reached. Default is https://www.google.com

## License

QuietLogout is licensed under the MIT License. See the `(license.md)[./license.md]` file for more details.
