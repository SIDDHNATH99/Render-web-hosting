Integration Testing

The purpose of unit testing is to determine that each independent module is correctly implemented. This gives little chance to determine that the interface between modules is also correct, and for this reason integration testing must be performed. One specific target of integration testing is the interface: whether parameters match on both sides as to type, permissible ranges, meaning and utilization.
The individual modules were aggregated one by one and functional testing was performed. The integrated product was considered as a black box and the output (report) is generated depending upon the data present in the flat files.

System Testing
Software is to be incorporated with other system components (e.g. new hardware, information), and thus a series of special tests are to be conducted. Many times, software products are designed to run on a variety of hardware configurations. The software should actually be tested on much different hardware set – ups, although the full range of memory, processor, operating system, and peripheral possibilities may be too large for complete testing. There are many types of specifications and we should be aware of those as we perform system testing. During system testing, we should evaluate a number of attributes of the software that are vital to the user. These attributes represent the operational correctness of the product. Some of the attributes tested are:

Usable: The product is convenient and easy to use. A naïve user can also compare the flat files by browsing the files from their computer and selecting the corresponding interface. User can also add the new interface and can also make modifications in the existing interface.

Secure: Only the authorized user is able to use this tool.


Compatible: The product runs correctly using YUI_EXT Library, works correctly in conjunction with existing software.

Performance Testing
Performance testing is used to uncover performance problems that can result from lack of server-side resources, inappropriate network bandwidth, inadequate database capabilities, faulty or weak operating system capabilities, poorly designed web application functionality, and other hardware and software issues that can lead to degraded client-server performance.


4.2.1White Box Testing
White box testing is a test cases design method that uses the control structure of the procedural design to derive test cases. Test cases can be derived that
Guarantee that all independent paths within a module have been exercised at least once,
Exercised all logical decision on their true and false sides,
Execute all loops at their boundaries and within their operational bounds,
Exercise internal data structure to ensure their validity.
White box tests require knowledge of the internal program structure and are derived from the internal design specification of the code.
They will not detect missing function (i.e. those described in the functional
design specification but not supported by the internal specification or code) Following are the white box techniques which are used for ‘Expenses’ testing,
Branch coverage

Branch coverage exclusively considers the logical value of the result of a condition (true or false). This application contains many conditions like doing repost, adding to my wish list, doing really. Such cases are tested in branch coverage.
Path coverage

Path coverage requires the execution of all different paths through the test object. This is important with respect to mobile application. Application should execute all the paths and should not crash in between.


4.2.2Black Box Testing
Black box testing attempts to drive set of inputs that will fully exercise all the functional requirements of a system. It is not an alternative to white box testing.
This type of testing attempts to find errors in the following categories:

Errors,
Incorrect or missing function.
Interface errors in data structure or external database access,
Performance errors,
Initialization and termination errors.

Tests are designed to answer the following questions:

How is the functions validity tested?
What classes of inputs will make good test cases?
Is the system particularly sensitive to certain input values?
How are the boundaries of the data class isolated?
What data rates and data volume can the system tolerate?

White box testing should be performed early in the testing process, while black box testing tends to be applied during later stages. Test cases should be derived which reduces the number of additional test cases that must be designed to achieve reasonable testing, and tell us something about the presence or absence of classes of error rather than an error associated only with the specific test at hand.
Following are the black box techniques which were used for ‘Mobile Social Network’ testing

Equivalence class partitioning

Test case for input fields such as start date, end date, amount etc. are prepared and tested. Equivalence class partitioning helps to reduce total time in testing by dividing valid and invalid test cases.
Boundary value analysis

Faults often occur at the boundary of equivalence classes, because boundaries are not often defined clearly or misunderstood by programmers. Application having range fields such as amount, date ranges are tested using this technique.
State transition testing

In many cases, not only current input, but also the history of execution or events or inputs, influences the outputs. Application has many fields such as date, project, category which has different effects on overall application. Minor change in each of them triggers changes in lot of input methods. These fields are tested under state transition testing.