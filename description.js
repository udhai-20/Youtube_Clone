let moive_ls = JSON.parse(localStorage.getItem("Movie_List"));
let api = `AIzaSyCtPTvVQRb6iBrsVR49yJ_ADjhArLqMj0M`;

// AIzaSyAfuKWzccUGzqBptK0UTRiHg5a1WWY8JKM
videoDetail(moive_ls.snippet.title);
async function videoDetail(Search) {
  console.log(`res:`, Search);
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${Search}&key=${api}&part=snippet&maxResults=20`
    );
    // let data = await res.json();
    // console.log("data:", data);
    let { items } = await res.json();
    let array_of_items1 = items;
    console.log("Popular:", array_of_items1);
    RealtedVidz(array_of_items1);
    // DisplayPopular(array_of_items1);
  } catch (err) {
    console.log(err);
  }
}

display(moive_ls);
function display(data) {
  console.log(data);
  let chanalname = document.createElement("p");
  chanalname.innerText = data.snippet.channelTitle;
  let name = document.createElement("p");
  name.innerText = data.snippet.title;
  let description = document.createElement("p");
  description.style.fontSize = "13px";
  description.innerText = data.snippet.description;
  // console.log("  data.snippet.title:", data.snippet.title);description
  let div = document.createElement("div");
  // div.setAttribute("id", "main");
  div.innerHTML = `<iframe height="315" width="500" src="https://www.youtube.com/embed/${data.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
  // console.log(" data.id.videoId:", data.id);
  document.getElementById("main").append(div, chanalname, name, description);
}

RealtedVidz = (dat) => {
  let img = document.createElement("div");
  img.setAttribute("id", "related");
  // console.log("  dat:", dat);
  dat.forEach(
    ({
      snippet: { title },
      id: { videoId },
      snippet: {
        thumbnails: {
          default: { url },
        },
      },
    }) => {
      console.log(title, videoId, url);
      let nam = document.createElement("span");
      nam.style.fontWeight = 800;
      nam.setAttribute("id", "name");
      nam.innerText = title;
      // let parent = document.createElement("div");
      // parent.setAttribute("id", "parent");
      let related = document.createElement("div");
      related.setAttribute("id", "related");
      let div = document.createElement("div");
      div.setAttribute("id", "iframe_vid");
      div.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      related.append(div, nam);
      // parent.append(related);
      document.getElementById("parent").append(related);
    }
  );
};

getData = () => {
  window.location.href = "index.html";
};
