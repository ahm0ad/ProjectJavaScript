// Pages
const aboutmeDiv = document.getElementById("aboutmeDiv"); 
const aboutmeBtn = document.getElementById("aboutmeBtn");
const contactmeDiv = document.getElementById("contactmeDiv");
const contactmeBtn = document.getElementById("contactmeBtn"); 
const projectsDiv = document.getElementById("projectsDiv"); 
const projectsBtn = document.getElementById("projectsBtn");
const skillsDiv = document.getElementById("skillsDiv"); 
const skillsBtn = document.getElementById("skillsBtn");

aboutmeBtn.addEventListener("click", () => {
    aboutmeDiv.style.display = "block";
    contactmeDiv.style.display = "none";
    projectsDiv.style.display = "none";
    skillsDiv.style.display = "none";

})
contactmeBtn.addEventListener("click", () => {
    aboutmeDiv.style.display = "none"
    contactmeDiv.style.display = "block"
    projectsDiv.style.display = "none"
    skillsDiv.style.display = "none"
})
projectsBtn.addEventListener("click", () => {
    aboutmeDiv.style.display = "none"
    contactmeDiv.style.display = "none"
    projectsDiv.style.display = "block"
    skillsDiv.style.display = "none"
})
skillsBtn.addEventListener("click", () => {
    aboutmeDiv.style.display = "none"
    contactmeDiv.style.display = "none"
    projectsDiv.style.display = "none"
    skillsDiv.style.display = "block"
})

// ----------------------------------------------
//  Delete Element
function delFirstProject(){
    var firstProject = document.getElementById("firstProject");
    firstProject.parentNode.removeChild(firstProject);
}
function delsecoundProject(){
    var secoundProject = document.getElementById("secoundProject");
    secoundProject.parentNode.removeChild(secoundProject);
}
function delthirdProject(){
    var thirdProject = document.getElementById("thirdProject");
    thirdProject.parentNode.removeChild(thirdProject);
}
// ------------------------------------------------

// Div Element
function addNewDiv (){
        const newDiv = document.createElement("div");
        newDiv.id = "newDiv <br>";
        document.body.appendChild(newDiv); 
        

        const inputText = document.getElementById("inputText");
        const newTitle = document.createElement("h4");
        newTitle.innerText =inputText.value;
        // newTitle.innerText ="New Project";
        newDiv.appendChild(newTitle);

        const newBtn = document.createElement("button");
        newBtn.innerText = "New Button";
        newBtn.style.color="black";
        newBtn.id = "newBtn";
        newDiv.appendChild(newBtn); 
        
        const img = document.createElement("img");
        
        var src = "../img/ahmadTech3.png";
        img.setAttribute('src', src);
        newDiv.appendChild(img);
        img.style.width="100px";
        img.style.height="100px";
}

//  Add Image 
const ImgHuchladen = document.getElementById("ImgHuchladen");
const img1 = document.getElementById("img1");

function ImgHinzufügen(){
    var imgsbtn = document.getElementById("imgsbtn");
    var img1 = document.createElement("img");
    var src = "../img/ahmadTech3.png";
    // var src = if (ImgHuchladen.fileType.match('image.*')) {
    //                 continue;
    //                 };
    img1.setAttribute('src', src);
    imgsbtn.appendChild(img1);
    img1.style.display="block";
    img1.style.width="60px";
    img1.style.height="60px";
    document.body.projects.appendChild(img1);
}

// Title Element
// const inputText = document.getElementById("inputText");

// function titleHinzufügen(){
//     var projects = document.getElementById("projects");
//     var newProject = document.createElement("h4");
//     var textH4 = document.createTextNode(inputText.value);
//     newProject.appendChild(textH4);
//     projects.appendChild(newProject);
//     document.body.projects.appendChild(newProject);
// }
// --------------------------------------------------
    












