const http_path = "/";

const query_fetch = (url, method, formData) => {
    formData = formData || {};
    return fetch(http_path + url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((res) => res);
};

function query_ajax(url, method, formData, onprogress) {
    return new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open(method, http_path + url);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.upload.onprogress = function (event) {
            const percent = Math.round((event.loaded / event.total) * 100);
            onprogress(event, percent);
        };
        ajax.onload = () => {
            if (ajax.status >= 200 && ajax.status < 300) {
                resolve(JSON.parse(ajax.response));
            } else {
                reject({
                    status: ajax.status,
                    statusText: ajax.statusText,
                });
            }
        };
        ajax.onerror = function () {
            reject({
                status: ajax.status,
                statusText: ajax.statusText,
            });
        };
        ajax.send(JSON.stringify(formData));
    });
}
