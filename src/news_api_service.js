export default class NewsApi{
    constructor(){
        this.searchQuery='';
    }

    fetchArticles(){
        const options = {
            headers:{
                    Authorization:"002081a311064500ac33bdf8092d1261"},
           
        };
        const BASE_URL=`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=1`;

        fetch(BASE_URL,options)
        .then(r=>r.json())
        .then(data=>console.log(data))
    }

    get query(){
        return this.searchQuery
    }
    set query(newQuery){
        this.searchQuery=newQuery;
    }


}