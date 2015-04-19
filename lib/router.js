Router.map(function(){

	this.route('home', {path: '/'});
	this.route('report');
});

Router.configure({
	layoutTemplate: 'layout'
})