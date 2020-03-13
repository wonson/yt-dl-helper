{
	var videoinfolist =(JSON.parse(ytplayer.config.args.player_response)).streamingData.formats; 
	var mosthdvideo = videoinfolist.reduce((a, b) => {
		return a.height > b.height ? a : b;
	});
	var a = document.createElement("a");
	a.href = mosthdvideo.url;
	a.download = (JSON.parse(ytplayer.config.args.player_response)).videoDetails.title;
	a.click()
}
