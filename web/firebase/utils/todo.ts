import '@/firebase/firebase';
import "firebase/firestore";
import firebase from "firebase/app";
const db = firebase.firestore();

export type ToDo = {
  id: number,
  title: string,
  date: string,
  description: string,
  type: string,
}

export const getToDos = async (): Promise<ToDo[]> => {
  const toDos = new Array<ToDo>();
  const querySnapshot = await db.collection("todo").get();
  querySnapshot.forEach((doc) => {
    const toDo = doc.data() as ToDo;
    toDos.push({ ...toDo});
  });
  return toDos;
};

export const putToDo = async (todo: ToDo): Promise<void> => {
  await db.collection("todo").add({
    id: todo.id,
    title: todo.title,
    date: todo.date,
    description: todo.description,
    type: todo.type,
  }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  }).catch((error) => {
    console.error("Error adding document: ", error);
  });
};
