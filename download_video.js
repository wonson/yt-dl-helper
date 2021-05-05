{
	var r = ytplayer.config.args.raw_player_response;
	var videoinfolist = r.streamingData.formats;
	var mosthdvideo = videoinfolist.reduce((a, b) => {
		return a.height > b.height ? a : b;
	});
	var a = document.createElement("a");
	a.href = mosthdvideo.url;
	a.download = r.videoDetails.title;
	a.click();
}
