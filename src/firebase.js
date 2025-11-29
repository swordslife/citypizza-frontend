import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtNZHNmVHtT6hNYblbG4zulYQIfyLJloA",
  authDomain: "citypizza-3eb23.firebaseapp.com",
  projectId: "citypizza-3eb23",
  storageBucket: "citypizza-3eb23.firebasestorage.app",
  messagingSenderId: "916447699076",
  appId: "1:916447699076:web:5f82e3d86efe91325ae2d1",
  measurementId: "G-PNJ0ZEMMMR"
};
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setFcmToken) => {
    return getToken(await messaging, {
        vapidKey:
            '',
    })
        .then((currentToken) => {
            if (currentToken) {
                setFcmToken(currentToken)
            } else {
                setFcmToken()
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )
export const auth = getAuth(firebaseApp)