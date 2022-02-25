const el = document.querySelector("#placement")
const data = [
    {
        country: "General",

        sites: [
            {
                name: "Aljazeera",
                link: "https://www.aljazeera.com/live/"
            }
     
        ]
    },
    {
        country: "UK",

        sites: [
            {
                name: "BBC UK",
                link: "https://www.bbc.com/news/live/world-europe-60517447",
                mustRegister:true
            }
     
        ]
    },
    {
        country: "US",

        sites: [
            {
                name: "CNN 1",
                link: "https://www.livenewsmag.com/cnn/"
            },
            {
                name: "CNN 2",
                link: "https://www.livenewsworld.com/watchcnnlivestream/"
            },
     
        ]
    }
]

let html = "";
data.forEach(c => {
    let cell = "";
    
    c.sites.forEach(s => {
        cell+= `
        <div>
<div id="image18" class="style2 image"><span class="frame"><img
            src="assets/images/image18.svg?v=2b99aba4" alt=""></span></div>
<h3 id="text60" class="style5">${s.name}</h3>
<p id="text84" class="style2">


</p>
<ul id="links02" class="style1 links">
    <li class="n01"><a target="_blank" href="${s.link}">Go To</a></li>
</ul>
</div>
`
      
    });




    html += `
    <div id="container16" class="container columns full screen">
    <div class="wrapper">
        <div class="inner">
            <div class="before-spacer">
                <hr id="divider03" class="style1">
                <h2 id="text85" class="style3">${c.country}</h2>

            </div><span></span>
        </div>
    </div>
</div>
<div id="container14" class="container columns full screen">
    <div class="wrapper">
        <div class="inner">
${cell}

   
        </div>
    </div>
</div>

    `
})




el.innerHTML = html;