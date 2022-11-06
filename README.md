## Usage:
```
# Install dependencies
npm install

# Start server
node server.js
```
## API details
- GET /
    - returns "Hello World"
- GET /load
    - query params:
        - scale -> time(ms) for which CPU will be blocked (default=random between 0ms to 10ms)
    - returns "OK" after execution

## Notes:
- App runs on port 8081
- Tested with node v14 and npm v7
