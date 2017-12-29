
#Windows Development for $2.30/day

## On anything but a PC (Chromebook, Mac, whatever....)

I don't have a windows box (some may say I am not the biggest Microsoft fan) but I recently needed to troubleshoot a ASP issue (go figure). And even though Macs are the best PCs,   
>[MacBook Pro declared 'best-performing' Windows laptop](https://www.cnet.com/news/macbook-pro-declared-best-performing-windows-laptop/)

the thought of dual booting for windows just makes me not want to dev at all.

Secretly, I've wanted to play with Azure but M$ is known for costing out the nose and being *mostly anti-microsoft* I just didn't know where to start. I needed a way to dev in a windows env without running windooze.... 

##First attempt: 
[modern ie](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) + VirtualBox

Plagued with Guest Addition, battery draining and disk eating woes, this works, in a pinch but IMO not the best for long term dev. 

>Pros: 
>* Save machine state with snapshots
>* Destroy and Up with Vagrant

>Cons: 
>* Windows
>* Resource hog
>* Guest Additions 

##Second attempt: 

"If only I could get an affordable 'Linode-like' solution for windows..."

>####How it started: 
>[I swapped my MacBook for an iPad+Linode](http://yieldthought.com/post/12239282034/swapped-my-macbook-for-an-ipad)

>[iPad + Linode, 1 Year Later](http://yieldthought.com/post/12239282034/swapped-my-macbook-for-an-ipad)

I had set up a linode VPS and loved developing from a Chromebook so thought I would see if I could replicate this for a windows env. 
> see earlier article:  [Azure, Visual Studio, ASP.NET MVC 5 Entity Framework!!!](chromebook.md)

###Pricing 
<img src="../images/azure_pricing.png" width="300">

## So how $2.30? 
$193.44 is 24/7 for a month. So lets work backwards: 

	($193/mo) x (4 weeks/mo) x (7 days/week) x (24hrs/day) ~= $0.2872 per hr

Rough estimates: 

	~=$2.297 : Day   

	~=$11.48 : Week  

	~=$45.94 : Month 

	~=$551.28 : Year


Now I can start up the Azure VM from any device anywhere, develop from a laptop, tablet or, if daring, smart phone. 
