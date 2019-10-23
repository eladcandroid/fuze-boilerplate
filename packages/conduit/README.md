# Micro-frontends with CONDUIT demo app

## Pitfalls
- Ensure package.json has a "start" script. The original project does not have one. Let's change that.
- We can rename the project's name on the package.json
- Enable CORS for the gulp dev-server.
- Remove the url-prefixing from the router
- Disable the default route fallback to "home". We will now have more routes that aren't part of the legacy app.
