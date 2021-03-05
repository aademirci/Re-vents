# Re-vents App

An exercise followed from Neil Cummings' React, Redux and Firestore course. It turns out to a social event app.

## Installation notes

Since I have excluded the API key, the project won't work directly as you install it. You need to create two files: env.js and keys.js

### About env.js

This file should be in the /public/ folder. It will have the following code:

```javascript
const googleMaps = document.getElementById('googleMaps')

googleMaps.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places'
```

Change the YOUR_API_KEY_HERE part with your actual API key.

### About keys.js

This file should be in the /src/app/api/ folder. It will have the following code:

```javascript
export const GOOGLE_MAPS = 'YOUR_API_KEY_HERE'
```

Change the YOUR_API_KEY_HERE part with your actual API key.