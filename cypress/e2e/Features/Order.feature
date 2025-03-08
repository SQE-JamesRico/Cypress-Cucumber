Feature: Order

    Scenario: Verify the user can Order an Item
        Given The user is in the Home Page
        And Click the Nexus 6 Phone
        And Click the Add to Cart Button
        And Click the Cart Navigation Link
        And Click the Place Order Button
        And Fill out the fields 'testname' and 'Philippines' and 'Sample City' and '1234' and 'January' and '2010'
        And Click the Purchase Button
        Then The user has Successfully order an item 'Thank you for your purchase!'

    
        
