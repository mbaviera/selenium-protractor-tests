describe('Angular Js', function() {
	browser.driver.get('https://angularjs.org')
	it('title', function() {
		var title = element(by.css('h2')); //pela o valor da variavel h2 (que é AngularJS) e salva em title
		expect(title.getText()).toEqual('AngularJS');//compara o valor pra ver se passa no teste

	});
	it('textDisplay-theBasics', function() {
		var text1 = element(by.id('the-basics'));
		expect(text1.getText()).toEqual('The Basics');

	});

	it('textDisplay-addSomeControl', function() {
		var text2 = element(by.id('add-some-control'));
		expect(text2.getText()).toEqual('Add Some Control');

	});
});