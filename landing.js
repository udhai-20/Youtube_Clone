let api = `AIzaSyCtPTvVQRb6iBrsVR49yJ_ADjhArLqMj0M`;
// let api = `AIzaSyASwRZNci-aSrEtlTGYd7Jn0-w31LBR5OQ`;
//
// function getData() {
//   window.location.href = "./searchpage.html";
// }

let Display = async () => {
  try {
    let res11 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${api}`
    );
    // let data = await res.json();
    // console.log("data:", data);
    let { items } = await res11.json();
    let array_of_items1 = items;
    console.log("Popular:", array_of_items1);

    DisplayPopular(array_of_items1);
  } catch (err) {
    console.log(err);
  }
};

Display();

let DisplayPopular = (data) => {
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
    // console.log("  img:", el.snippet.thumbnails.high.url);

    // let iframe = document.createElement("iframe");
    // iframe.src = `https://www.youtube.com/embed/${videoId}`;
    // iframe.allowFullscreen = `50%`;
    // iframe.width = `100%`;
    // iframe.height = "100%";
    div.append(img, name, channel);
    document.getElementById("cont").append(div);

    // console.log("title:", title);
    // console.log(" videoId:", videoId);
  });
};

detailbtn = (el) => {
  localStorage.setItem("Movie_List", JSON.stringify(el));
  window.location.href = "description.html";
};

let getData = async () => {
  document.getElementById("cont").innerHTML = null;
  try {
    let query = document.getElementById("query").value;
    console.log(query);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api}&part=snippet&maxResults=20`
    );
    // let data = await res.json();
    // console.log("data:", data);
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

let appendvideos = (data) => {
  console.log("  data:", data);
  document.getElementById("cont").innerHTML = null;
  data.forEach((el) => {
    // let title = el.snippet.title;
    // let video = el.id.videoId;
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      detailbtn1(el);
    });
    let name = document.createElement("h4");
    name.setAttribute("id", "videotitle");
    name.innerText = el.snippet.title;
    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.high.url;
    let channel = document.createElement("span");
    channel.setAttribute("id", "channel_name");
    channel.innerText = el.snippet.channelTitle;

    // console.log("  img:", el.snippet.thumbnails.high.url);

    // let iframe = document.createElement("iframe");
    // iframe.src = `https://www.youtube.com/embed/${videoId}`;
    // iframe.allowFullscreen = `50%`;
    // iframe.width = `100%`;
    // iframe.height = "100%";
    div.append(img, name, channel);
    document.getElementById("cont").append(div);

    // console.log("title:", title);
    // console.log(" videoId:", videoId);
  });
};

detailbtn1 = (el) => {
  localStorage.setItem("Movie_List", JSON.stringify(el));
  window.location.href = "description.html";
};
