function HomeController ($scope, DataService){

	let vm = this;
	vm.profileCallByEmail = profileCallByEmail;

	vm.registrant = {
		email: "sally@gmail.com"
	}

	function profileCallByEmail(registrant){
		DataService.getProfileByEmail(registrant).then((res)=>{
			console.log(res.data);
		});
	};

	profileCallByEmail

}

HomeController.$inject = ['$scope', 'DataService'];
export { HomeController };