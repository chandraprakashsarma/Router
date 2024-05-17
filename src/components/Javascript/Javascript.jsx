import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
  {
    name: 'Variable',
    src:myImage,
    route: '/variable',
    alt: 'Image 1',
    position: 'Javascript',
  },
    {
      name: 'Array',
      src:myImage,
      route: '/accordion',
      alt: 'Image 1',
      position: 'Javascript',
    },
    {
        name: 'Function',
        src:myImage,
        route: '/function',
        alt: 'Image 1',
        position: 'Javascript',
      },
      {
        name: 'Iteration',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'Javascript',
      },
      {
        name: 'Object',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'Javascript',
      },
      {
        name: 'Scope',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'Javascript',
      },
      {
          name: 'Data Type',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'Javascript',
        },
        {
          name: 'Getter Setter',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'Javascript',
        },
        {
          name: 'Parent Child',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'Javascript',
        },
        {
          name: 'Promises',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'Javascript',
        },
        {
            name: 'Event',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'Javascript',
          },
          {
            name: 'Map',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'Javascript',
          },
          {
            name: 'JS Async',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'Javascript',
          },
          {
            name: 'Scope',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'Javascript',
          },
          {
              name: 'Symbol',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'Javascript',
            },
            {
              name: 'Type Conversion',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'Javascript',
            },
            {
              name: 'Operations',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'Javascript',
            },
            {
                name: 'Operator',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'Javascript',
              },
              {
                name: 'Comparision',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'Javascript',
              },
              {
                name: 'String',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'Javascript',
              },
              {
                name: 'Backticks',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'Javascript',
              },
              {
                  name: 'Arrow Function',
                  src:myImage,
                  route: '/arrow_function',
                  alt: 'Image 1',
                  position: 'Javascript',
                },
                {
                  name: 'Spread Operator',
                  src:myImage,
                  route: '/UIComponent',
                  alt: 'Image 1',
                  position: 'Javascript',
                },
                {
                  name: 'Concept Of "this"',
                  src:myImage,
                  route: '/UIComponent',
                  alt: 'Image 1',
                  position: 'Javascript',
                },
                {
                  name: 'Event Handling',
                  src:myImage,
                  route: '/event_handling',
                  alt: 'Image 1',
                  position: 'Javascript',
                },
                {
                    name: 'Navbar',
                    src:myImage,
                    route: '/UIComponent',
                    alt: 'Image 1',
                    position: 'Javascript',
                  },
                  {
                    name: 'Pagination',
                    src:myImage,
                    route: '/UIComponent',
                    alt: 'Image 1',
                    position: 'Javascript',
                  },
                  {
                    name: 'Popover',
                    src:myImage,
                    route: '/UIComponent',
                    alt: 'Image 1',
                    position: 'Javascript',
                  },
                  {
                    name: 'Progress',
                    src:myImage,
                    route: '/UIComponent',
                    alt: 'Image 1',
                    position: 'Javascript',
                  },
                  {
                      name: 'Rating',
                      src:myImage,
                      route: '/UIComponent',
                      alt: 'Image 1',
                      position: 'Javascript',
                    },
                    {
                      name: 'Sidebar',
                      src:myImage,
                      route: '/UIComponent',
                      alt: 'Image 1',
                      position: 'Javascript',
                    },
                    {
                      name: 'Skeleton',
                      src:myImage,
                      route: '/UIComponent',
                      alt: 'Image 1',
                      position: 'Javascript',
                    },
                    {
                      name: 'Speed Dial',
                      src:myImage,
                      route: '/UIComponent',
                      alt: 'Image 1',
                      position: 'Javascript',
                    },
                    {
                        name: 'Spinner',
                        src:myImage,
                        route: '/UIComponent',
                        alt: 'Image 1',
                        position: 'Javascript',
                      },
                      {
                        name: 'Stepper',
                        src:myImage,
                        route: '/UIComponent',
                        alt: 'Image 1',
                        position: 'Javascript',
                      },
                      {
                        name: 'Tables',
                        src:myImage,
                        route: '/UIComponent',
                        alt: 'Image 1',
                        position: 'Javascript',
                      },
                      {
                        name: 'Tabs',
                        src:myImage,
                        route: '/UIComponent',
                        alt: 'Image 1',
                        position: 'Javascript',
                      },
                      {
                          name: 'Timeline',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'Javascript',
                        },
                        {
                          name: 'Toast',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'Javascript',
                        },
                        {
                          name: 'Tooltips',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'Javascript',
                        },
                        {
                          name: 'Typography',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'React',
                        },
                        {
                          name: 'Video',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'React',
                        },
                        {
                          name: 'Forms',
                          src:myImage,
                          route: '/UIComponent',
                          alt: 'Image 1',
                          position: 'React',
                        },
                        {
                            name: 'Input Field',
                            src:myImage,
                            route: '/UIComponent',
                            alt: 'Image 1',
                            position: 'React',
                          },
                          {
                            name: 'File Input',
                            src:myImage,
                            route: '/UIComponent',
                            alt: 'Image 1',
                            position: 'React',
                          },
                          {
                            name: 'Search Input',
                            src:myImage,
                            route: '/UIComponent',
                            alt: 'Image 1',
                            position: 'React',
                          },
                          {
                            name: 'Select',
                            src:myImage,
                            route: '/UIComponent',
                            alt: 'Image 1',
                            position: 'React',
                          },
                          {
                              name: 'Textarea',
                              src:myImage,
                              route: '/UIComponent',
                              alt: 'Image 1',
                              position: 'React',
                            },
                            {
                              name: 'Checkbox',
                              src:myImage,
                              route: '/UIComponent',
                              alt: 'Image 1',
                              position: 'React',
                            },
                            {
                              name: 'Radio',
                              src:myImage,
                              route: '/UIComponent',
                              alt: 'Image 1',
                              position: 'React',
                            },
                            {
                              name: 'Toggle',
                              src:myImage,
                              route: '/UIComponent',
                              alt: 'Image 1',
                              position: 'React',
                            },
                            {
                                name: 'Range',
                                src:myImage,
                                route: '/UIComponent',
                                alt: 'Image 1',
                                position: 'React',
                              },
                              {
                                name: 'Headings',
                                src:myImage,
                                route: '/UIComponent',
                                alt: 'Image 1',
                                position: 'React',
                              },
                              {
                                name: 'Paragraphs',
                                src:myImage,
                                route: '/UIComponent',
                                alt: 'Image 1',
                                position: 'React',
                              },
                              {
                                name: 'Blockquote',
                                src:myImage,
                                route: '/UIComponent',
                                alt: 'Image 1',
                                position: 'React',
                              },
                              {
                                  name: 'Images',
                                  src:myImage,
                                  route: '/UIComponent',
                                  alt: 'Image 1',
                                  position: 'React',
                                },
                                {
                                  name: 'Lists',
                                  src:myImage,
                                  route: '/UIComponent',
                                  alt: 'Image 1',
                                  position: 'React',
                                },
                                {
                                  name: 'Links',
                                  src:myImage,
                                  route: '/UIComponent',
                                  alt: 'Image 1',
                                  position: 'React',
                                },
                                {
                                  name: 'Text',
                                  src:myImage,
                                  route: '/UIComponent',
                                  alt: 'Image 1',
                                  position: 'React',
                                },
                                {
                                  name: 'Label',
                                  src:myImage,
                                  route: '/UIComponent',
                                  alt: 'Image 1',
                                  position: 'React',
                                },
                                
  ]

export default function Javascript() {
    return (

        <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Javascript Basic Concept
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200">
          {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">{user.name}</h1>
          {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
        </Link>
      ))}    

      </div>
        </>
        
    )
}