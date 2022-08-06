

const addnote = document.querySelector("#addnote");
const notes_container=document.querySelector("#notes_container");
const backgroundcolors= document.getElementById("backgroundcolor");
const bgcolors=document.getElementById("bgcolor");
const textcolors=document.getElementById("textcolor");
const textareas = document.getElementsByClassName("text__area");



function bgcolor(e) {
    // console.log(e);
    // let bgdcolorvalue= e.value;
    e.parentElement.nextElementSibling.nextElementSibling.firstChild.style.backgroundColor=e.value;
}

function Textcolor(event){
        // console.log(event);
    //    let Textcolorvalue= event.value;
       event.parentElement.nextElementSibling.nextElementSibling.firstChild.style.color=event.value;
     }




addnote.addEventListener("click", function(){
    addNote();
})

const saveNotes = () => {
    const notes=document.querySelectorAll(".note textarea")
    
    
    const data=[];
    notes.forEach((note) => {
        data.push(note.value);
        // data.push(note.firstElementChild.lastElementChild.style.backgroundColor = notes_container.firstElementChild.firstElementChild.firstElementChild.value);
    });
    

    if(data.length === 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
   
}



const addNote = (text="") => {
   const note=document.createElement("div");
   note.classList.add("note");
   note.innerHTML=`
   <div class="toolbar">
            <input type="color" class="bgcolor" id="backgroundcolor">
            <input type="color" class="textcolor" id="Textcolor">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea id="emoji" class="text__area" placeholder="Type your notes here....">${text}</textarea>
   `;


    note.querySelector(".bgcolor").addEventListener("change", function(e){
        bgcolor(this);
    })

    note.querySelector(".textcolor").addEventListener("change", function(event){
        Textcolor(this);
    })

    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
        saveNotes();
    })

    note.querySelector(".save").addEventListener("click", function(){
        saveNotes();
    })

    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNotes();
    })

   notes_container.append(note);
   saveNotes();

   $("textarea").emojioneArea({

    pickerPosition: "bottom"
});
}


(
    function (){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
       

        if(lsnotes ===  null){
            addNote();
        }
        else{
            lsnotes.forEach((lsNote) => {
                addNote(lsNote);
            });
        }
    }
)
();



    //  function bgcolor(e) {
       
    //     let bgdcolorvalue= e.parentElement.nextElementSibling.nextElementSibling.firstChild.style.backgroundColor;
    //     let notesbgcolor = e.value;
    //     console.log(notesbgcolor);
    //     bgdcolorvalue=notesbgcolor;
    // }   
 



















