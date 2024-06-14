# React with the Latest Version .
# Implementing all the React related Concepts .

# React with CRA 

--> React is a Library

--> Framework is like Military and Library is like Cool Dude

--> Framework is Really strict how the file name should be, the Naming Convention, Folder Structure

--> BAAS Apps Backend as a service i.e:- Social Media Apps, Ecommerce Apps

--> Class based Components are Legacy based codes

--> React is not a complete solution in most of the cases

--> No SEO, Browser Render of JS , No Routing .

--> Framework:- Gatsby, Remix, Next Js you can prefer on top of React


# Scripts 

--> you can see there are lot of files which got Injected when inspect the browser and see in the Header part

--> React-scripts will do the behind screen magic . while running the Application or building the Application .

--> since the Application is run by react-scripts It Automatically finds the index.html and InJects the Javascript file.

-->  there is a Browser DOM and React DOM known as a Virtual DOM

--> It tries to mimick the Original DOM and whatever the updates we make it first goes into the virtual DOM

--> Any updates happen in the Virtual DOM are pushed in to the Real DOM



# Benifits of using Vite + React

-->  Instant Server Start On demand file serving over native ESM, no bundling required!

--> Lightning Fast HMR :-  Hot Module Replacement (HMR) that stays fast regardless of app size.

--> React uses some of the Algorithms behind the scenes 

# Reconcilation process in React


-->  In React, reconciliation is the process of updating the DOM to match the React component's virtual DOM .

-->  When the state or props of a component change, React creates a new virtual DOM tree and compares it with the previous one .

-->  This process, known as "diffing," identifies changes, which are then efficiently updated in the actual DOM .

-->  This ensures that the UI stays in sync with the data without unnecessary re-renders.


# React Fiber


--> A Fiber in React is a Plain Javascript object With some properties 

--> Fiber reconciler = current React reconciler based on the Fiber ( React >= 16) 

--> Complete rewrite of React that fixes long standing issues 

--> Offers Incredible opportunities for the future use .

--> Fiber focuses on the Animations and responsiveness .

--> It can split work into the chunks and priortize the tasks .

--> It reuse the work or abort it if it is not needeed .

-->  Fiber is Asynchronous .









