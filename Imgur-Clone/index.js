let appen = (arr) => {
  arr.map((e) => {
    console.log(e);
    let content_Div = document.createElement("div");
    let imgs = document.createElement("img");
    imgs.setAttribute("src", e.src.original);

    let p = document.createElement("p");
    p.textContent = e.alt;

    content_Div.append(imgs, p);
    document.querySelector(".section2").append(content_Div);
  });
};

async function imgur() {
  let images = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      Method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f917000010000016528779b5826413e81ae5ef27ec5e7c5",
      },
    }
  );
  let data = await images.json();
  appen(data.photos);
}

imgur();
