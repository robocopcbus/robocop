Router.map(function(){

	this.route('home', {path: '/'});
	this.route('report', {path: 'report'});
	this.route('signup', {path: 'signup'});
	this.route('done', {path: 'done'});
});

Router.configure({
	layoutTemplate: 'layout'
})