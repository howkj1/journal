## Hands on with Codenvy

### [codenvy.io](https://codenvy.io/site/login)

![codenvy_login](../../images/codenvy_login.png)

### New workspace

![codenvy_login](../../images/codenvy_workspace.png)

> FROM sunix/jekyll4che


### Click save

![codenvy_create](../../images/codenvy_create.png)

### Add your project
![codenvy_project](../../images/codenvy_project.png)

### Click Create
![codenvy_starting](../../images/codenvy_starting.png)

### Create a new custom command and save

>Name: Run Jekyll

>Command line: cd $(ls /projects/) && jekyll serve --host=0.0.0.0

>Preview URL: http://${server.port.4000}/


![codenvy_command](../../images/codenvy_command.png)

### Run command and visit the preview link

![codenvy_run](../../images/codenvy_run.png)

### Enjoy your cloud dev environment!!!

![codenvy_cloud](../../images/codenvy_cloud.png)
