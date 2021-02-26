import Axios from "axios";

// 返回API的Url
function getApiUrlFunc(aid, point) {
    let baseUrl = "https://api.gaein.cn/articles/";
    if (aid != null || aid != undefined) {
        baseUrl += aid + "/";
        if (point != null || point != undefined) {
            baseUrl += point + "/";
        }
    }
    console.log("拼接URL：" + baseUrl);
    return baseUrl;
}

function getRandomCoverFunc() {
    return new Promise((resolve, reject) => {
        Axios.get("https://api.gaein.cn/bing/pictures").then((response) => {
            let result = response.data.url;
            resolve(result) //相当于把东西提交
        }).catch(function (error) {
            reject(error) //提交错误
            console.log("获取随机图片失败：" + error);
        });
    })
}

export default {
    // 获取随机封面
    getRandomCover() {
        return getRandomCoverFunc();
    },
    // 获取文章列表
    getArticleList() {
        let result = null;
        let url = getApiUrlFunc();
        Axios.get(url)
            .then(function (response) {
                result = response.data;

                // 检查是否有cover
                for (let item of result) {
                    if (item.coverUrl == null) {
                        // 获取随机cover
                        console.log(getRandomCoverFunc());
                    }
                }
            })
            .catch(function (error) {
                console.log("获取文章列表失败：" + error);
            });
        console.log(result);
        return result;
    },
    // 获取文章详情
    getArticleContent(aid) {
        let result = null;
        let url = getApiUrlFunc(aid);
        Axios.get(url)
            .then(function (response) {
                result = response.data;
            })
            .catch(function (error) {
                console.log("获取文章详情失败：" + error);
            });
        return result;
    },
    // 点赞文章
    updateArticleLike(aid) {
        let result = false;
        let url = getApiUrlFunc(aid, "Like");
        Axios.put(url).then(() => result = true)
            .catch(function (error) {
                console.log("更新文章点赞数目失败：" + error);
            });
        return result;
    },
    // 阅读文章
    updateArticleRead(aid) {
        let result = false;
        let url = getApiUrlFunc(aid, "Read");
        Axios.put(url).then(() => result = true)
            .catch(function (error) {
                console.log("更新文章阅读数目失败：" + error);
            });
        return result;
    }
}