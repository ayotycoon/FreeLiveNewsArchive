const el = document.querySelector("#placement")
const data = [

    {
        country: "UK",
        img:"gb.svg",

        sites: [
            {
                name: "BBC",
                link: "https://www.bbc.com/news/live/world-europe-60517447",
                mustRegister:true
            },
            {
                name: "Sky News",
                link: "https://www.youtube.com/c/SkyNews",
                mustRegister:true
            }
     
        ]
    },
    {
        country: "US",
        img:"us.svg",
        sites: [
            {
                name: "CNN 1",
                link: "https://www.livenewsmag.com/cnn/"
            },
            {
                name: "CNN 2",
                link: "https://www.livenewsworld.com/watchcnnlivestream/"
            },
            {
                name: "FOX",
                link: "https://www.youtube.com/c/livenowfox"
            },
            {
                name: "ABC News",
                link: "https://www.youtube.com/c/ABCNews"
            },
     
        ]
    },
    {
        country: "Nigeria",
        img:"ng.svg",
        sites: [
            {
                name: "Arise Tv",
                link: "https://www.arise.tv/live-tv/"
            },
     
     
        ]
    },
    {
        country: "Middle East",
    

        sites: [
            {
                name: "Aljazeera",
                link: "https://www.aljazeera.com/live/"
            },

            {
                name: "NBC News",
                link: "https://www.youtube.com/c/NBCNews"
            }
     
        ]
    },
]

let html = "";
data.forEach(c => {
    let cell = "";
    
    c.sites.forEach((s,i) => {
        const group = i %2 == 0;
        const end = i %2 != 0 || i == c.sites.length-1;
        cell+= `
        ${group ? `<div class="inner">` : '' }
        <div>
<div id="image18" class="style2 image"><span class="frame"><img
            src="assets/images/image18.svg?v=2b99aba4" alt=""></span></div>
<h3 id="text60" class="style5">${s.name}</h3>

<ul id="links02" class="style1 links">
    <li class="n01"><a target="_blank" href="${s.link}">Go To</a></li>
</ul>
</div>
${end ? `</div>` : '' }
`
      
    });




    html += `
    <div id="container16" class="container columns full screen">
    <div class="wrapper">
        <div class="inner">
            <div class="before-spacer">
                <hr id="divider03" class="style1">
                <h2 id="text85" class="style3">
                
                ${c.country}
                ${c.img ? `<img src="${c.img}" style="width:30px" />`:''}
                </h2>

            </div><span></span>
        </div>
    </div>
</div>
<div id="container14" class="container columns full screen">
    <div class="wrapper">
     
${cell}

   
      
    </div>
</div>

    `
})




el.innerHTML = html;