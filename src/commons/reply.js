import Axios from "axios";

// 返回API的Url
function getApiUrl(aid, rid, point) {
    let baseUrl = `https://api.gaein.cn/articles/${aid}/replies/`
    if ((rid != undefined || rid != null) && (point != undefined || point != null)) {
        baseUrl += `${rid}/${point}`
    }
    return baseUrl;
};

export default {
    // 获取评论列表
    getReplyList(aid) {
        return new Promise((resolve, reject) => {
            const url = getApiUrl(aid);
            Axios.get(url)
                .then(function (response) {
                    let result = response.data;
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                    console.log("获取文章列表失败：" + error);
                });
        });

    },
    // 点赞评论
    updateArticleLike(aid, rid) {
        let url = getApiUrl(aid, rid, "Like")
        Axios.get(url).then(() => result = true)
            .catch(function (error) {
                console.log("更新回复点赞数目失败：" + error);
            });
    }
}