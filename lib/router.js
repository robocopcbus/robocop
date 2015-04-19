Router.map(function(){

	this.route('home', {path: '/'});
	this.route('report', {path: 'report'});
	this.route('signup', {path: 'signup'});
});

Router.configure({
	layoutTemplate: 'layout'
})