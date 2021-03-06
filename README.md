# Re-vents App

An exercise followed from Neil Cummings' React, Redux and Firestore course. It turns out to a social event app.

## Installation notes

Since I have excluded the API key, the project won't work directly as you install it. You need to create three files: env.js, keys.js, and firebase.js

### About env.js

This file should be in the /public/ folder. It will have the following code:

```javascript
const googleMaps = document.getElementById('googleMaps')

googleMaps.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places'
```

Change the YOUR_API_KEY_HERE part with your actual API key.

### About keys.js

This file should be in the /src/app/config/ folder. It will have the following code:

```javascript
export const GOOGLE_MAPS = 'YOUR_API_KEY_HERE'
```

Change the YOUR_API_KEY_HERE part with your actual API key.

### About firebase.js

This file should be in the /src/app/config/ folder. It will have the following code:

```javascript
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
```

Change the strings with your actual app credentials. You can obtain them from the project settings.