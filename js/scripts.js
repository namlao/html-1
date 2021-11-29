
    let myVid1 = document.getElementById("video1");
    let myI1 = document.getElementById('play1');

function playVid1() {
        if (myVid1.paused) {
            myVid1.play();
            myI1.style.display='none';
        } else {
            myVid1.pause();
            myI1.style.display='block';
        }
}
    let myVid2 = document.getElementById("video2");
    let myI2 = document.getElementById('play2');
function playVid2() {
        if (myVid2.paused) {
            myVid2.play();
            myI2.style.display='none';
        } else {
            myVid2.pause();
            myI2.style.display='block';
        }
    }