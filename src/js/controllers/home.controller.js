function HomeController ($scope, DataService){

	let vm = this;
	vm.profileCallByEmail = profileCallByEmail;
	vm.profile = {};
	vm.registrant = {
		email: "frank@gmail.com"
	};

	function profileCallByEmail(registrant){
		DataService.getProfileByEmail(registrant).then((res)=>{
			console.log(res.data);
			vm.profile = res.data;
		});
	};

	profileCallByEmail(vm.registrant);

}

HomeController.$inject = ['$scope', 'DataService'];
export { HomeController };