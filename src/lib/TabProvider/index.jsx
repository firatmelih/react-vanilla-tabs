import React, { createElement, useEffect, useState } from 'react'

function TabSwitch ({ childCount, setVisible, titles, visibleId, namelessSwitch }) {
  const element = []
  const handleClick = (event) => {
    setVisible(event.target.id)
  }
  for (let i = 0; i < childCount; i++) {
    element.push(
      createElement('div', {
        key: i.toString(),
        id: i.toString(),
        className: `TabSwitch`,
        ['data-variant']: visibleId.toString() === i.toString() ? 'selected' : undefined,
        onClick: handleClick
      }, titles[i] ? titles[i] : namelessSwitch ? '' : 'unnamed tab')
    )
  }
  return (
    <div className="TabSwitchProvider">
      {element.map(e => e)}
    </div>
  )
}

export function TabProvider ({ children, tabSwitchTitles, namelessSwitch }) {
  const [childCount, setChildCount] = useState(0)
  const [tabs, setTabs] = useState([])
  const [visibleTab, setVisibleTab] = useState('0')

  useEffect(() => {
    let count = 0
    let elements = []
    if (children.length > 1) {
      children.map((child, key) => {
        if (child?.type?.name === 'Tab') {
          count++
          elements.push(createElement('div',
            {
              key: key,
              id: key.toString()
            },
            child.props.children))
        }
      })
      setChildCount(count)
      setTabs(elements)
    } else {
      console.info('TabProvider Should have minimum two tab element')
    }
  }, [children])
  return <div className="TabProvider">
    <TabSwitch
      namelessSwitch={namelessSwitch}
      titles={tabSwitchTitles}
      childCount={childCount}
      setVisible={setVisibleTab}
      visibleId={visibleTab}
    />
    <div className={'SelectedTab'}>
      {tabs.filter(tab => tab.props.id === visibleTab)}
    </div>
  </div>
} 