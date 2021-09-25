import axios from 'axios';
import {xml2js} from 'xml-js';

const options = {
    compact: true,
    ignoreComment: true
};

//const DEFAULT_URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';
const DEFAULT_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1';

// https://docs.thecatapi.com/api-reference

// Example URL to fetch 10 cats with category hats: 
// https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 
// Example URL to fetch the categories: 
// https://api.thecatapi.com/v1/categories 

export const getCats = (url = DEFAULT_URL) => {
    return axios.get(url).then(
    (res) => {
        return xml2js(res.data, options);
    },(res) => {
        throw new Error(res);
    });
};

export const filterCats = (cats, id) => {
    return cats.find((item) => {
        if(item.id._text === id){
            return item;
        }
    });
}
