var __TARGET_LANG__ = "zh-HK";

var captionURL = "";
try {
    captionURL = (JSON.parse(ytplayer.config.args.player_response)).captions.playerCaptionsTracklistRenderer.captionTracks.find((e) => {
        return e.languageCode == __TARGET_LANG__;
    }).baseUrl;
} catch (e) {
    alert("Fill __TARGET_LANG__ with one of following:\n" + (JSON.parse(ytplayer.config.args.player_response).captions.playerCaptionsTracklistRenderer.captionTracks.reduceRight(function(total, current) { return total.concat(current.languageCode); }, [])).toString());
}

fetch(captionURL).then((response) => { return response.text(); }).then((data) => 
{
  var captDOM = new DOMParser().parseFromString(data, "text/xml");
  var captions = captDOM.firstChild.children;
  
  //TODO: Translate to .srt
});
