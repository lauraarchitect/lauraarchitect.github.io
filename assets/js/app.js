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
        name:"Pine Street House",
        images:[
            "images/project/911Pine/01.jpg",
            "images/project/911Pine/02.jpg",
            "images/project/911Pine/03.jpg",
            "images/project/911Pine/04.jpg",
            "images/project/911Pine/05.jpg",
            "images/project/911Pine/06.jpg",
            "images/project/911Pine/07.jpg",
            "images/project/911Pine/08.jpg",
            "images/project/911Pine/09.jpg",
            "images/project/911Pine/10.jpg",
            "images/project/911Pine/11.jpg",
            "images/project/911Pine/12.jpg",
            "images/project/911Pine/13.jpg",
            "images/project/911Pine/14.jpg",
            "images/project/911Pine/15.jpg",
            "images/project/911Pine/16.jpg",
            "images/project/911Pine/17.jpg",
            "images/project/911Pine/18.jpg",
            "images/project/911Pine/19.jpg",
            "images/project/911Pine/20.jpg",
        ]
    },
    "Spruce":{
        name:"Spruce Street House",
        images:[
            "images/project/1737SpruceMainHouse/01.jpg",
            "images/project/1737SpruceMainHouse/02.jpg",
            "images/project/1737SpruceMainHouse/03.jpg",
            "images/project/1737SpruceMainHouse/04.jpg",
            "images/project/1737SpruceMainHouse/05.jpg",
            "images/project/1737SpruceMainHouse/06.jpg",
            "images/project/1737SpruceMainHouse/07.jpg",
            "images/project/1737SpruceMainHouse/08.jpg",
            "images/project/1737SpruceMainHouse/09.jpg",
            "images/project/1737SpruceMainHouse/10.jpg",
            "images/project/1737SpruceMainHouse/11.jpg",
            "images/project/1737SpruceMainHouse/12.jpg",
            "images/project/1737SpruceMainHouse/13.jpg",
            "images/project/1737SpruceMainHouse/14.jpg",
            "images/project/1737SpruceMainHouse/15.jpg",
            "images/project/1737SpruceMainHouse/16.jpg",
            "images/project/1737SpruceMainHouse/17.jpg",
            "images/project/1737SpruceMainHouse/18.jpg",
            "images/project/1737SpruceMainHouse/19.jpg",
            "images/project/1737SpruceMainHouse/20.jpg",
            "images/project/1737SpruceMainHouse/21.jpg",
            "images/project/1737SpruceMainHouse/22.jpg",
            "images/project/1737SpruceMainHouse/23.jpg",
            "images/project/1737SpruceMainHouse/24.jpg",
            "images/project/1737SpruceMainHouse/25.jpg",
            "images/project/1737SpruceMainHouse/26.jpg",
            "images/project/1737SpruceMainHouse/27.jpg",
            "images/project/1737SpruceMainHouse/28.jpg",
        ]
    },
    "SpruceGuest":{
        name:"Spruce Street Guest House",
        images:[
            "images/project/1737SpruceGuestHouse/01.jpg",
            "images/project/1737SpruceGuestHouse/02.jpg",
            "images/project/1737SpruceGuestHouse/03.jpg",
            "images/project/1737SpruceGuestHouse/04.jpg",
            "images/project/1737SpruceGuestHouse/05.jpg",
            "images/project/1737SpruceGuestHouse/06.jpg",
            "images/project/1737SpruceGuestHouse/07.jpg",
            "images/project/1737SpruceGuestHouse/08.jpg",

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


