describe('Test login functionality', function() {

	var loginButton;

	beforeEach(function(){
		browser.get("#/login").then(function() {
			loginButton = element(by.xpath("//*[@data-test-id='login-btn']"));
		});
	});

	it('1. Test if the login page is displayed', function () {
		console.log('Test 1');
		browser.get("#/login").then(function() {
			expect(loginButton.isDisplayed()).toBeTruthy();

			var logoImg = element(by.css('[src="images/logo.png"]'));
			expect(logoImg.isDisplayed()).toBeTruthy();
		});
	});

	it('2. Test if the user can login', function () {
		console.log('Test 2');
		browser.get("#/students").then(function() {
			//loginButton.click().then(function () {
			//	expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/students");
			//});
			var table = element(by.xpath("//*[@data-test-id='table']"));
			expect(table.isDisplayed()).toBeTruthy();
		});
	});
});