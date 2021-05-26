import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'


var config = {
    apiKey: "AIzaSyBZySek8IcmJIf-973L1Bj7ZNyU-u116ok",
    authDomain: "vesterhavsgruppen-16c58.firebaseapp.com",
    projectId: "vesterhavsgruppen-16c58",
    storageBucket: "vesterhavsgruppen-16c58.appspot.com",
    messagingSenderId: "83457068600",
    appId: "1:83457068600:web:1bd3bdb683c644bfdea0cd"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore()
// Lav en af dem her efter vær collection!
const calendarCollection = db.collection('calendar')
const frontpageCollection = db.collection('frontpage')



// Create
export const createCalendar = calendar => {
    return calendarCollection.add(calendar)
}
// select single Read
export const getCalendar = async id => {
    const calendar = await calendarCollection.doc(id).get()
    return calendar.exists ? calendar.data() : null
}
export const getFrontpage = async () => {
    const frontpage = await frontpageCollection.doc('Gad3FkZnIqGBDm3vCONl').get()
    return frontpage.exists ? frontpage.data() : null
}
// Update
export const updateCalendar = (id, calendar) => {
    return calendarCollection.doc(id).update(calendar)
}
export const updateFrontpage = (frontpage) => {
    return frontpageCollection.doc('Gad3FkZnIqGBDm3vCONl').update(frontpage)
}

// Delete
export const deleteCalendar = id => {
    return calendarCollection.doc(id).delete()
}

// mass Read
export const useLoadCalendars = () => {
    const Calendars = ref([])

    const close = calendarCollection.onSnapshot(snapshot => {
        Calendars.value = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    onUnmounted(close)
    return Calendars
}


createApp(App).use(store).use(router).mount('#app')
