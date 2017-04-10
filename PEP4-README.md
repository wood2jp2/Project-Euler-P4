PEP4-README.md

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

PERSONAL NOTES:

This one was a challenge for sure. I partially (and incorrectly) was attempting to solve this with while loops, then only one For loop. Each time I had gotten 698896 (the product of 836*836). From here, I knew that I was on the right track, but I figured that my x and y counter variables were only counting each by one, rotating. In other words, instead of counting y for each integer between 100 and 999 THEN counting x for the same, the counter rotated back and forth. I wouldn't be able to find palandromic numbers that were farther apart (such as the solution to this problem 906609 which is the product of 993 and 913).

The way I started this was to declare three variables. x and y would be my counters, counting between 100-999, and z would be their product. I knew that in order to test if the number was a palandrome, I'd have to convert z into a string, and test the correlating characters for similarity. With a little googling (and obviously no intentional code copy here), I found that two For loops, one embedded within the other for each variable x and y, would be the best point of action here. Running the code gave us a list of all palandromes resulting from three digit numbers. After (relatively) short sifting through the data, you once again find that 906609 (993 * 913) is the largest 6 digit palandrome from two three-digit numbers. 

NOTE: I could probably figure out a way to ONLY spit out the maximum palindome here, but I have been at this problem for way too long today...I deserve to move on.