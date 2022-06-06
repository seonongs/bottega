import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000/api'; // 개발
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const boardCreate = async(param) => {
    return await axios.post("/board", param);
}
const boardList = async(currentPage, pageSize, keyword) => {
    let page = currentPage <= 0 ? 0 : currentPage - 1;
    return await axios.get(`/board?page=${page}&size=${pageSize}&keyword=${keyword}&sort=id,DESC`);
}
const boardDetail = async(id) => {
    return await axios.get(`/board/${id}`)
}
const boardUpdate = async(id, param) => {
    return await axios.patch(`/board/${id}`, param)
}
const boardDelete = async(id) => {
    return await axios.delete(`/board/${id}`)
}

export {
    boardCreate,
    boardList,
    boardDetail,
    boardUpdate,
    boardDelete,
}
