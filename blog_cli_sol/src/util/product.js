
function picture() {
    let smallPics = document.querySelectorAll(".small");

    for(let i=0; i<smallPics.length; i++) {
        smallPics[i].onclick = changePic;
    }
}

function changePic() {
    let cup = document.querySelector('#cup');
    let newPic = this.src;
    cup.src = newPic;
}



function showDetail() {
    document.querySelector('#detail').style.display = "block";
}

function hideDetail() {
    document.querySelector('#detail').style.display = "none";
}

export {picture,changePic,showDetail,hideDetail}