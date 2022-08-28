export var httpRequestMethod;
(function (httpRequestMethod) {
    httpRequestMethod["get"] = "GET";
    httpRequestMethod["head"] = "HEAD";
    httpRequestMethod["post"] = "POST";
    httpRequestMethod["put"] = "PUT";
    httpRequestMethod["delete"] = "DELETE";
    httpRequestMethod["connect"] = "CONNECT";
    httpRequestMethod["options"] = "OPTIONS";
    httpRequestMethod["trace"] = "TRACE";
    httpRequestMethod["patch"] = "PATCH";
})(httpRequestMethod || (httpRequestMethod = {}));
var xhrReadyState;
(function (xhrReadyState) {
    xhrReadyState[xhrReadyState["unsent"] = 0] = "unsent";
    xhrReadyState[xhrReadyState["opened"] = 1] = "opened";
    xhrReadyState[xhrReadyState["headersRecieved"] = 2] = "headersRecieved";
    xhrReadyState[xhrReadyState["loading"] = 3] = "loading";
    xhrReadyState[xhrReadyState["done"] = 4] = "done";
})(xhrReadyState || (xhrReadyState = {}));
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["ok"] = 200] = "ok";
})(httpStatus || (httpStatus = {}));
export const HTTPReq = (reqInput, cb) => {
    var _a;
    const xhr = new XMLHttpRequest();
    xhr.open(reqInput.reqType, reqInput.url);
    (_a = reqInput.headers) === null || _a === void 0 ? void 0 : _a.forEach((v, k) => {
        xhr.setRequestHeader(k, v);
    });
    xhr.addEventListener(`load`, () => {
        if (xhr.readyState === xhrReadyState.done) {
            if (xhr.status === httpStatus.ok) {
                cb(JSON.parse(xhr.responseText));
            }
            else {
                console.error(xhr.statusText);
            }
        }
    });
    xhr.addEventListener(`error`, () => {
        console.error(xhr.statusText);
    });
    xhr.send();
};
//# sourceMappingURL=httpReq.js.map