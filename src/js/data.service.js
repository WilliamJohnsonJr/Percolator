function DataService ($http, SERVER, headers) {
	this.getProfileByEmail = getProfileByEmail;

	function getProfileByEmail (registrant){
		console.log(registrant)
			var req = {
				 method: 'POST',
				 url: SERVER.URL + "profile/find_one/by_email/full",
				 headers: headers,
				 data: {email: registrant.email},
				 json: true
				}
		return $http(req);
	}
}

DataService.$inject = ['$http', 'SERVER', 'headers'];
export { DataService };