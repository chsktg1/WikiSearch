let searchInput = document.getElementById('searchInput')
let searchResults = document.getElementById('searchResults')
let spinnerEl = document.getElementById('spinner');

function createAndAppend(res) {
    let {
        title,
        link,
        description
    } = res;
    let div = document.createElement("div");
    div.classList.add("result-item")
    searchResults.appendChild(div)
    let a = document.createElement("a")
    a.classList.add('result-title')
    a.textContent = title
    a.href = link
    a.target = '_blank'
    div.appendChild(a)
    let br = document.createElement("br")
    div.appendChild(br)
    let a1 = document.createElement("a")
    a1.classList.add("result-url")
    a1.textContent = link
    a1.target = '_blank'
    a1.textContent = link
    div.appendChild(a1)
    let br1 = document.createElement("br")
    div.appendChild(br1)
    let p = document.createElement("p")
    p.textContent = description
    //p.classList.add("")
    div.appendChild(p)
}

function disp(results) {
    spinnerEl.classList.toggle("d-none")
    for (var result of results) {
        createAndAppend(result)
    }
}

function alp(event) {
    if (event.key === "Enter") {
        searchResults.textContent = ""
        spinnerEl.classList.toggle("d-none")
        let val = searchInput.value
        let url = "https://apis.ccbp.in/wiki-search?search=" + val
        let options = {
            method: "Get"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                let {
                    search_results
                } = data
                disp(search_results)
            })
    }
}
searchInput.addEventListener("keydown", alp)