import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'; // 개발
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const boardWrite = async(param) => {
    return await axios.post("/bbs", param);
}
const boardList = async(currentPage, pageSize, keyword) => {
    let page = currentPage <= 0 ? 0 : currentPage - 1;
    return await axios.get(`/bbs?page=${page}&size=${pageSize}&keyword=${keyword}&sort=id,DESC`);
}
const boardDetail = async(id) => {
    return await axios.get(`/bbs/${id}`)
}
const boardModify = async(id, param) => {
    return await axios.patch(`/bbs/${id}`, param)
}
const boardDelete = async(id) => {
    return await axios.delete(`/bbs/${id}`)
}

export {
    boardWrite,
    boardList,
    boardDetail,
    boardModify,
    boardDelete,
}
