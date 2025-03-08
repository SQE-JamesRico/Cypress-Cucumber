Feature: Login

    @smoke
    Scenario: Verify the user can Login using valid credentials
        Given The user is in the Home Page
        And Click the Login Navigation link
        When The user enter a valid credentials 'oneusername' and 'onepassword'
        And Click the Login
        Then The user has Successfully Login 'Welcome'
        
