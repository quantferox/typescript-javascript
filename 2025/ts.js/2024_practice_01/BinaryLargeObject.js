//Blob - Binary Large Object

//Creating BLOB object
/* const blobObj = new Blob(["Hello World!"], {type: "text/plain"});
console.log(blobObj); */

//Get link from BLOB object

/* const blobObj = new Blob(["Hello World!"], {type: "text/plain"});
const url = URL.createObjectURL(blobObj);
console.log(url); */

//Reading BLOB URL
/* const blobObj = new Blob(["Hello World!"], { type: "text/plain" });
const url = URL.createObjectURL(blobObj);

const reader = new FileReader();

reader.onload = (event) => {
    console.log(event.target.result);
}

reader.readAsText(url); */


//Example change background image(from input file uses filereader and BLOB obj)

/* const file_input = document.getElementById("fileInput");
const btn = document.getElementById("btn"); */

//File Reader uses
/* btn.addEventListener("click", () => {
    const reader = new FileReader();
    reader.onload = (event) => {
        console.log(event.target.result)
        document.body.style.backgroundImage = `url(${event.target.result})`;
    }

    reader.readAsDataURL(file_input.files[0]);
}); */

//Blob data uses
/* btn.addEventListener("click", () => {
    const file = file_input.files[0];
    const url = URL.createObjectURL(file);
    document.body.style.backgroundImage = `url(${url})`;
    //do not forget to unload from memory, for example, when changing the background
    // URL.revokeObjectURL(url);
    console.log(url)
}); */