import create from "zustand"


const useStore = create((set)=>({
    
    users : [
       {
           id:1,
           userFirstName:"juanito",
           userLastName:"ortiz",
           userAge:30
       },
       {
           id:2,
           userFirstName:"ernesto",
           userLastName:"contretaz",
           userAge:18
       }
    ],
    addUser: ( newUserObj )=> set((state)=> ({
        
        users : [
            ...state.users, 
            {
                ...newUserObj,
                id: (state.users.length)+1,
                
            }
        ]})
    )



}))
export default useStore