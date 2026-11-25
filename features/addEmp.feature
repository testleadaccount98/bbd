Feature: PIM page functionality



Background:
	Given Open the firefox browser
	Given Navigate to the app URL
    Given log in to the application
     Then verify Welcome bhargav

Scenario: Verify Add Employee Functinality 
    

     When move mouse to the PIM 
     And click on the Add Employee Button 
     And switch to ifame

    And enter the first name "hanu" into the first name field 
    And enter the second name "DSU"into the second name field 
    And click on the save button to Add the emplyees 

    When click on Edit button
    And  change the nationality and Marital Status 
    And check on checkbox smoker 
    And select the gender radio button 
    And  click on save button 
 
