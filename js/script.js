
new Vue({
	el: '#app',
	data: {
			arrMails: [],
	},
	methods: {
		getNumbers() {
			this.arrNumbers = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => {
					// console.log(axiosResponse);
					this.arrMails.push(axiosResponse.data.response);
				})
			}
		},
	},
});