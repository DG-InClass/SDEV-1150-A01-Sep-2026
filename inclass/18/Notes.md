# HTTP and Server-Side Endpoints

- **HTTP** - HyperText Transfer Protocol
- **API** - Application Programming Interface
- **REST** - Representation State Transfer
  - Key to REST APIs are the *verbs* or *actions* supported by HTTP
    - GET (the default)
    - POST - send new information
    - PUT - send updated information - to replace
    - PATCH - send updated information - to update one field/property
    - DELETE - removing information
    - QUERY - like a GET, but with the ability to specify search criteria in the *body* of the request
  - These verbs/actions are available as the *intent* of the request
- **URL** - Uniform Resource Locator
- **URI** - Uniform Resource Identifier

## JSON Endpoints

JSON is a kind of subset of JavaScript. It's a lot like JavaScript *object literal* syntax. JSON is more restrictive than JavaScript.

JSON files have the extension of `.json`.

> **J**ava**S**cript **O**bject **N**otation

- When we talk about JSON, we're talking about a *string* representation of JavaScript data.
- Data properties are stored as name/value pairs.
  - Property names must be in double quotes
  - String values must be in double quotes; other types numbers or boolean (`true`/`false`) or arrays or objects or `null`
- JSON can be either an **object** or an **array**.
- JSON does not allow for
  - comments
  - trailing commas
  - functions
  - variables
  - expressions

### Compare and Contrast

```js
// JavaScript object literal
const body = {
    name: 'Earth',
    category: 'planet',
    orbitalPeriod: `${365.25} Earth days`,
};
```

```json
{
    "name": "Earth",
    "category": "planet",
    "orbitalPeriod": "365.25 Earth days"
}
```

----

## Localhost and Ports

- IP Address (IPV4 or IPV6) - Identify the specific computer on the network
- Port - A specific entry point into that computer
  - The default port for `http` is **80**. The default port for `https` is **443**.
- An IP address and a port constitute a **socket**
- A special "domain name" is `localhost`, which maps to the IP address of 127.0.0.1 - the *home* address - **your computer**
  - An example would be `http://localhost:3000`

----

## REST Client Extension for VS Code

> https://marketplace.visualstudio.com/items?itemName=humao.rest-client

## Serving JSON

A nice dev-suitable library for serving JSON data:

```ps
pnpm add -D -E json-server@1.0.0-beta.15
```
