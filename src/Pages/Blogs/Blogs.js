import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:grid grid-cols-2'>
            <div className="m-10">
                <h4 className="font-semibold text-2xl">What are the different ways to manage a state in a React application?</h4>
                <p>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. <br />

                    Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. <br />

                    We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user's shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie. <br />

                    Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.</p>
            </div>
            <div className="m-10">
                <h4 className="font-semibold text-2xl">How does prototypical inheritance work?</h4>
                <p>It's important to note that this answer is about models (i.e.: what goes under the hood in the language specification and non-optimised implementations). What actually happens when you run a program is very different, because compilers will try their best to make the processor do no work, if they can. They'll remove all objects and functions and operations you write if there's no real need for them to exist. The only way of knowing that is reading the entire source code of a specific compiler on every new commit. <br />

                    And what people interact with (along with the conceptual models they use for programming) is not necessarily based on this either. JavaScript has a “class” concept, and it has had that since its first version. People use classes in JavaScript, and they may not even think about what's going under the hood at all, and that's perfectly fine.</p>
            </div>
            <div className="m-10">
                <h4 className="font-semibold text-2xl">What is a unit test? Why should we write unit tests?</h4>
                <p>
                    <span className='font-semibold text-xl'>A unit test</span> is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test." <br />
                    <span className='font-semibold text-xl'>Unit tests</span> save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                </p>
            </div>
            <div className="m-10">
                <h4 className="font-semibold text-2xl">React vs. Angular vs. Vue?</h4>
                <p>
                    There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. <br />
                    <span className='font-semibold text-xl'>React</span>React can be used as a UI library to render elements, without enforcing a specific project structure, and that's why it's not strictly a framework.

                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user. <br />
                    <span className='font-semibold text-xl'>Vue</span>The Vue.js core library focuses on the View layer only. It's called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you'll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View. <br />
                    <span className='font-semibold text-xl'>Angular</span>In this article, I'm discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                    AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there's no strict association with MV*-patterns as it is also component-based.

                    Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;