import React from 'react'

export default function PriceMenu({ tabs, setActiveTab, activeTab }: any) {
  return (
    <>
      {tabs.map((tab: any, idx: number) => (
        <button
          onClick={() => setActiveTab(tab.label)}
          className={`px-4 w-full py-3 font-semibold text-lg border-2 border-primary rounded-xl hover:bg-primary hover:text-white transform duration-300 ease-in-out 
                            ${activeTab === tab.label ? "bg-primary text-white" : "bg-white/20"}`
          }
          key={idx}
        >
          {tab.label}
        </button>
      ))}
    </>
  )
}
