# OSX + Docker + GUI

## Prereqs:
* OS X 10.11.6 (El Capitan)
* Docker 
* XQuartz 
* Jessie Frazelle’s Dockerfile

## Install
```bash
brew cask install xquartz
## restart ## 
open -a XQuartz
ip=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
## command + , : Preferences -> Security 
# Check both boxes :)
xhost + $ip
```
## Firefox
```bash
docker run -it \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e DISPLAY=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}'):0 \
    --name firefox \
    jess/firefox

```

## Chrome

```bash
docker run -it \
    --memory 512mb \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e DISPLAY=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}'):0 \
    -v $HOME/Downloads:/root/Downloads \
    -v $HOME/.config/google-chrome/:/data \
    --name chrome \
    --cap-add=SYS_ADMIN \
    jess/chrome
```

For a more detailed write up see:  [Docker for Mac and GUI applications](https://fredrikaverpil.github.io/2016/07/31/docker-for-mac-and-gui-applications/)

### Sources: 
* [Docker for Mac and GUI applications](https://fredrikaverpil.github.io/2016/07/31/docker-for-mac-and-gui-applications/)
* [Docker: Remove all images and containers](https://techoverflow.net/blog/2013/10/22/docker-remove-all-images-and-containers/)
* [Running GUI apps with Docker](http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)
* [Docker Containers on the Desktop : Jessie Frazelle](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
* [Network namespace supported](https://github.com/jessfraz/dockerfiles/issues/17)
* [Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet)