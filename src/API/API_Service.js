import { full_req_url } from "./API_URL";
import axios from 'axios'

export default class API_Service {
    static async getAllPosts() {
        const res = await fetch(full_req_url)
        return res.json();

    }
    static async getAll(setData) {
        const res = await fetch(full_req_url)
            .then(data => data.json())
            .then(data => setData(data))
    }
    static async getPostById(id) {
        const url = full_req_url + '/' + id;
        const res = await fetch(url)
        return res.json();

    }
    static async createPost(post, picture) {
        const data = { ...post, picture: picture };
        const configs = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        const res = await axios.post(full_req_url, data, configs).then(res => {
            console.log("Request complete! response:", res);
        }).catch(error =>
            console.log('this error ', error))
        return res;
    }
    static async editPost(post) {
        const data = { ...post };
        const configs = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        const res = await axios.put(full_req_url, data, configs).then(res => {
            console.log("Post edited:", res);
        }).catch(error =>
            console.log('this error ', error))
        return res;
    }
    static async deletePost(id) {
        const res = await fetch(`${full_req_url}/${id}`, {
            method: 'DELETE'
        })
    }


}

