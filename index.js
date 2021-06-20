
function visibleSongs() {
  document.getElementById("trackscomplete").style.display = "table";
}

var actual_JSON;
var sampleValue = '';

var list = document.getElementsByClassName("playlist");
for (let ele of list) {
  ele.addEventListener("click", getTracks(ele.text));
}

function first() {
  sampleValue = 'sample1.json'
  init(writer);


}
function second() {
  sampleValue = 'sample2.json'
  init(writer);


}
function third() {
  sampleValue = 'sample3.json'
  init(writer);


}


function init(callback) {
  fetch(sampleValue).then(
    res => {
      res.json().then(
        data => {
          
          actual_JSON = data;
          console.log(actual_JSON)
        }
      )
    }
  )
  callback();
  
}

function writer() {
  var out = "";
  try {
    for (let playlist of actual_JSON.playlists) {
      out += "<tr>"
      out += "<td>" + playlist.pid + "</td>"
      var temp = ''
      temp = "<td><a href=\"javascript:getTracks('" + playlist.name + "');\" class=\"playlist\">" + playlist.name + "</a></td>";
      out += temp
      out += "<td>" + playlist.num_tracks + "</td>"
      out += "</tr>"

    }
    document.getElementById("playlists").innerHTML = out;
  } catch (e) { }
}


function getTracks(playlistName) {
  visibleSongs();

  for (let playlist of actual_JSON.playlists)
    if (playlist.name === playlistName) {

      var out2 = "";
      for (song of playlist.tracks) {
        out2 += "<tr>"
        out2 += "<td>" + song.pos + "</td>"
        out2 += '<td><a href=# class="songs">' + song.track_name + '</a></td>';
        out2 += "<td>" + song.artist_name + "</td>"
        out2 += "<td>" + song.album_name + "</td>"
        out2 += "</tr>"
      }
      document.getElementById("tracks").innerHTML = out2;
    }

}
