component {

	// magic data
	variables.bugUrl = "https://bugbase.adobe.com/index.cfm?event=bug&id=";
	variables.patterns	= {
		notfound	= "<title>The information requested is not found</title>",
		title		= "<h2>Title</h2>\s*<p>(.*?)</p>",
		status 		= "<h3>status</h3>\s*<div[^>]+>.*?</div>\s*<div[^>]+>.*?</div>\s*<div[^>]+>.*?</div>",
		comments	= '<div id="comment">.*?</div>',
		votes		= '<div id="votes">.*</div>'
	};

	public AdobeBug function init(required numeric adobeId){
		variables.bug = fetchBug(adobeId);
		return this;
	}

	public struct function getBug(){
		return variables.bug;
	}
	
	
	private struct function fetchBug(required numeric adobeId){
		var httpService = new http(
			method	= "get",
			url		= variables.bugUrl & adobeId
		);
		var response = httpService.send().getPrefix();
		var details = {
			id		= adobeId,
			fetched	= false,
			title	= "",
			status	= "",
			comments= "",
			votes	= ""
		};
		var match	= false;
		
		if (response.statusCode == "200 OK"){
			// got a response, but is it legit?
			if (!findNoCase(variables.patterns.notfound, response.fileContent)){
				// ie: we DID find it
				details.fetched = true;

				match = reFindNoCase(variables.patterns.title, response.fileContent, 1, true);
				if (arrayLen(match.pos) == 2){
					details.title = mid(response.fileContent, match.pos[2], match.len[2]);
				}

				match = reMatchNoCase(variables.patterns.status, response.fileContent);
				if (arrayLen(match)){
					details.status = hash(match[1]);
				}
				match = reMatchNoCase(variables.patterns.comments, response.fileContent);
				if (arrayLen(match)){
					details.comments = hash(match[1]);
				}
				match = reMatchNoCase(variables.patterns.votes, response.fileContent);
				if (arrayLen(match)){
					details.votes = hash(match[1]);
				}
			}
		}
		
		return details;
	}

}