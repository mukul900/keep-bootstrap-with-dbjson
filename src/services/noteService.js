

async function addNotes(newNote){
        // Store note information in db.json
        // endpoiunt post http://localhost:4000/notes

      return  fetch("http://localhost:4000/notes",{
          method: "post",
         
          headers:{
              'content-Type':"application/json"
          },
          body: JSON.stringify(newNote),
      });

    }

 async function  getAllNotes(){
        // endpoint get http://localhost:4000/notes

        return fetch("http://localhost:4000/notes")
        .then(response=>{
           if(response.ok){
               return response.json();
           }
        })
        .then(json=>{
            const notesArray= json;
          
            return notesArray;
        })
        .catch(error=>{
return error;
        })
    }


module.exports={
    addNotes,
    getAllNotes
}
