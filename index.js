let videoPlayer = document.getElementById("video-player");
let videoURL = document.getElementById("video-url-input");
let watchBtn = document.getElementById("watch-button");
let saveNoteBtn = document.getElementById("save-note-button");

let noteInput = document.getElementById("video-note-taking");
let notesList = document.getElementById("notes-list");
let saveBtn = document.getElementById("save-note-button");
let noNotesText = document.getElementById("no-notes-text");

saveBtn.addEventListener("click", function(){
    let note = noteInput.value;
        if(note !=="") {
            let noteItem = document.createElement("li");
            noteItem.innerHTML = note;
            noteItem.classList.add("bg-gray-200","p-2","m-2");
            notesList.appendChild(noteItem);
            noteInput.value = "";
            noNotesText.style.display="none";
        }
});

function extractVideoUrl(url) {
    return url.split("v=")[1].substring(0,11);
}

watchBtn.addEventListener("click", function(){
    let url = videoURL.value;
        if(url !=="") {
            let videoID = extractVideoUrl(url);
            videoPlayer.src = "https://www.youtube.com/embed/" + videoID;
            videoPlayer.classList.remove("h-0");
            videoPlayer.classList.add("h-[200px]", "sm:h-[400px]","w-full");
            videoURL.value = "";
        }
})
