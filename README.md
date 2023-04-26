# vanilla-react-tabs

Practical React Tab Library, completely CSS-free, used as less JavaScript as possible.

### how to use:

```jsx
import { Tab, TabProvider } from 'react-vanilla-tabs';

<TabProvider
  tabNames={
    ['Tab 1',
      'Tab 2',
      ...,
      'Tab n'
    ]
  }
>
  <Tab>
    Your First Content Here
  </Tab>
  <Tab>
    Your Second Content Here
  </Tab>
  <Tab>
    Your n Content Here
  </Tab>
</TabProvider>

```

###

| Element |   Prop   |         Type |
| ------- | :------: | -----------: |
| Index   | tabNames | string Array |

### Note:

```jsx

// when you code this:
<TabProvider tabNames={['Tab Example']}>
  <Tab>hello there</Tab>
</TabProvider>
// you actually code this, in order to style it use this as base.
<div className="TabProvider">
  <div className="TabProvider__Switch">
    <button data-variant="selected">Tab Example</button>
  </div>
  <div className="TabProvider__Tabs">
    <div className="TabProvider__Tab">hello there</div>
  </div>
</div>
```

```jsx
import { Tab, TabProvider } from 'react-vanilla-tabs'
;<TabProvider namelessSwitch tabNames={['Foo Tab Button', 'Bar Tab Button']}>
  // Baz has no tab name so it will be replaced with "3"
  <Tab>Foo Tab Content</Tab>
  <Tab>Bar Tab Content</Tab>
  <Tab>Baz Tab Content</Tab>
</TabProvider>
```
