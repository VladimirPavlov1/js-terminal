const API_KEY="002081a311064500ac33bdf8092d1261";
const options = {
    headers:{
        Authorization:API_KEY
    },
   
};
const BASE_URL='https://newsapi.org/v2'

export default class NewsApi{
    constructor(){
        this.searchQuery='';
        this.page=1;
    }

    fetchArticles(){
       
        const url=`${BASE_URL}/everything?q=${this.query}&pageSize=5&page=${this.page}`;

        return fetch(url,options)
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            this.page+=1;

            return data.articles
        })
    }
    resetPage(){
        this.page=1;
    }

    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery=newQuery;
    }


}