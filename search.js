$(document).ready(
	function(){
		var $searchForm		= $("#frm");
		var $productSelect	= $("select[name=product]", $searchForm);	
		var $versionSelect	= $("select[name=version]", $searchForm);
		var $searchSubmit	= $("input[name=btnSearch]", $searchForm);

		// create necessary objects
		var searchForm = new SearchForm(
			{
				$productSelect	: $productSelect,
				$versionSelect	: $versionSelect
			}
		);
		var $searchForm = $(searchForm);

		var searchProxyConfig = new SearchProxyConfig(
			{
				getProductId	: searchForm.getProductId,
				getVersionId	: searchForm.getVersionId,
				getSearchValue	: searchForm.getSearchValue
			}
		);


		var searchProxy = new SearchProxy(searchProxyConfig.settings);
		var $searchProxy = $(searchProxy);

		$searchForm.on(
			"needProducts",
			searchProxy.getProducts
		);
		
		$searchProxy.on(
			"haveProducts",
			searchForm.populateProducts
		);


		$searchForm.on(
			"needVersions",
			searchProxy.getVersions
		);
		
		$searchProxy.on(
			"haveVersions",
			searchForm.populateVersions
		);

		
		$searchForm.trigger("needProducts");	

		
		// form control binds
		$productSelect.on(
			"change",
			function(){
				$searchForm.trigger("needVersions");
			}
		);
		$searchSubmit.on(
			"click",
			searchForm.performSearch
		);
		
		
	}
);