function HomeController ($scope, DataService){

	let vm = this;
	vm.profileCallByEmail = profileCallByEmail;
	vm.profiles = [];
	vm.registrant = {
		email: "frank@gmail.com"
	};

	function profileCallByEmail(registrant){
		DataService.getProfileByEmail(registrant).then((res)=>{
			console.log(res.data);
			vm.profiles.push(res.data);
			console.log(vm.profiles);
		});
	};

	profileCallByEmail(vm.registrant);

}

HomeController.$inject = ['$scope', 'DataService'];
export { HomeController };