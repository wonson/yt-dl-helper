javascript:{
	function getvideo(browserurl) {
		var r = ytplayer.config.args.raw_player_response;
		var videoinfolist = r.streamingData.formats;
		var mosthdvideo = videoinfolist.reduce((a, b) => {
			return a.height > b.height ? a : b;
		});
		return mosthdvideo
	}

	async function dlvideo(video) {
		var a = document.createElement("a");
			var objurl = window.URL.createObjectURL(
				await fetch(video.url).
				then(r => r.blob()).
				then(blobFile => 
					new File([blobFile], r.videoDetails.title, { type: video.mimeType })
				)
			)
		a.href = objurl;
		a.download = r.videoDetails.title;
		a.click();
		a.remove();
	}

	dlvideo(getvideo())
}
