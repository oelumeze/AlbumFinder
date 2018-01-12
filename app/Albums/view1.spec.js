describe('User factory', () => {
     var $httpBackend;
    // beforeEach(angular.module('myApp.Albums'));
   
    beforeEach(inject(function($injector) {

        $httpBackend = $injector.get('$httpBackend');

        authRequestHandler = $httpBackend.when('GET', 'https://itunes.apple.com/search?entity=album&term=wizkid')
                                         .respond({})
    }))
    it('has a dummy', () => {
        // expect(2 + 2).toEqual(4)
       
    });
});