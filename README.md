# React Hook Bag

![ReactJs](https://img.shields.io/badge/lanugage-React.Js-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

`React Hook Bag` is a npm package for useful react hooks. It has many commonly used hooks.

## Features

- **useOutsideClick:** Click outside on an element.
- **useRefsExtractor:** Extract values of some refs as object.

## Get started
Add this package to your project.

```bash
pnpm install react-hook-bag
```

## Examples

### useOutsideClick

```tsx
"use client";
import React, { useRef, useState } from "react";
import { useOutsideClick } from "react-hook-bag";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef(null);

  const handleClick = () => setIsOpen((pre) => !pre);

  useOutsideClick([modal], isOpen, handleClick);

  return (
    <div className="container">
      {isOpen ? (
        <div className="modal" ref={modal}>
          <div className="user">
            <h2 className="userName">Example</h2>
            <img className="userImage" src="/user-img.jpg" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <button className="button" onClick={handleClick}>
        Show User
      </button>
    </div>
  );
}
```

### useRefsExtractor

```tsx
"use client";
import React, { useRef } from "react";
import { useRefsExtractor } from "react-hook-bag";

export default function App() {
  const refs = {
    name: useRef({} as HTMLInputElement),
    about: useRef({} as HTMLTextAreaElement)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = useRefsExtractor(refs, (ref) => ref.current?.value);
    console.log(data);
  }  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refs.name}/>
        <textarea ref={refs.about}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
```


## Contributing

Contributions are welcome! I would like you to contribute in this project.

## Roadmap

This project is in its early stages, and there are many missing features that need implementation. Check the [Issues](https://github.com/mdmahikaishar/react-hook-bag/issues) section for a list of features, enhancements, and bug fixes that are planned.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mdmahikaishar/react-hook-bag/LICENSE.md) file for details.
