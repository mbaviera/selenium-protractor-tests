describe('Angular Js', function() {
	it('title', function() {
		browser.driver.get('https://angularjs.org')
		var title = element(by.css('h2')); //pela o valor da variavel h2 (que é AngularJS) e salva em title
		expect(title.getText()).toEqual('AngularJS');//compara o valor pra ver se passa no teste

	});
});