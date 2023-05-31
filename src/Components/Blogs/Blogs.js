import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


const Blogs = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className='lg:mx-72 px-5 mt-28 mb-32'>
            <Fragment>
                <Accordion
                    open={open === 1}
                    className="border border-blue-gray-100 px-4 rounded-lg mb-2"
                >
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        When should you use context API?
                    </AccordionHeader>
                    <AccordionBody className="text-base font-normal pt-0">
                        There are many usage of contextAPI but the ones i know about is- Whenever you want to share a state to multiple compnents, you should use contextAPI. It can be done with passing props but it is very cumbersome to pass and recieve props over and over again. <span className='font-bold'>ContextAPI</span> can make it easier.
                        <div className='mt-3'>
                            <span className='font-semibold'>FYI, here is the answer from chatGPT :</span>
                            <ul>
                                <li className='mb-2 font-medium'>
                                    Sharing state between components: Context API is useful when you need to share state across multiple components that are not directly related in the component tree. Rather than passing props down through multiple layers of components, you can use Context API to provide the state to the components that need it.
                                </li>
                                <li className='mb-2 font-medium'>
                                    Theme management: If your application supports theming and you want to make the theme available to different components, you can use Context API to store the current theme and provide it to the relevant components.
                                </li>
                                <li className='mb-2 font-medium'>
                                    User authentication: When you have a user authentication system and need to access the user's authentication state throughout your application, Context API can be used to store the authentication state and provide it to the necessary components.
                                </li>
                                <li className='mb-2 font-medium'>
                                    Language localization: If your application supports multiple languages and you want to provide the current language preference to different components, you can use Context API to manage the language state and propagate it to the relevant components.
                                </li>
                                <li className='mb-2 font-medium'>
                                    Managing app-wide configuration settings: Context API can be used to store and manage app-wide configuration settings that need to be accessed by various components, such as API endpoints, default settings, or feature flags.
                                </li>
                            </ul>
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    className="border border-blue-gray-100 px-4 rounded-lg mb-2"
                >
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        What is a custom hook?
                    </AccordionHeader>
                    <AccordionBody className="text-base font-normal pt-0">
                        <p>
                            A custom hook is a JavaScript function that allows you to reuse logic in functional components in React. It is a way to extract common functionality into a reusable piece of code that can be used across different components.

                            In React, hooks are functions that let you use state and other React features in functional components. Custom hooks are simply functions that use one or more built-in hooks to provide additional functionality.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 3}
                    className="border border-blue-gray-100 px-4 rounded-lg mb-2"
                >
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        What is useRef?
                    </AccordionHeader>
                    <AccordionBody className="text-base font-normal pt-0">
                        <div>
                            <p>
                                useRef is a hook provided by React that allows you to create a mutable reference that persists across re-renders of a functional component. It returns a mutable ref object with a .current property that can be used to store and access a value.
                                <br />

                                The primary use case of useRef is to maintain references to DOM elements or values that need to persist between renders without triggering a re-render. Unlike state variables (useState), changes to the ref value don't cause a re-render of the component.
                            </p>
                            <p className='font-medium mt-4'>
                                Here's a bit of relevent code of how it's done:
                                <div>
                                    <pre className='p-3 bg-blue-gray-400'>
                                        <code className='text-white'>
                                            {`import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myElementRef = useRef(null);

  useEffect(() => {
    // Accessing the DOM element using the ref
    const myElement = myElementRef.current;
    // Do something with the DOM element
    myElement.textContent = 'Hello, useRef!';
  }, []);

  return <div ref={myElementRef}></div>;
}`}
                                        </code>
                                    </pre>
                                </div>

                            </p>
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 4}
                    className="border border-blue-gray-100 px-4 rounded-lg"
                >
                    <AccordionHeader
                        onClick={() => handleOpen(4)}
                        className={`border-b-0 transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        What is useMemo?
                    </AccordionHeader>
                    <AccordionBody className="text-base font-normal pt-0">
                        <div>
                            <p>useMemo is a hook provided by React that allows you to memoize the result of a function call and cache it for efficient re-use. It helps optimize the performance of your React components by avoiding unnecessary re-computation of values.</p>
                            <p className='font-medium mt-4'>
                                Here's a bit of relevent code of how it's done:
                                <div>
                                    <pre className='p-3 bg-blue-gray-400 mb-5'>
                                        <code className='text-white'>
                                            {`const memoizedValue = useMemo(() => {
  // compute and return a value
  // that you want to memoize
}, [dependencyList]);
`}
                                        </code>
                                    </pre>
                                    <pre className='p-3 bg-blue-gray-400'>
                                        <code className='text-white'>
                                            {`import React, { useMemo } from 'react';

function MyComponent({ list }) {
  const total = useMemo(() => {
    console.log('Computing total...');
    return list.reduce((sum, num) => sum + num, 0);
  }, [list]);

  return <div>Total: {total}</div>;
}
`}
                                        </code>
                                    </pre>
                                </div>

                            </p>
                        </div>
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
};

export default Blogs;