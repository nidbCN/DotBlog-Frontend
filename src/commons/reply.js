import Axios from "axios";

// 返回API的Url
function getApiUrl(aid, rid, point) {
    let baseUrl = `https://api.gaein.cn/articles/${aid}/replies/`
    if (rid != null && point != null)
    {
        baseUrl += `${rid}/${point}`
    }
};

function getApiUrl(aid, rid, point) {
    return `${this.getApiUrl(aid)}${rid}/${point}/`
};

export default {
    // 获取评论列表
    getReplyList(aid) {
        let result = null;
        let url = getApiUrl(aid);
        Axios.get(url)
            .then(function (response) {
                result = response.data;
            })
            .catch(function (error) {
                console.log("获取文章列表失败：" + error);
            });
        return result;
    },
    // 点赞评论
    updateArticleLike(aid, rid) {
        let result = false;
        let url = getApiUrl(aid, rid, "Like")
        Axios.get(url).then(() => result = true)
            .catch(function (error) {
                console.log("更新回复点赞数目失败：" + error);
            });
        return result;
    }
}