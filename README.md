# FA205_Workshop_5

Website link: https://mremily9.github.io/workshop-task-5/


# Overview
- I looked into learning how to use .csv files within my code.
  - Learning how to import data and showcase the data from a table into a visual manner with code
- Used shapes, images and text to help me display data about myself in a visual manner
- Learnt how to code up a bar graph
- Created my workshop task of showcasing what games I play the most on Steam - using a bar graph and a visual display of games based on hours I played 

  
# Notes

![image](https://github.com/user-attachments/assets/255af8ce-f523-407d-b91d-88994aa60ce0)

Examples from the workshop video 

![image](https://github.com/user-attachments/assets/b451fabf-ef32-46f4-b231-2d0823dee09b)

![image](https://github.com/user-attachments/assets/987f3618-6266-4d92-afa3-a00742461527)


Comments while following the workshop video. 


# Progress (Problem Solving/Code)
**Creating the idea**

I first started out with looking into what type of data about myself that I can collect/is easy to get. 
I had found some heavy inspiration on the yearly wrapped trend and wanted to create something like that or use data that was similar in nature to music and listening habits. 

![image](https://github.com/user-attachments/assets/9f5a0108-85c1-4e68-be54-c99f91ba1abc)

I then landed on using data grabbed from steamDB on my steam profile to see what games I play, how many hours etc

![image](https://github.com/user-attachments/assets/e2705521-1e44-47ba-a101-acc87bdf8346)

I opened up a google sheet and created my table within it 

![image](https://github.com/user-attachments/assets/72a23228-f563-41d3-8b73-2b89e968ec05)


**Coding the Bar Graph**

I started by sketching out my idea to help me visualise what I wanted. 

![image](https://github.com/user-attachments/assets/5a74da17-e106-451c-ad95-7dc1566722eb)

I followed with the workshop video on making a bar graph however I was then put into problem #1. 

**Problem #1: Bar graph not loading**

At this point, I was a bit stumped; having followed the workshop video, I wondered why my bar graph didn't show up. 

![image](https://github.com/user-attachments/assets/6af87a26-f9d0-4319-bc18-0a58af5abe01)

After editing my code multiple times, double checking my code with the one in the workshop video.
However, soon after I had found the problem. 

Looking back into my .csv file to then reference it back to the code I had written, I had saw that the .csv file had an empty first row. 

![image](https://github.com/user-attachments/assets/5b637941-809e-4c4b-898e-ac47185d92ed)

After editing this .csv file so that the first row wasn't empty, my bar graph showed up. 

![image](https://github.com/user-attachments/assets/53531e91-ba53-4d1e-8108-4dac652311a8)

However currently they werent fitting within my canvas according to my own data, and so I played arounhd with the integers within the these two functions - gameLabels() and showHours() to change them. 

```
function gameLabels() {
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let game = row.get("gameTitle");
    fill(0);
    text(game, 30 + x * 60, 320);
  }
}

function showHours(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let hours = row.get("HoursPlayed");
    fill(255, 0, 0);
    rect(30 + x * 60, 320, 30, -hours * 1);
```

Leading to the bar graph showing - problem fixed! 

![image](https://github.com/user-attachments/assets/813b68f6-3e3c-48d0-a22b-48c8e2cdfafe)

**Displaying information in the bar graph**

I then wanted to have the bar graph go in the other way, horizontally instead of vertically. To do this I changed around the x and y within the previous gameLabels() and showHours() functions.

```
function gameLabels() {
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let game = row.get("gameTitle");
    fill(0);
    text(game, 320, 30 + x * 60);
  }
}

function showHours(){
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let hours = row.get("HoursPlayed");
    fill(255, 0, 0);
    rect(320, 30 + x * 60, hours * 1, 30);
  }
}
```

![image](https://github.com/user-attachments/assets/12a55f5e-2cbd-4982-86c5-0569175d6613)

**Problem #2: x axis - hours labeling**

I then started playing around the x axis labels and scale of time/hours played, creating a new function called hoursLabel() for making this. My first attempts werent going well as the numbers showing up didn't make sense to me - being all decimals. 
![image](https://github.com/user-attachments/assets/ebdbd857-5675-4b77-bafd-aaeb96423d07)

I then added red text of the hours for each game within the showHours() to help with debugging and lining up the text. 
![image](https://github.com/user-attachments/assets/4f81d1c0-9a10-47c6-a692-721710e96038)


Here I started to get stumped, thikning that the spacing wasn't correct. I looked into sketching this out so that it made sense to me. 

![image](https://github.com/user-attachments/assets/000b3025-4aca-40c7-874b-53e1a781dfb3)

However I found out the problem was that the hours werent being added like a number - they were being added like a string. Adding a int() helped fix this issue. 

![image](https://github.com/user-attachments/assets/8698f5fe-7115-42ba-9872-ec88a8cfa935)

```
function hoursLabel(){
  let totalHours = 0;
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let hours = row.get("HoursPlayed");
    totalHours += int(hours);
    fill(0);
    // text(totalHours, 30 + x * 60, 350);
  }
```
However I then relised that I didn't need to do that - I just needed to split up the longest game as it was a bar graph, all the other games would be under and that total hours werent needed, only the maximum. 

![image](https://github.com/user-attachments/assets/2493a26d-78ac-4256-9351-6f76564f19fd)

```
function hoursLabel(){
 
  let row = table.getRow(1);
  let row1hours = row.get("HoursPlayed");
 
  text(row1hours, 10, 10);

  let i = row1hours/10;

  text(i, 20, 40);

  for (j = 0; j <= i; j++){
    let space = j * 10;
    fill(0);
    text(space, 80 + j * 30, 350);
  }
}
```

I looked into using line() to create the bottom line and dashes for the x axis 

![image](https://github.com/user-attachments/assets/f9d5cf74-a803-46a4-a2fd-1d6a96b548a3)

![image](https://github.com/user-attachments/assets/ee5ee370-213b-4aa6-a8b9-67cb7ef836d2)

Implementing the following code wihtin the hoursLabel function
```
 for (j = 0; j <= i+1; j++){
    let space = j * 20;
    fill(0);
    text(space, 75 + (j * 40), 350);
    line( 75 + (j * 40), 335, 75 + (j * 40), 325);
  }

  line(75, 330, row1hours * 2.5, 330);

  text('Hours Played', 75, 370);
```


**Final coding comments**


# Future development 

# Reflection
