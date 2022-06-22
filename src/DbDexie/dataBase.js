import Dexie from "dexie"

export const db = new Dexie("usersDataBase");


db.version(1).stores({
    users: "++id, firstName, lastName, age",
})

