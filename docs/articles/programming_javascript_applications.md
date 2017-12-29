Programming JavaScript Applications by Eric Elliott
=======

Table of Contents
[√] [Preface](http://chimera.labs.oreilly.com/books/1234000000262/index.html)
	Introduction
	Who This Book Is For
	Who This Book Is Not For
	Unit Testing
	Conventions Used in This Book
	Safari® Books Online
	How to Contact Us
	Thanks
[√] 1. [The JavaScript Revolution](http://chimera.labs.oreilly.com/books/1234000000262/ch01.html)
	Advantages of JavaScript
	Performance
	Objects
	Syntax
	First-Class Functions
	Events
	Reusability
	The Net Result
	Anatomy of a Typical Modern JavaScript App
	Infrastructure
	JSON: Data Storage and Communication
	NoSQL Data Stores
	RESTful JSON Web Services
[√] 2. Functions
	Minimize Side Effects
	Function Definition
	Named Function Expressions
	Lambdas
	Immediately Invoked Function Expressions
	Method Context
	Function Scope
	Hoisting
	Closures
	Method Design
	Named Parameters
	Function Polymorphism
	Generics and Collection Polymorphism
	Method Chaining and Fluent APIs
	Functional Programming
	Stateless Functions (aka Pure Functions)
	Partial Application and Currying
	Asynchronous Operations
	Callbacks
	Promises and Deferreds
	Conclusion
[√] 3. Objects
	Classical Inheritance Is Obsolete
	Fluent-Style JavaScript
	Prototypes
	Delegate Prototypes
	Prototype Cloning
	The Flyweight Pattern
	Object Creation
	Factories
	Prototypal Inheritance with Stamps
	Conclusion
[√] 4. Modules
	Principles of Modularity Interfaces
	The Module Pattern
	Asynchronous Module Definition
	Plug-Ins
	Node-Style Modules
	npm
	ES6 Modules
	Building Client-Side Code with CommonJS, npm, Grunt, and Browserify
	Defining the App
	Feature Implementation
	Bundling and Deployment
	Conclusion
[ ] 5. Separation of Concerns
	Client-Side Concerns
	Module Management
	Events
	Model View Controller/MV*
	Presentation and DOM Manipulation
	Server-Side Concerns
	Getting Started with Node and Express
	Conclusion
[ ] 6. Access Control
	Authentication
	Passwords
	Credential
	Multifactor Authentication
	Federated and Delegated Authentication
	Authorization
	Authorizing Applications
	OAuth 2.0
	Conclusion
[ ] 7. Logging
	Debugging
	Server Operations
	Security
	Auditing
	Business Analytics
	Viral Factor
	Logging Checklist
	Logging Requests
	Logging Errors
	Sample Log Output
	Logging Service Alerts
	Logging Goals
	Profiling and Instrumentation
	Logging Client-Side Events
	Deciphering Data
	Conclusion
[ ] 8. Building RESTful APIs
	Usable
	Focus
	Consistency
	Self-Describing: Hypermedia
	Affordances
	HATEOAS
	HTML as an API Media Type
	Jade
	Jiron
	Responsive APIs
	Optimizing for Speed
	Conclusion
[ ] 9. Feature Toggle
	Organizing Features
	Scale of a Feature
	Feature Groups
	Lifespan of a Feature
	Development
	Staging
	Production Testing
	Feature Rollout
	Default Activation
	Full Integration
	Implementation
	Conclusion
[ ] 10. Internationalization
	Conclusion
	A. JavaScript Style Guide
	Example Tests
	QUnit Primer
	Code Quality
	Best Practices Quick Reference
	Indentation: Be Consistent
	Use Semicolons
	Bracket Placement: Right Side
	Avoid Name Collisions
	Always Use var
	Use One var Statement per Function
	Avoid Constant Abuse
	Use Functional Iterators When Possible
	Be Careful with if Statements
	Avoid Side Effects
	Don't Use switch
	Don't Use eval()
	Index


Preface (Reading List): 
	Who This Book Is Not For:
		- JavaScript: The Good Parts, by Douglas Crockford (O’Reilly, 2008)
		- JavaScript: The Definitive Guide, by David Flannagan (O’Reilly, 2011)
		- Gang of Four book (GoF)
				Design Patterns: Elements of Reusable Object-Oriented Software
					by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (Addison-Wesley, 1994)
	Beginner:
		- Eloquent JavaScript by Marijn Haverbeke (No Starch Press, 2011)

The JavaScript Revolution
	- "JavaScript, HTML, and CSS have become so prevalent that many operating
	systems have adopted the open web standards as the presentation layer for native
	apps, including Windows 8, Firefox OS, Gnome, and Google's Chrome OS.
	Additionally, the iPhone and Android mobile devices support web views that allow
	them to incorporate JavaScript and HTML5 functionality into native
	applications."
	- The Net Result
	 - http://www.thewildernessdowntown.com/
	>>> The Net Result
		>>> JavaScript developers are at the heart of what may be the single biggest
		    revolution in the history of computing: the dawn of the realtime web. Messages
		    pass back and forth across the net, in some cases with each keystroke, or every
		    move of the mouse. We’re writing applications that put desktop application UI’s
		    to shame. Modern JavaScript applications are the most responsive, most socially
		    engaging applications ever written—and if you don’t know JavaScript yet, you’re
		    missing the boat. It’s time to get on board, before you get left behind.
	- [Anatomy of a Typical Modern JavaScript App](http://chimera.labs.oreilly.com/books/1234000000262/ch01.html#anatomy_of_a_typical_modern_javascript_app)
		- Infrastructure
			-  [Figure 1-1](http://orm-chimera-prod.s3.amazonaws.com/1234000000262/images/pjap_0101.png)
	- [RESTful JSON Web Services](http://chimera.labs.oreilly.com/books/1234000000262/ch01.html#nosql_data_stores)
		- [Figure 1-2](http://chimera.labs.oreilly.com/books/1234000000262/ch01.html#nosql_data_stores)
Functions
	- repl for examples https://repl.it/ExZP/6
	- qoute: 
		``` 
		Functions in JavaScript are so powerful, in fact, that they can completely
		replace the need for objects. A closure can actually act like an object, and a
		full-fledged object system can be built using closures. In other words, with all
		of the functional capabilities built into JavaScript, it doesn't need objects at
		all to be a great language. But it has them anyway. This reminds me of a story
		from the MIT Lightweight Languages discussion list, by Anton van Straaten:

			The venerable master Qc Na was walking with his student, Anton. Hoping to prompt
			the master into a discussion, Anton said "Master, I have heard that objects are
			a very good thing—is this true?" Qc Na looked pityingly at his student and
			replied, "Foolish pupil—objects are merely a poor man's closures."

			Chastised, Anton took his leave from his master and returned to his cell, intent
			on studying closures. He carefully read the entire "Lambda: The Ultimate..."
			series of papers and its cousins, and implemented a small Scheme interpreter
			with a closure-based object system. He learned much, and looked forward to
			informing his master of his progress.

			On his next walk with Qc Na, Anton attempted to impress his master by saying
			"Master, I have diligently studied the matter, and now understand that objects
			are truly a poor man's closures." Qc Na responded by hitting Anton with his
			stick, saying "When will you learn? Closures are a poor man's object." At that
			moment, Anton became enlightened.  
		```
Objects
	- repl for examples https://repl.it/ExZP/7
Modules
	- [ ] Erich Gamma, one of the Gang of Four authors who created Design Patterns,
	shared some interesting thoughts about interfaces in an interview with Bill
	Venners called "Leading-Edge Java Design Principles from Design Patterns: A
	Conversation with Erich Gamma, Part III".
	- [] The module pattern encapsulates module contents in an immediately invoked
	function expression (IIFE) and exposes a public interface by assignment. Douglas
	Crockford gave the module pattern its name, and Eric Miraglia popularized it in
	a well-known blog post on the YUI Blog.
	- [] UMD (Universal Module Definition) is another alternative. My favorite way
	to create a UMD is to bundle the module using Browserify in standalone mode. See
	“Building Client-Side Code with CommonJS, npm, Grunt, and Browserify”.
	- [] Most new software projects use agile development methods to produce quick
	software creation and enhancement iterations. In agile software, the time
	between releases is measured in days or weeks rather than months or years. To
	learn more about agile, see The Art of Agile Development: Pragmatic guide to
	agile software development by James Shore (O’Reilly, 2007).
	- [] There's a running joke about how many sites look the same because they use
	all the same Bootstrap styles and controls. You may want to mix it up a little.
	There's an interesting blog post on the topic called "Customize Twitter
	Bootstrap To Not Look Bootstrap-y" by Antonin Januska.
	- [] In general, CSS is a little outside the scope of this book, but there are a
	few tips you should be aware of. For some great ideas on how to use CSS for
	applications, see “Scalable and Modular Architecture for CSS” by Jonathan Snook.
	Guest List: 
		https://github.com/58bits/guestlist
Separation of Concerns
	There are several client-side concerns that almost every mature JavaScript
  application might deal with at some point:
		- Module management
			- Namespacing
			- Sandbox (a base layer of functionality that other modules can safely use)
			- Access to environment variables and bootstrapped data
			- Module lifecycle hooks (help with setup and teardown)
			- An event system for inter-module communication
		- Events
		- Presentation and DOM manipulation
		- Internationalization
		- Data management and IO (including Ajax)
		- Routing (translating URLs to script actions)
		- Logging
		- Analytics tracking
		- Authentication
		- Feature toggling (decouple code deployment and feature release)

		- [] Nicholas Zakas gave a related talk called Scalable JavaScript Application
		Architecture, and Addy Osmani (author of Aura) wrote about it in Patterns For
		Large-Scale JavaScript Application Architecture. Often, module-management
		implementations are part of a monolithic application library tightly coupled to
		a proprietary codebase, or both.






Notes: 
ericelliottjs.com
=======
	[Get To know Eric Elliot](https://ericelliottjs.com/who-is-eric-elliott/)
		- [ ] [ “The Technical Interview is Dead, and Nobody Should Mourn.”](https://techcrunch.com/2013/06/22/the-technical-interview-is-dead/)
		- [ ] [ “How to Conduct a Better Coding Interview.”](https://www.google.com/search?q=How+to+Conduct+a+Better+Coding+Interview.%E2%80%9D&oq=How+to+Conduct+a+Better+Coding+Interview.%E2%80%9D&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8)
    - [ ] [tackling the world’s hardest problems](https://medium.com/the-backer-army/if-your-head-isnt-in-the-clouds-chances-are-youre-not-soaring-9b7ed3350fef#.p0kmz4dkj)

vim:
	Fold: 
		https://www.linux.com/learn/vim-tips-folding-fun
	Text wrap: 
		https://robots.thoughtbot.com/wrap-existing-text-at-80-characters-in-vim


repl.it
	reactplayground:
		https://repl.it/ExWv/1
	Qunit: 
		https://qunitjs.com/cookbook/
		https://repl.it/ExZP/1

jsfiddle.net
	https://github.com/joshmccall221/reactplayground
		https://jsfiddle.net/psc6veLq/3/?utm_source=website&utm_medium=embed&utm_campaign=psc6veLq



===============
