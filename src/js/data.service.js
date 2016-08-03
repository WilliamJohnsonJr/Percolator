function DataService ($http, SERVER, headers) {

	this.getProfileByEmail = getProfileByEmail;

	function getProfileByEmail (registrant){
		$http.post(SERVER.URL + "score/score_one/by_email/", registrant.email, headers);
	}
}

DataService.$inject = ['$http', 'SERVER', 'headers'];
export { DataService };