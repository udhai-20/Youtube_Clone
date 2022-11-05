let api = `AIzaSyAfuKWzccUGzqBptK0UTRiHg5a1WWY8JKM`;
//   new key AIzaSyBD9POeLUNwHVU6ENoTrkFCa2WnmlDP9y0
// AIzaSyASwRZNci-aSrEtlTGYd7Jn0-w31LBR5OQ

let getData = async () => {
  try {
    let query = document.getElementById("query").value;
    console.log(query);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api}&part=snippet&maxResults=20`
    );
    let { items } = await res.json();
    let array_of_items = items;
    appendvideos(array_of_items);
    console.log("array_of_items:", array_of_items);
    // search_list(array_of_items);
    console.log("array_of_items :", array_of_items);
  } catch (err) {
    console.log(err);
  }
};

// { snippet: { title }, id: { videoId } ,snippet:{thumbnails.high.url}}}
let appendvideos = (data) => {
  document.getElementById("cont").innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      detailbtn(el);
    });
    let name = document.createElement("h4");
    name.setAttribute("id", "videotitle");
    name.innerText = el.snippet.title;
    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.high.url;
    let channel = document.createElement("span");
    channel.setAttribute("id", "channel_name");
    channel.innerText = el.snippet.channelTitle;
    div.append(img, name, channel);
    document.getElementById("cont").append(div);
  });
};

detailbtn = (el) => {
  localStorage.setItem("Movie_List", JSON.stringify(el));
  window.location.href = "description.html";
};
