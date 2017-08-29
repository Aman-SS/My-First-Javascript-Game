//box json object
var trbl = {
    "box_1" : {
        "top" : {
            "box" : null,
            "flag" : "false"
        },
        "right" : {
            "box" : "box_2",
            "flag" : "true"
        },
        "bottom" : {
            "box" : "box_4",
            "flag" : "true"
        },
        "left" : {
            "box" : null,
            "flag" : "false"
        },
    },
    "box_2" : {
        "top" : {
            "box" : null,
            "flag" : "false"
        },
        "right" : {
            "box" : "box_3",
            "flag" : "true"
        },
        "bottom" : {
            "box" : "box_5",
            "flag" : "true"
        },
        "left" : {
            "box" : "box_1",
            "flag" : "true"
        }
    },
    "box_3" : {
        "top" : {
            "box" : null,
            "flag" : "false"
        },
        "right" : {
            "box" : null,
            "flag" : "false"   
        },
        "bottom" : {
            "box" : "box_6",
            "flag" : "true"   
        },
        "left" : {
            "box" : "box_2",
            "flag" : "true"
        }
    },
    "box_4" : {
        "top" : {
            "box" : "box_1",
            "flag" : "true"
        },
        "right" : {
            "box" : "box_5",
            "flag" : "true"
        },
        "bottom" : {
            "box" : "box_7",
            "flag" : "true"
        },
        "left" : {
            "box" : null,
            "flag" : "false"
        }
    },
    "box_5" : {
        "top" : {
            "box" : "box_2",
            "flag" : "true"
        },
        "right" : {
            "box" : "box_6",
            "flag" : "true"
        },
        "bottom" : {
            "box" : "box_8",
            "flag" : "true"
        },
        "left" : {
            "box" : "box_4",
            "flag" : "true"
        }
    },
    "box_6" : {
        "top" : {
            "box" : "box_3",
            "flag" : "true"
        },
        "right" : {
            "box" : null,
            "flag" : "false"
        },
        "bottom" : {
            "box" : "box_9",
            "flag" : "true"
        },
        "left" : {
            "box" : "box_5",
            "flag" : "true"
        }
    },
    "box_7" : {
        "top" : {
            "box" : "box_4",
            "flag" : "true"
        },
        "right" : {
            "box" : "box_8",
            "flag" : "true"
        },
        "bottom" : {
            "box" : null,
            "flag" : "false"
        },
        "left" : {
            "box" : null,
            "flag" : "false"
        }
    },
    "box_8" : {
        "top" : {
            "box" : "box_5",
            "flag" : "true"
        },
        "right" : {
            "box" : "box_9",
            "flag" : "true"
        },
        "bottom" : {
            "box" : null,
            "flag" : "false"
        },
        "left" : {
            "box" : "box_7",
            "flag" : "true"
        }
    },
    "box_9" : {
        "top" : {
            "box" : "box_6",
            "flag" : "true"
        },
        "right" : {
            "box" : null,
            "flag" : "false"
        },
        "bottom" : {
            "box" : null,
            "flag" : "false"
        },
        "left" : {
            "box" : "box_8",
            "flag" : "true"
        }
    }
};

var active = false;
var previous_ID = null;
var active_main = false;
var active_ID = null;
var once = true;

var arrowsActive = false;
var activeBox_ID = null;
var prevBox_ID = null;

var counter = 10;
setInterval(timer, 1000);

function timer(){
    if(counter == -1){
       counter = 10;
    }
    if(counter == 10)
        document.getElementById("timer").innerHTML = "00:"+counter;
    else
        document.getElementById("timer").innerHTML = "00:0"+counter;
    counter--;
}

//Adding event listener to each color box
for(var i=0; i<9; i++){
    document.getElementById("color-box").children[i].addEventListener("click", play, false);
}

//Show arrow function definition
function addArrow(colorBox_ID){
    if(trbl[colorBox_ID]["top"]["flag"] == "true"){
        document.getElementById(trbl[colorBox_ID]["top"]["box"]).classList.add("bottomArrow", "arrow", "bottom");
    }
    if(trbl[colorBox_ID]["right"]["flag"] == "true"){
        document.getElementById(trbl[colorBox_ID]["right"]["box"]).classList.add("leftArrow", "arrow", "left");
    }
    if(trbl[colorBox_ID]["bottom"]["flag"] == "true"){
        document.getElementById(trbl[colorBox_ID]["bottom"]["box"]).classList.add("topArrow", "arrow", "top");
    }
    if(trbl[colorBox_ID]["left"]["flag"] == "true"){
        document.getElementById(trbl[colorBox_ID]["left"]["box"]).classList.add("rightArrow", "arrow", "right");
    }
}

//Remove arrow function definition
function removeArrow(){
    for(var i=1; i<=9; i++){
        document.getElementById("box_"+i).className = '';
    }
}

function invert(colorBox_ID){
    console.log("----------------------------");
    var elem1 = document.getElementById(colorBox_ID);
    var colorCode1 = window.getComputedStyle(elem1, null).getPropertyValue("background-color");
    console.log(colorCode1);
    if(document.getElementById(colorBox_ID).classList.contains("top")){
        console.log("TOP");
        var elemNumber = parseInt(colorBox_ID.charAt(4))-3;
        console.log(elemNumber);
        var elem2 = document.getElementById("box_"+elemNumber);
        var colorCode2 = window.getComputedStyle(elem2, null).getPropertyValue("background-color");
        document.getElementById(colorBox_ID).style.backgroundColor = colorCode2;
        document.getElementById("box_"+elemNumber).style.backgroundColor = colorCode1;
    }
    else if(document.getElementById(colorBox_ID).classList.contains("right")){
        console.log("RIGHT");
        var elemNumber = parseInt(colorBox_ID.charAt(4))+1;
        console.log(elemNumber);
        var elem2 = document.getElementById("box_"+elemNumber);
        var colorCode2 = window.getComputedStyle(elem2, null).getPropertyValue("background-color");
        document.getElementById(colorBox_ID).style.backgroundColor = colorCode2;
        document.getElementById("box_"+elemNumber).style.backgroundColor = colorCode1;
    }
    else if(document.getElementById(colorBox_ID).classList.contains("bottom")){
        console.log("BOTTOM");
        var elemNumber = parseInt(colorBox_ID.charAt(4))+3;
        console.log(elemNumber);
        var elem2 = document.getElementById("box_"+elemNumber);
        var colorCode2 = window.getComputedStyle(elem2, null).getPropertyValue("background-color");
        document.getElementById(colorBox_ID).style.backgroundColor = colorCode2;
        document.getElementById("box_"+elemNumber).style.backgroundColor = colorCode1;
    }
    else if(document.getElementById(colorBox_ID).classList.contains("left")){
        console.log("LEFT");
        var elemNumber = parseInt(colorBox_ID.charAt(4))-1;
        console.log(elemNumber);
        var elem2 = document.getElementById("box_"+elemNumber);
        var colorCode2 = window.getComputedStyle(elem2, null).getPropertyValue("background-color");
        document.getElementById(colorBox_ID).style.backgroundColor = colorCode2;
        document.getElementById("box_"+elemNumber).style.backgroundColor = colorCode1;
    }
}

function play(){
    var colorBox_ID = this.id;
    /*
    if(!active){
        addArrow(colorBox_ID);    
        active = true;
        console.log("in first");
    }
    else if(colorBox_ID != previous_ID){
        if(document.getElementById(colorBox_ID).classList.contains("arrow")){
            console.log("Have arrow class");
            console.log("in second 1");
            active_main = true;
            if(once){
                active_ID = previous_ID;
                once = false;
            }
            // invert();
        }
        else if(colorBox_ID == active_ID){//else if(active_main){
            removeArrow();
            console.log("in second 2");
            active_main = false;
            active = false;
            once = true;
        }
        else{
            removeArrow();
            addArrow(colorBox_ID);
            //once = true;
            console.log("in second 3");
        }
        console.log("in second");
    }
    else if(active && !document.getElementById(colorBox_ID).classList.contains("arrow")){
        removeArrow();
        active = false;
        console.log("in third");
    }
    
    //if((colorBox_ID != previous_ID) && !active_main){
    //    removeArrow();
      //  addArrow(colorBox_ID);
    //}
    previous_ID = colorBox_ID;
    */
    if(arrowsActive == false){
        removeArrow();
        addArrow(colorBox_ID);
        arrowsActive = true;
        activeBox_ID = colorBox_ID;
    }
    else if(!document.getElementById(colorBox_ID).classList.contains("arrow")){
        if(activeBox_ID == colorBox_ID){
            removeArrow();
            arrowsActive = false;
        }
        else{
            removeArrow();
            addArrow(colorBox_ID);
            activeBox_ID = colorBox_ID;
        }
    }
    else if(document.getElementById(colorBox_ID).classList.contains("arrow")){
        invert(colorBox_ID);
    }
}