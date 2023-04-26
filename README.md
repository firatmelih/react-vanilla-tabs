# react-vanilla-tabs (TS)

CSS free React Component, solution based and simple.
Now has Typescript support.

### how to use:

Simply call TabProvider and inside provider wrap your tabs in Tab tag volala!

Anything in TabProvider without wrapped with Tab will be ignored.

Minimum two Tabs should be defined in order to use package properly.

### Examples:

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
  <div>
    This will be ignored because it's not wrapped in <Tab> tag.
  </div>
</TabProvider>

```

###

| Element     |   Prop   |            Type |
| ----------- | :------: | --------------: |
| TabProvider | tabNames |    string Array |
| TabProvider | children | any more than 1 |
| Tab         |   none   |               - |

```jsx
import { Tab, TabProvider } from 'react-vanilla-tabs'
;<TabProvider namelessSwitch tabNames={['Foo Tab Button', 'Bar Tab Button']}>
  // Baz has no tab name so it will be replaced with "3"
  <Tab>Foo Tab Content</Tab>
  <Tab>Bar Tab Content</Tab>
  <Tab>Baz Tab Content</Tab>
</TabProvider>
```

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
