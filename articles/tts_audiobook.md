# TtsAudiobook 

## Tts Audiobook
## Links
[A practical intelligence amplification hack that really works](https://www.turnkeylinux.org/blog/practical-intelligence-amplification)

## Scenario
Listening to drm ebooks with tts on my phone.

I am a big fan of [Moon+ Reader](https://play.google.com/store/apps/details?id=com.flyersoft.moonreaderp&hl=en).

![moon-plus-pro](/images/moon-plus-pro.png)

## Install Kindle and Calibre
>kindle v1.20

>calibre v3.7


```
brew cask install kindle calibre
```
![kindle-calibre](/images/kindle-calibre.png)

## Download and Install DeDRM plugin tools 
```
wget https://github.com/apprenticeharper/DeDRM_tools/releases/download/v6.5.4/DeDRM_tools_6.5.4.zip
```

- calibre -> Preferences -> Change calibre behavior (CMD-P)
- Plugins -> Load plugin from file -> DeDRM_tools/DeDRM_calibre_plugin/DeDRM_plugin.zip

![moon-plus-pro](/images/calibre-plugin.png)

## KFX support
Amazon's new format throws a wrench into things. Before you download your books in the kindle app, run this:
>see: https://www.mobileread.com/forums/showthread.php?s=5aefa0f17123555263f8d05351b51f1d&t=283371

```
chmod -x /Applications/Kindle.app/Contents/MacOS/renderer-test
```
## Download the books in the kindle app
- Kindle -> Preferences... (cmd-,) -> Content Folder
  - Set this to somewhere easy to get to
- right click book in library -> download 

![kindle-download](/images/kindle-download.png)

## Add book to Calibre
- Calibre -> Add books (A) 
  - Find kindle book we just downloaded

![calibre-add](/images/calibre-add.png)

Thats it folks!!!

Now you can read your book in any reader you choose!


## Moon+ Reader
Moon+ Reader has an impressive number of features and has encouraged me to read more! 

To get your book from Calibre on your computer to your phone follow these steps: 
- Calibre -> Connect/Share -> Start Content server
![calibre-connect-share](/images/calibre-connect-share.png)
- On your phone, visit the url given.
- Download the book and open with Calibre!


- Download: [Moon+ Reader](https://play.google.com/store/apps/details?id=com.flyersoft.moonreader)

