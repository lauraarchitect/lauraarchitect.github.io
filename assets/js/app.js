projectList = {
    "Farmhouse":{
        name:"Farmhouse Modern",
        images:[
            "images/project/Farmhouse-Modern/Main.jpg",
            "images/project/Farmhouse-Modern/M6A9194-Edit.jpg",
            "images/project/Farmhouse-Modern/hh_30-Edit.jpg",
            "images/project/Farmhouse-Modern/hh_123-Edit.jpg",
            "images/project/Farmhouse-Modern/hh_179-Edit.jpg",
            "images/project/Farmhouse-Modern/LyonBarn13326-Edit.jpg",
            "images/project/Farmhouse-Modern/LyonBarn13445-Edit-Edit.jpg",
            "images/project/Farmhouse-Modern/LyonBarn13518-Edit.jpg",
            "images/project/Farmhouse-Modern/LyonBarn13758-Edit.jpg",
            "images/project/Farmhouse-Modern/LyonBarn13792-Edit.jpg"
        ]
    },
    "Vassar":{
        name:"Vassar Home Remodel",
        images:[
            "images/project/Vassar-Home-Remodel/Vassar Bar to Entry.jpg",
            "images/project/Vassar-Home-Remodel/Vassar Dining Kitchen.jpg",
            "images/project/Vassar-Home-Remodel/Vassar Dining.jpg",
            "images/project/Vassar-Home-Remodel/Vassar Master Bath.jpg",
            "images/project/Vassar-Home-Remodel/Vassar Powder.jpg",
            "images/project/Vassar-Home-Remodel/Vasser Kitchen.jpg"
        ]
    },
    "Iris":{
        name:"Iris Street House",
        images:[
            "images/project/Iris-Street-House/Kitchen.jpg",
            "images/project/Iris-Street-House/Bath.jpg"
        ]
    }
}

buildGalleryItem = function(imgSrc, container){

    var article = document.createElement("article");

    var anchor = document.createElement("a");
    anchor.className = "image";
    anchor.href = imgSrc;

    var img = document.createElement("img");
    img.src = imgSrc;

    var caption = document.createElement("div");
    caption.className = "caption";

    var span = document.createElement("span");
    span.innerText = "Details";
    span.className = "button small";

    //caption.appendChild(span);

    anchor.appendChild(img);

    article.appendChild(anchor);
    article.appendChild(caption)

    container.appendChild(article);
}

showProject = function(projectId){

    var gallery = document.getElementById("Gallery");
    console.log(gallery)
    var container = gallery.getElementsByClassName("inner")[1];
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    projectList[projectId].images.forEach(function(img) {
        console.log(container)
        buildGalleryItem(img, container)
        
    });

    gallery.scrollIntoView();
};

var galleryLinks = document.getElementsByClassName('loadGallery');

for(var i = 0; i < galleryLinks.length; i++) {
    
    galleryLinks[i].addEventListener('click', function(e){

        //console.log(e.currentTarget)
        var projectId = e.currentTarget.getAttribute("data-project");
        //alert(projectId)

        showProject(projectId);

    }, false);
}


