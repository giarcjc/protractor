describe('angularjs homepage todo list', function() {
  it('should login to Pro Portal as pensco user', function() {
    browser.get('https://portal.pensco-test.com/identity/login');

    element(by.model('loginCtrl.user.username')).sendKeys('pensco');
    element(by.model('loginCtrl.user.password')).sendKeys('pensco');
    element(by.css('#penSubmitBtn')).click();
    element(by.css('#answer')).sendKeys('bt');
    element(by.css('#penSubmitBtn')).click();
    expect(element(by.css('#home-page-partner'))).toBeDefined();
    element(by.css('#logoutlink')).click();
    // element(by.css('.btn .btn-success .col-xs-12')).click();
  });

  it('should login to Account Portal as singleower user', function() {
    browser.get('https://portal.pensco-test.com/identity/login');

    element(by.model('loginCtrl.user.username')).sendKeys('singleowner');
    element(by.model('loginCtrl.user.password')).sendKeys('P@ssw0rd');
    element(by.css('#penSubmitBtn')).click();
    element(by.css('#answer')).sendKeys('bt');
    element(by.css('#penSubmitBtn')).click();

    //portal button -- needs id
    // element(by.css('#')).click();

    //overview is gone, need something to verify page
    // expect(element(by.css('.content-header-container .ng-binding'))).toBe('Accounts');

    element(by.css('#logout-btn')).click();
        
  });

});