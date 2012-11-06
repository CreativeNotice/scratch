component {

	variables.applicationSettings = {
		name					= "bugsubscriber",
		sessionManagement		= true,
		dataSource				= "bugsubscriber",
		invokeImplicitAccessor	= true,
		mappings				= {
			"/" = getDirectoryFromPath(getCurrentTemplatePath())
		},
		ormEnabled				= true,
		ormSettings			= {
			dbCreate		= "dropcreate",
			dialect			= "MySQLwithMyISAM",
			logSQL			= true,
			eventhandling	= true
		}
	};
	structAppend(this, variables.applicationSettings);


	public void function onApplicationStart(){
		application.settings = variables.applicationSettings;
		appliaction.mailer = new Mailer();
	}

	public void function onSessionStart(){
		session.loggedIn = false;
	}

	public void function onRequestStart(){
		if (!session.loggedIn){
			location("./public/login.cfm?from=#urlEncodedFormat(CGI.script_name)#", false);
		}
	}

}