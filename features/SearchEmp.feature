Feature: Search Emplyee 


Background:
	Given Open the firefox browser
	Given Navigate to the app URL
  

Scenario: Search For an Employee 

    When log in to the application
    And switch to iframe 
    

    And search employee first name in search field 
    And enter employee first name  in search field 
    And click the search button
    

    Then verify that the employee name displayed matches "Hanu DSU"