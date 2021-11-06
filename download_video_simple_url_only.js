javascript:{
	function getvideo(browserurl) {
		var r = ytplayer.config.args.raw_player_response;
		var videoinfolist = r.streamingData.formats;
		var mosthdvideo = videoinfolist.reduce((a, b) => {
			return a.height > b.height ? a : b;
		});
		mosthdvideo["title"] = r.videoDetails.title;
		return mosthdvideo;
	}

	async function dlvideo(video) {
		function cipherurl() {
			/* I surrender */
			var msg = "Not working for video.cipher or video.signatureCipher";
			alert(msg);
			throw msg;
		}

		var url = video.url || cipherurl();
		if (!url) {
			console.log(video);
			var msg = "No url for unknown reason";
			alert(msg);
			throw msg;
		}

		var a = document.createElement("a");
			var objurl = window.URL.createObjectURL(
				await fetch(url, {mode:'no-cors'}).
				then(r => r.blob()).
				then(blobFile => 
					new File([blobFile], video.title, { type: video.mimeType })
				)
			);
		a.href = objurl;
		a.download = video.title;
		a.click();
		a.remove();
	}

	dlvideo(getvideo());
}
