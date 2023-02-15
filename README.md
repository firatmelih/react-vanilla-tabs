# vanilla-react-tabs

Practical React Tab Library, completely CSS-free, used as less JavaScript as possible.

### how to use:

```jsx
import { Tab, TabProvider } from 'react-vanilla-tabs';

<TabProvider
  tabSwitchTitles={
    ['First Contents Switch Text',
      'Second Contents Switch Text'
    ]
  }
>
  <Tab>
    Your First Content Here
  </Tab>
  <Tab>
    Your Second Content Here
  </Tab>
</TabProvider>

```

###                           

| Element     |      Prop       |         Type |
|-------------|:---------------:|-------------:|
| Index | tabSwitchTitles | string Array |
| Index | namelessSwitch  |      boolean | 

### Note:

When namelessSwitch is enabled, tabSwitches which has no title defined will be empty divs.

```jsx
import { Tab, TabProvider } from 'react-vanilla-tabs';
// Tab should have at the least two Index elements
// Any children without <Tab>tag will be ignored</Tab>
// tabSwitchTitles prop takes string Array 
// that string array's index is title of switch that activates index of your <Tab/>
<TabProvider
  namelessSwitch
  tabSwitchTitles={
    ['I will make Melih visible',
      'I will make Firat visible'
    ]
  }
>
  <Tab>
    I am Melih
  </Tab>
  <Tab>
    I am Firat
  </Tab>
  <Tab>
    My Tab's switch has no switch title :)
  </Tab>
</TabProvider>
```