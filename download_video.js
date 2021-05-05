javascript:{
	var r = ytplayer.config.args.raw_player_response;
	var videoinfolist = r.streamingData.formats;
	var mosthdvideo = videoinfolist.reduce((a, b) => {
		return a.height > b.height ? a : b;
	});

	var a = document.createElement("a");
    	var objurl = window.URL.createObjectURL(
		    await fetch(mosthdvideo.url).
            then(r => r.blob()).
            then(blobFile => 
                new File([blobFile], r.videoDetails.title, { type: mosthdvideo.mimeType })
            )
        )
	a.href = objurl;
	a.download = r.videoDetails.title;
	a.click();
    	a.remove();
}
