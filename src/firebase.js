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
  const projectCollection = db.collection('projects')



  // Create
  export const createProject = project => {
      return projectCollection.add(project)
  }

  // select single Read
  export const getProject = async id => {
    const project = await projectCollection.doc(id).get()
    return project.exists ? project.data() : null
  }

  // Update
  export const updateProject = (id, project) => {
      return projectCollection.doc(id).update(project)
  }

  // Delete
  export const deleteProject = id => {
      return projectCollection.doc(id).delete()
  }

  // mass Read
  export const useLoadProjects = () => {
      const projects = ref([])

      const close = projectCollection.onSnapshot(snapshot => {
          projects.value = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          }))
      })
      onUnmounted(close)
      return projects
  }





