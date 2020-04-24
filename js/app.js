let source = 'the-times-of-india';
let apiKey = '6897e126937f497a934237b35c350838'

let newsAccordian = document.getElementById('newsAccordian');
const xhr = new XMLHttpRequest();
xhr.open("GET", `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';

        articles.forEach(function(element, index){
            let news = ` <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        ${element["title"]}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse collapsed" aria-labelledby="heading${index}"
                data-parent="#newsAccordian">
                <div class="card-body">
                    ${element["content"]}. <a href = "${element["url"]}" target = "_blank">READ MORE</a>
                </div>
            </div>
         </div>`;        
         newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else{
        console.log("Some Error Occured");
    }
}

xhr.send();







