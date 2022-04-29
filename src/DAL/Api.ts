import axios from "axios";
const nyKey='vpUAzzXV6Qy4G3poAkPMh2CyvzvHCLqr';
export const API={
    getNews(count:number){
        return axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/world.json?limit=${count}&api-key=${nyKey}`)
    },
    getMostPopular(){
        return axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${nyKey}`)
    },
    getSomeData(query:string){
      return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=newest&api-key=${nyKey}`
    )
    },
    getCatData(query?:string) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=newest&api-key=${nyKey}`
        )
    }
}