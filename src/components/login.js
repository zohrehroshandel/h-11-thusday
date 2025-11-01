import { El } from "../utils/El";
export function LoginForm() {
	let isRememberChecked = false;
	let userName;
	let userPassword;

	function updateChecked(isCheck) {
		isRememberChecked = isCheck;
	}
	function handelChange(name, value) {
		if (name === "password") {
			userPassword = value;
		} else if (name === "username") {
			userName = value;
		}
	}
	function deleteCookie(name) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}
	function handleSubmit() {
		const userData = JSON.stringify({ userName });
		const expirationTime = new Date();
		expirationTime.setTime(expirationTime.getTime() + 5 * 60 * 1000);
		if (!!userName && !!userPassword) {
			if (isRememberChecked) {
				localStorage.setItem("userName", userData);
			} else {
				sessionStorage.setItem("userName", userName);
			}
			// document.cookie = `userData=${userData};expires=${expirationTime.toUTCString()};path=/`;
			deleteCookie("userData");
		}
	}
	function getFromLocalStorage() {
		const localStorageData = JSON.parse(localStorage.getItem("userName"));
		return localStorageData;
	}
	console.log(getFromLocalStorage());

	return El({
		element: "div",
		className:
			"bg-blue-200 w-[40%] h-auto rounded-md shadow-md flex flex-col gap-4 justify-center items-center p-8",
		children: [
			El({
				element: "input",
				className: "w-full border border-gray-400 rounded-xs h-5 ",
				placeholder: "enter your user name",
				type: "text",
				name: "username",
				eventListener: [
					{
						event: "input",
						callback: (e) => {
							handelChange(e.target.name, e.target.value);
						},
					},
				],
			}),
			El({
				element: "input",
				className: "w-full border border-gray-400 rounded-xs h-5 ",
				placeholder: "enter your password",
				name: "password",
				type: "password",
				eventListener: [
					{
						event: "input",
						callback: (e) => {
							handelChange(e.target.name, e.target.value);
						},
					},
				],
			}),
			El({
				element: "div",
				className: "w-full flex gap-2 text-blue-950",
				children: [
					El({
						element: "input",
						type: "checkbox",
						id: "remember",
						name: "remember",
						eventListener: [
							{
								event: "input",
								callback: (e) => {
									updateChecked(e.target.checked);
								},
							},
						],
					}),
					El({
						element: "label",
						htmlFor: "remember",
						innerHTML: "remember me?",
					}),
				],
			}),
			El({
				element: "button",
				innerHTML: "submit",
				className: "bg-blue-950 text-white p-2 rounded-md ",
				eventListener: [
					{
						event: "click",
						callback: handleSubmit,
					},
				],
			}),
		],
	});
}
