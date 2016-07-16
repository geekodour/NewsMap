var googleapi = require('./googleapi');


var nlphelpers = {
	logNews : function(){
		return googleapi.getNews();
	}
}


module.exports = nlphelpers ;