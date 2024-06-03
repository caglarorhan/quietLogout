# QuietLogout

QuietLogout is a JavaScript library that logs out users from a web application or web page when they have been inactive for a specified period of time. Inactivity is defined as no mouse movements, clicks, or similar user actions.


## Usage

First, include the library in your HTML file:

` <script src="quietLogout.js"></script>`


Then, you can initialize the library in your JavaScript code:
` quietlogout.init();`


## Configuration

The `init` function takes an options object with the following properties:

- `timeout`: The period of inactivity (in seconds) after which the user will be logged out. Default is 60000 (1 minute).
- `logoutURL`: An url that make this user logged out at the serverside.
- `redirectURL`: An url to be redirected after a successful response retrieved.

## License

QuietLogout is licensed under the MIT License. See the `license.md` file for more details.
