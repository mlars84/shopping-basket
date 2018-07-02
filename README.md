## Run `yarn output` to execute output script with babel-node

The input and output amounts differed, so I opted to go with the output amounts.
Also, it appears that the importDuty was left out of the output amounts, so
unless I am missing something, my totals include the base amount with import duty
applied and the correct sales tax (excluding the exempt products).

----

Guidelines
The goal of this assessment is to validate your ability to create a high quality, production
ready application including unit tests that meets the stated requirements.

The solution should be implemented in Typescript or ES6 (Node.js).
It is preferred that you write the output to stdout. 
Best Coding and Design Practices are required.

Problem Statement
Basic sales tax is applicable at a rate of 10% on all goods, except candy, popcorn and coffee, which are exempt.
Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
When items are purchased a receipt is produced which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid.
Sales tax is rounded up to the nearest multiple of $0.05. This rounding is done by item, by type of tax (basic sales and import duty)
Write an application that persists or prints out the receipt details for these shopping baskets.

Input
Shopping Basket 1:
1 16lb bag of Skittles at 16.00
1 Walkman at 99.99
1 bag of microwave Popcorn at 0.99

Shopping Basket 2:
1 imported bag of Vanilla-Hazelnut Coffee at 11.00
1 Imported Vespa at 15,001.25

Shopping Basket 3:
1 imported crate of Almond Snickers at 75.99
1 Discman at 55.00
1 Imported Bottle of Wine at 10.00
1 300# bag of Fair-Trade Coffee at 997.99

Output

Output 1:
1 16lb bag of Skittles: 16.00
1 Walkman: 99.99
1 bag of microwave Popcorn: 0.99
Sales Taxes: 10.00
Total: 126.98

Output 2:
1 imported bag of Vanilla-Hazelnut Coffee: 11.55
1 Imported Vespa: 17,251.5
Sales Taxes: 2,250.8
Total: 17,263.05

Output 3:
1 imported crate of Almond Snickers: 79.79
1 Discman: 60.5
1 imported bottle of Wine: 11.5
1 300# Bag of Fair-Trade Coffee: 997.99
Sales Taxes: 10.8
Total: 1,149.78

