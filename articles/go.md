# Go!

## Learning GO!


 [awesome-go](https://github.com/avelino/awesome-go):

 [ ]  [Writing, building, installing, and testing Go code](https://www.youtube.com/watch?v=XCsL89YtqCs)


 [ ] [A Tour of Go (Youtube)](https://www.youtube.com/watch?v=ytEkHepK08c&wl_token=0dimQXNqGLkKpjxQYpxBatIfMZZ8MTQ4NTU2NTk5NUAxNDg1NDc5NTk1&wl_id=Vlie-srOU8c)

   [ ] [A Tour of Go ](https://tour.golang.org/welcome/1)

 [ ] [Vim-go](https://www.youtube.com/watch?v=7BqJ8dzygtU)

 [ ] [Build Web Apps with Go Language (golang)](https://www.youtube.com/watch?v=Vlie-srOU8ca)



### Getting going with Go! 
#### Install : 

* [ubuntu: install go](https://www.digitalocean.com/community/tutorials/how-to-install-go-1-6-on-ubuntu-16-04)
  * [Go Version Manager ](https://github.com/moovweb/gvm)
  * [Go Tour go1.4 ](http://stackoverflow.com/a/40218284)

#### install :
  
  ```
  vagrant up; vagrant ssh
  ```

  ```
  curl -O https://storage.googleapis.com/golang/go1.6.linux-amd64.tar.gz
  sha256sum go1.6.linux-amd64.tar.gz
  tar xvf go1.6.linux-amd64.tar.gz
  sudo chown -R root:root ./go
  export GOROOT=$HOME/go
  export GOPATH=$HOME/work
  export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

  ```

#### hello world :


 ```
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ mkdir $HOME/work
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤  mkdir -p work/src/github.com/joshmccall221/hello
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤  cat ~/work/src/github.com/joshmccall221/hello/hello.go        
  package main

  import "fmt"

  func main() {
          fmt.Printf("hello, world\n")
  }
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ go install github.com/joshmccall221/hello  
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ hello
  hello, world
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ which hello
  /home/vagrant/work/bin/hello
  ```


#### hello world (unicode) :

  ```
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ cat ~/work/src/github.com/joshmccall221/hello_jap/hello_jap.go 

  package main

  import "fmt"

  func main() {
          fmt.Println("Hello, 世界")
          }

  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ go install github.com/joshmccall221/hello_jap
  ┌──(~) n(vagrant)──────────────────────────────────(✔)─
  └──➤ hello_jap 
  Hello, 世界世
  ```
#### Reverse :

  ```
  ┌──(~) n(vagrant)───────────────────────────────────(✔)─
  └──➤ cat work/src/github.com/joshmccall221/string/string.go 
  package string

  func Reverse(s string) string {
    b := []byte(s)
    for i :=0; i < len(b)/2; i++ {
      j := len(b)-i-1
      b[i], b[j] = b[j], b[i]
    }
    return string(b)
  }
  ┌──(~) n(vagrant)───────────────────────────────────(✘)─
  └──➤ go install github.com/joshmccall221/hello
  ┌──(~) n(vagrant)───────────────────────────────────(✔)─
  └──➤ hello

  dlrow ,olleh
  ```
