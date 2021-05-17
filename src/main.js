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
const usersCollection = db.collection('users')
const calendarCollection = db.collection('calendar')



// Create
export const createUser = user => {
    return usersCollection.add(user)
}
export const createCalendar = calendar => {
    return calendarCollection.add(calendar)
}
// select single Read
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}
export const getCalendar = async id => {
    const calendar = await calendarCollection.doc(id).get()
    return calendar.exists ? calendar.data() : null
}
// Update
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}
export const updateCalendar = (id, calendar) => {
    return calendarCollection.doc(id).update(calendar)
}

// Delete
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}
export const deleteCalendar = id => {
    return calendarCollection.doc(id).delete()
}

// mass Read
export const useLoadUsers = () => {
    const Users = ref([])

    const close = usersCollection.onSnapshot(snapshot => {
        Users.value = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    onUnmounted(close)
    return Users
}
export const useLoadCalendars = () => {
    const items = []
    calendarCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data())
            //doc.data()['id']=`${doc.id}`
            const x = doc.data()
            x['id'] = doc.id
            items.push(x)
        })
    })
    return items
    /* const Calendars = ref([])

    const close = calendarCollection.onSnapshot(snapshot => {
        Calendars.value = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    onUnmounted(close)
    return Calendars */
}







createApp(App).use(store).use(router).mount('#app')
