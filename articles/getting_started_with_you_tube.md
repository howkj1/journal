# Getting Started With YouTube <br /> (180 min and counting)

## Intro
Blogs, technical write-ups, talks ... check, check and check. 

And now YouTube... CHECK! 
  > This is the HowTo I never found

I have put off doing technical video ... until now.
So, last night about 8pm I decided I was going to put up a video and go through the process by midnight. 

  ### Goals:
  - Pro audio quality 
  - Basic editing 
  - YouTube 
  - < 3 hours (180 min) 

Only problem, I have never done a YouTube video. 
Here is what I learned and steps I took. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nspv5iSmm_A" frameborder="0" allowfullscreen></iframe>

## What I used: 
* [yeti microphone](http://www.bluemic.com/products/yeti/)

* [OBS Studio](https://obsproject.com/)

* [kdenlive](https://obsproject.com/)

* [YouTube (obviously)](https://youtube.com/)

## Getting pro audio quality
After struggling with mics in the past (and subsequently spending hours on youtube mic reviews), 
I knew the yeti had a cult like following and therefore should be easy to find info on getting levels set up. 

> ~ 20:30 


So, to Best Buy I went. 

> ~ 21:00 (T-180 min) 


With the Blue Yeti in hand, we turn to YouTube (how do I use this thing?).  

Of coarse unboxing a new toy I had to play with all the buttons but after pushing all the buttons, setting up the Blue Yeti couldn't have been easier. 
Settling on the cardioid setting, I found the best arrangement (so far) is having the mic at a 45 and turned to the left. 

![blue_yeti_cardioid](/images/blue_yeti_cardioid.jpg)

Almost talking past the mic minimized distortion and provided the best sound whether talking loudly or whispering.
The Yeti has a headphone jack and independant volume for monitoring. This is great to get inital levels set.

> ~ 21:45 (T-135 min)

After relizing I spent ~45 min playing with buttons, mic angles, and listening to clips of ramblings, its time to review the YouTube video and get back on track.  

## Audio w/ OBS 

<iframe width="560" height="315" src="https://www.youtube.com/embed/YcDiBTQhgxs" frameborder="0" allowfullscreen></iframe>

<br /> 
### Let's get OBS installed
```
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt-get update
sudo apt-get install obs-studio -y
```
< OBS Yeti filters > 


## Screen Recording w/ OBS

> ~ 22:00 (T-120 min)

Now that the yeti is set up, lets figure out how to actually make the screen recordings.
<iframe width="560" height="315" src="https://www.youtube.com/embed/GbbzrRIhTgc" frameborder="0" allowfullscreen></iframe>

Thanks to Barnacules I not only can record a screen cast but now can **live stream** and create the dual recording conference look. This will come in handy!

![conference_layout](/images/conference_layout.jpg)

> ~ 22:30 (T-90 min)

## Editing out mistakes w/ kdenlive
With a couple more recordings of ramblings (this time with audio and video), it's time for some editing. Back to YouTube!!! 

<iframe width="560" height="315" src="https://www.youtube.com/embed/zDtmP-_XtEU" frameborder="0" allowfullscreen></iframe>


```
$ sudo apt-get install kdenlive -y 
```

This step was a bit tricky and took the longest to gain traction. I was really holding out in hopes to find a completely open source
workflow but with all the final cut pro reviews, I almost, almost downloaded the trial. But, in the end my frustration was more likely
due to sleep depervation and user error than quality / features of kdenlive. Defianetly looking forward to editing with kdenlive and sharing tips and tricks!

## YouTube!!!

> ~ 23:20 (T-40 min)

### Final edits and export 
Ok, lets recap. On a whim, I drove to Best Buy, picked up a Yeti and followed some YouTube videos. Thus far we have
high quality audio, some sample screen recording and even basic editing. With T-40 min I don't yet have a video on YouTube. 
Using kdenlive, I was able to edit a 5 min ramble into a 1 min coherrant take. Now to export and upload. 


### Final edits and export 


## Whats next?

