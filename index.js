let appen = (arr) => {
  arr.map((e) => {
    console.log(e);
    let content_Div = document.createElement("div");

    let imgs = document.createElement("img");
    imgs.setAttribute("src", e.src.original);

    let p = document.createElement("p");
    p.textContent = e.alt;

    let span = document.createElement("span")
    span.textContent = "🡹 150 🡻"
    span.setAttribute("class","sleft")
    
    let span1 = document.createElement("span")
    span1.setAttribute("class", "sright")
    span1.textContent = `💬${Math.floor(Math.random() * 10)}`

    let span2 = document.createElement("span")
    span2.setAttribute("class", "sright")
    span2.textContent = `👁️‍🗨️${Math.floor(Math.random() * 10)}k`


  
    content_Div.append(imgs, p,span,span1,span2);
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
          "563492ad6f9170000100000133595104e05c43158e8ab70fef6f6574",
      },
    }
  );
  let data = await images.json();
  console.log(data)
  appen(data.photos);
}

imgur();
