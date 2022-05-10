const api_Url="https://yts.mx/api/v2/list_movies.json?query_term=2022"
const searchUrl="https://yts.mx/api/v2/list_movies.json?query_term="
const form= document.querySelector(".form")
const search=document.querySelector(".search")
const main =document.querySelector(".main")

getMovies(api_Url)
async function getMovies(url){
    const res =await fetch(url)
    const data = await res.json()
    showMovies(data)
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let searchItem =search.value
    if(searchItem && searchItem!==""){
        getMovies(`${searchUrl}'${searchItem}'`)
        search.value=""
    }
    else{
        window.location.reload()
    }
})
function showMovies(array){
    let datas=array.data.movies
    main.innerHTML=""
    //console.log(array.data.movies.length)
    for(let i=0;i<datas.length;i++){
        // console.log(datas[i].background_image)
        //console.log(datas[i].title)
        // const{title,url,rating,summary}=movie
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie-box")
        movieEl.innerHTML =`
            <img src="${datas[i].medium_cover_image}" alt="hello">
            <div class="movieTitleBox">
                <div class="movietitle">${datas[i].title}</div>
                <div class="ratingBox"><i class="fa-solid fa-star"></i>${datas[i].rating}</div>
            </div>
            <div class="overview">
                <span>Overview:</span><br>
                ${datas[i].summary}
            </div>
       
        `
        main.appendChild(movieEl)
       // console.log(array.movies[i].title)
    }

}