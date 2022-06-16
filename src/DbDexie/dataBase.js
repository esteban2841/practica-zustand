import Dexie from "dexie"

export const db = new Dexie("usersDataBase");


db.version(1).stores({
    users: "++id, firstName, lastName, age",
})

db.open().catch((err)=>{
    console.log("failed to open db: " + err.stack || err)
})

db.users.add({firstName: "juancho", lastName: "perez", age: 27})