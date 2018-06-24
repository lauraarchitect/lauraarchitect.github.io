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
        ],
        subText: "Designed while at HMH Architecture + Interiors "
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
        ],
        subText: "Designed while at HMH Architecture + Interiors "
    },
    "Iris":{
        name:"Iris Street House",
        images:[
            "images/project/Iris-Street-House/Kitchen.jpg",
            "images/project/Iris-Street-House/Bath.jpg"
        ]
    },
    "Pine":{
        name:"Pine Street House (Coming Soon)",
        images:[
            "images/project/Pine-Street-House/IMG_5137.jpg",
            "images/project/Pine-Street-House/IMG_5138.jpg",
            "images/project/Pine-Street-House/IMG_5139.jpg"
        ]
    },
    "Spruce":{
        name:"Spruce Street House (Under Construction)",
        images:[
            "images/project/Spruce-Street-House/spruce0.jpg",
            "images/project/Spruce-Street-House/spruce1.jpg",
            "images/project/Spruce-Street-House/spruce2.jpg",
            "images/project/Spruce-Street-House/spruce3.jpg",
            "images/project/Spruce-Street-House/spruce4.jpg",
            "images/project/Spruce-Street-House/spruce5.jpg",
            "images/project/Spruce-Street-House/spruce6.jpg",
            "images/project/Spruce-Street-House/spruce7.jpg"
        ]
    },
    "Mapleton":{
        name:"Mapleton Hill Remodel",
        images:[
            "images/project/Mapleton-Hill-Remodel/607 mapleton kitchen.jpg",
            "images/project/Mapleton-Hill-Remodel/607 mapleton fireplace.jpg",
            "images/project/Mapleton-Hill-Remodel/living room before.jpg"

        ]
    },
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
    var galleryName = document.getElementById("GalleryName");
    var projectSubText = document.getElementById("ProjectSubText");
    
    var project = projectList[projectId]

    galleryName.innerHTML = project.name;

    var container = gallery.getElementsByClassName("inner")[1];
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    project.images.forEach(function(img) {
        buildGalleryItem(img, container)
        
    });

    if (project.subText){
        projectSubText.innerHTML = project.subText
    }else{
        projectSubText.innerHTML = "";
    }

    gallery.scrollIntoView();
};

var galleryLinks = document.getElementsByClassName('loadGallery');

for(var i = 0; i < galleryLinks.length; i++) {
    
    galleryLinks[i].addEventListener('click', function(e){

        //console.log(e.currentTarget)
        var projectId = e.currentTarget.getAttribute("data-project");
        //alert(projectId)

        //showProject(projectId);
        window.location += "project.html?projectName=" + projectId;

    }, false);
}


