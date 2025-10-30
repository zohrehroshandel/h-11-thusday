import { El } from "../utils/El";
export function LoginForm() {
	let isRememberChecked = false;
	let userName;
	let userPassword;

	function updateChecked(isCheck) {
		isRememberChecked = isCheck;
	}
	function handelChange(name, value) {
    if(name==='password'){
      userPassword=value
    }
      else if(name==='username'){
      userName=value
    }
	}

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
						callback: () => {
							console.log(isRememberChecked);
             
              
              
						},
					},
				],
			}),
		],
	});
}
