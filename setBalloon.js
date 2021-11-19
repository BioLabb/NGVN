    var balls = document.querySelectorAll(".ball");
    

    // set colors
    var animateName = ["balloon1", "balloon2", "balloon3", "balloon4"];
    var   iAnimate = 0;
    var second = 3;
    for( let i in balls){
        if(iAnimate > animateName.length-1)
            iAnimate = 0;
        if(second > 5)
            second = 3;
        balls[i].style.backgroundColor = `rgb(${ARR_COLOR[i]},${OPACTY})`;
        balls[i].appendChild(createNode("span",`rgb(${ARR_COLOR[i]},${OPACTY+0.2})`)); 
        balls[i].style.animation = `${animateName[iAnimate]} ${second}s ease-in-out infinite`
        iAnimate++;
        second++;
    }

function createNode(tag,color){
    var node = document.createElement("span");
    var texNode = document.createTextNode("▲");
    node.appendChild(texNode);
    node.style.color = color;
    node.style.position = "absolute";
    node.style.top = "115px";
    return node;
}
