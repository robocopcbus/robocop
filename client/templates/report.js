Template.report.events({
	"submit #reportForm": function (event){
		event.preventDefault();
		console.log('form submitted');
		console.log(event.type);
		//alert('report submitted');
		var title = event.target.title.value;
		var timeBegan = event.target.beginTime.value;
		var timeEnd = event.target.endTime.value;
		var location = event.target.location.value;
		var radius = event.target.radius.value;
		var narrative = event.target.narrative.value;

		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var dateOfBirth = event.target.dateOfBirth.value;
		var sex = event.target.sex.value;

		var itemType = event.target.itemType.value;
		var make = event.target.make.value;
		var model = event.target.model.value;
		var dollarValue = event.target.dollarValue.value;
		var description = event.target.description.value;


		var ohioRevisedCode = event.target.ohioRevisedCode.value;
		var sectionNumber = event.target.sectionNumber.value;

		Reports.insert({
			title: title,
			createdAt: new Date(),
			timeBegan: timeBegan,
			timeEnd: timeEnd,
			narrative: narrative,
			firstName: firstName,
			lastName: lastName,
			dateOfBirth: dateOfBirth,
			sex: sex,
			itemType: itemType,
			make: make,
			model: model,
			dollarValue: dollarValue,
			description: description,
			ohioRevisedCode: ohioRevisedCode,
			sectionNumber: sectionNumber

		});

		console.log(JSON.stringify(Reports.find({}, {sort: {createdAt: -1}})));
	}
})