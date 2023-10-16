import axios from 'axios';

export default {

    get() {
        return axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
    }

}