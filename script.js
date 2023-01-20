const adicionaItem=()=>{   
    const article = document.createElement('article')    
    article.setAttribute("class", "item")
    article.setAttribute("onclick", "removeItem(event)")
    article.innerHTML = "Hello"
    container.appendChild(article)
    console.log(article)
}

function removeItem(event){
    event.target.remove()
}