export enum httpRequestMethod {
	get = `GET`,
	head = `HEAD`,
	post = `POST`,
	put = `PUT`,
	delete = `DELETE`,
	connect = `CONNECT`,
	options = `OPTIONS`,
	trace = `TRACE`,
	patch = `PATCH`
}
enum xhrReadyState {
	unsent = 0,
	opened = 1,
	headersRecieved = 2,
	loading = 3,
	done = 4
}
enum httpStatus {
	ok = 200
}
export const HTTPReq = (reqInput: {
	url:string | URL,
	reqType:httpRequestMethod,
	headers?: Map<string, string>
},
cb: (returnObject:any) => void) => {
	const xhr = new XMLHttpRequest();
	xhr.open(reqInput.reqType, reqInput.url)
	reqInput.headers?.forEach((v, k) => {
		xhr.setRequestHeader(k, v)
	})
	xhr.addEventListener(`load`, () => {
		if (xhr.readyState === xhrReadyState.done) {
			if (xhr.status === httpStatus.ok) {
				cb(JSON.parse(xhr.responseText))
			} else {
				console.error(xhr.statusText)
			}
		}
	})
	xhr.addEventListener(`error`, () => {
		console.error(xhr.statusText)
	})
	xhr.send()
}