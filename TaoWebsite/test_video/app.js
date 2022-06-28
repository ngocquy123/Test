// const video = document.querySelector('video');


document.addEventListener("DOMContentLoaded", function () {
    // 	Event Video
    let video = document.getElementById('inline-video');
    // 		let clickvideo = document.querySelector('.left-box');
    let clickvideo2 = document.querySelector('.left-content');
    // 	console.log(clickvideo);
    // 	console.log(clickvideo2);
    // 	  video.autoplay = true;
    // 	a.play();
    let status = true;
    function videoscroll(a) {
        //         a.play();
        //         console.log(a.autoplay);

        //         a.play();
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > a.scrollHeight) {
                if (status == true) {
                    a.muted = status;
                    status = false;
                    a.pause();
                }

            } else {
                if (status == false) {
                    a.muted = status;
                    a.play();
                    status = true;
                }
            }
        })

    }


    videoscroll(video);
    // 	End Event Video
    function pause_play(a, b) {
        var d = b.play();
        a.addEventListener('click', function () {
            if (d) {
                b.pause();
                d = b.pause();
            } else {
                b.play();
                d = b.play();
            }
        })
    }
    // 	pause_play(clickvideo,video);
    pause_play(clickvideo2, video);

})
