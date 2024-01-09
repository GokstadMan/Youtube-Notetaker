let video = document.getElementById("video");
let videoURL = document.getElementById("video-url-input");
let watchBtn = document.getElementById("watch-button");
let saveNoteBtn = document.getElementById("save-note-button");

let noteInput = document.getElementById("video-note-taking");
let notesList = document.getElementById("notes-list");
let saveBtn = document.getElementById("save-note-button");
let noNotesText = document.getElementById("no-notes-text");

saveBtn.addEventListener("click", function()
{
    let note = noteInput.value;
        if(note !=="") {
            let noteItem = document.createElement("li");
            noteItem.innerHTML = note;
            noteItem.classList.add("bg-gray-200","p-2","m-2");
            notesList.appendChild(noteItem);
            noteInput.value = "";
        }
});
