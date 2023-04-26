import { useState, useMemo, FunctionComponent, MouseEventHandler } from 'react'

export const TabProvider: FunctionComponent<{
  children: any
  tabNames: Array<string>
}> = ({ children, tabNames }) => {
  if (!!!children.length) {
    throw new Error('<TabPrivoder> Should have at the least two children.')
  }
  const [selectedTab, setSelectedTab] = useState('0')
  const childs = useMemo(
    () => children.filter((child: any) => child.type.name === 'Tab'),
    [children]
  )
  const onTabClick: MouseEventHandler<any> = (e: any) => {
    setSelectedTab(e.target.id)
  }
  return (
    <div className="TabProvider">
      <div className="TabProvider__Switch">
        {childs.map((child: any, index: number) => (
          <button
            data-variant={selectedTab === index.toString() && 'selected'}
            onClick={onTabClick}
            key={index}
            id={index.toString()}
          >
            {tabNames[index] || index}
          </button>
        ))}
      </div>
      <div className="TabProvider__Tabs">
        {childs?.map(
          (child: any, index: number) =>
            index.toString() === selectedTab && child
        )}
      </div>
    </div>
  )
}
