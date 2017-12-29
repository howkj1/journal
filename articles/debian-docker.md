
## Interview:
- https://usesthis.com/interviews/jessie.frazelle/

#### Linux or Death (aka How to install Linux on a Mac) - Build kernel from source
- https://blog.jessfraz.com/post/linux-on-mac/

#### Docker Containers on the Desktop
- https://blog.jessfraz.com/post/docker-containers-on-the-desktop/

#### Ultimate Linux on the Desktop
- https://blog.jessfraz.com/post/ultimate-linux-on-the-desktop/

## Linux boot camp: From casual Linux user to kernel hacker
- https://conferences.oreilly.com/oscon/open-source-2015/public/schedule/detail/41300
- https://usesthis.com/interviews/jessie.frazelle/ 
- https://www.safaribooksonline.com/library/view/oscon-2015-complete/9781491927991/video217962.html

## Two step process:
- vagrant init debian/jessie64; vagrant up --provider virtualbox; vagrant ssh

- sudo apt-get update; sudo apt-get install xorg i3 -y; sudo bash install.sh sources; sudo bash install.sh wm; bash install.sh dotfiles; bash install.sh vim; bash install.sh scripts


###### Notes:
##### Things to Do After Installing Debian 7 Wheezy Netinst | Minimal Debian 7 Base With i3 Window Manager
- https://tranjeeshan.wordpress.com/2015/07/04/things-to-do-after-installing-debian-7-wheezy-netinst-minimal-debian-7-base-with-i3-window-manager/

##### refcard
- https://i3wm.org/docs/refcard.html

<div>
<header>
<img id="logo" src="https://i3wm.org/docs/logo-30.png" alt="">
<h1>i3 Reference Card</h1>
<a href="http://i3wm.org/docs/userguide.html">http://i3wm.org/docs/userguide.html</a>
<p>
Throughout this guide, the i3 logo will be used to refer to the configured modifier.
This is the <kbd></kbd> key (<code>Mod1</code>) by default,
with super/<kbd></kbd> (<code>Mod4</code>) being a popular alternative.
<body><div>
<header>
<img id="logo" src="https://i3wm.org/docs/logo-30.png" alt="">
<h1>i3 Reference Card</h1>
<a href="http://i3wm.org/docs/userguide.html">http://i3wm.org/docs/userguide.html</a>
<p>
Throughout this guide, the i3 logo will be used to refer to the configured modifier.
This is the <kbd></kbd> key (<code>Mod1</code>) by default,
with super/<kbd></kbd> (<code>Mod4</code>) being a popular alternative.
</p>
</header>
<section>
<h2>Basics</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>open new terminal
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>j</kbd>
</td><td>focus left
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>k</kbd>
</td><td>focus down
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>l</kbd>
</td><td>focus up
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>;</kbd>
</td><td>focus right
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>toggle focus mode
</td></tr></tbody></table>
</section>
<section>
<h2>Moving windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>j</kbd>
</td><td>move window left
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>k</kbd>
</td><td>move window down
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>l</kbd>
</td><td>move window up
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>;</kbd>
</td><td>move window right
</td></tr></tbody></table>
</section>
</div><div>

<section>
<h2>Modifying windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>f</kbd>
</td><td>toggle fullscreen
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>v</kbd>
</td><td>split a window vertically
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>h</kbd>
</td><td>split a window horizontally
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>r</kbd>
</td><td>resize mode
</td></tr></tbody></table>
<p class="ref">Look at the “Resizing containers / windows” section of the user guide.</p>
</section>

<section>
<h2>Changing the container layout</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>e</kbd>
</td><td>default

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>s</kbd>
</td><td>stacking

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>w</kbd>
</td><td>tabbed
</td></tr></tbody></table>
</section>

<section>
<h2>Floating</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd></kbd>
</td><td>toggle floating
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>drag floating
</td></tr></tbody></table>
</section>


<section>
<h2>Using workspaces</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>0</kbd>-<kbd>9</kbd>
</td><td>switch to another workspace
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>0</kbd>-<kbd>9</kbd>
</td><td>move a window to another workspace
</td></tr></tbody></table>
</section>

</div><div>

<section>
<h2>Opening applications / Closing windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>d</kbd>
</td><td>open application launcher (dmenu)
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>q</kbd>
</td><td>kill a window
</td></tr></tbody></table>
</section>

<section>
<h2>Restart / Exit</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>c</kbd>
</td><td>reload the configuration file
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>r</kbd>
</td><td>restart i3 in place

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>e</kbd>
</td><td>exit i3

</td></tr></tbody></table>


<!-- footer -->
<p id="copyright">
Copyright © 2012, Michael Stapelberg
<br>
All rights reserved
<br>
Designed by Zeus Panchenko, updated by Moritz Bandemer
</p>
<p id="licence">
Permission is granted to copy, distribute and/or modify this document provided
the copyright notice and this permission notice are preserved on all copies.
</p>
</section></div>

</body></p>
</header>


<section>
<h2>Basics</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>open new terminal
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>j</kbd>
</td><td>focus left

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>k</kbd>
</td><td>focus down

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>l</kbd>
</td><td>focus up

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>;</kbd>
</td><td>focus right
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>toggle focus mode
</td></tr></tbody></table>
</section>

<section>
<h2>Moving windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>j</kbd>
</td><td>move window left
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>k</kbd>
</td><td>move window down
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>l</kbd>
</td><td>move window up
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>;</kbd>
</td><td>move window right
</td></tr></tbody></table>
</section>

</div><div>

<section>
<h2>Modifying windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>f</kbd>
</td><td>toggle fullscreen
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>v</kbd>
</td><td>split a window vertically
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>h</kbd>
</td><td>split a window horizontally
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>r</kbd>
</td><td>resize mode
</td></tr></tbody></table>
<p class="ref">Look at the “Resizing containers / windows” section of the user guide.</p>
</section>

<section>
<h2>Changing the container layout</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>e</kbd>
</td><td>default

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>s</kbd>
</td><td>stacking

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>w</kbd>
</td><td>tabbed
</td></tr></tbody></table>
</section>

<section>
<h2>Floating</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd></kbd>
</td><td>toggle floating
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd>
</td><td>drag floating
</td></tr></tbody></table>
</section>


<section>
<h2>Using workspaces</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>0</kbd>-<kbd>9</kbd>
</td><td>switch to another workspace
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>0</kbd>-<kbd>9</kbd>
</td><td>move a window to another workspace
</td></tr></tbody></table>
</section>

</div><div>

<section>
<h2>Opening applications / Closing windows</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd>d</kbd>
</td><td>open application launcher (dmenu)
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>q</kbd>
</td><td>kill a window
</td></tr></tbody></table>
</section>

<section>
<h2>Restart / Exit</h2>
<table>
<tbody><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>c</kbd>
</td><td>reload the configuration file
</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>r</kbd>
</td><td>restart i3 in place

</td></tr><tr>
<td><img class="i3mod" src="https://i3wm.org/docs/logo-30.png" alt=""> + <kbd></kbd> + <kbd>e</kbd>
</td><td>exit i3

</td></tr></tbody></table>


<!-- footer -->
<p id="copyright">
Copyright © 2012, Michael Stapelberg
<br>
All rights reserved
<br>
Designed by Zeus Panchenko, updated by Moritz Bandemer
</p>
<p id="licence">
Permission is granted to copy, distribute and/or modify this document provided
the copyright notice and this permission notice are preserved on all copies.
</p>
</section></div>

## Network Manager 
- http://askubuntu.com/a/233489

First, you need to check the network-manager service status. Press Mod4(super key) and Enter/Return key and type this commands:
```
sudo service network-manager status
```
If it is up and running, next, check the available wifi networks:

```
nmcli connection show
```
to connect:

```
nmcli connection up <NAME OF WIFI NETWORK>
```

## Guides: 

- http://www.zdnet.com/article/hands-on-with-the-i3-window-manager-installing-configuring-and-using/
- https://tribaal.io/using-i3.html
