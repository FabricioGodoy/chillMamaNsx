import { getFirestore, doc , getDoc } from "firebase/firestore";

// Obtener una referencia a la base de datos Firestore
const db = getFirestore(app);

// Hacer una consulta para obtener datos de una colección
const querySnapshot = await getDoc(collection(db, "nombreDeTuColeccion"));

// Iterar a través de los documentos
querySnapshot.forEach((doc) => {
  console.log('ACAAAAAAAAAAAAA', doc.id, " => ", doc.data());
});