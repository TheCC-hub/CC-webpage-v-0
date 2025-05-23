import React from 'react'

export default function PriceMenu({ tabs, setActiveTab, activeTab }: any) {
  return (
    <>
      {tabs.map((tab: any, idx: number) => (
        <button
          onClick={() => setActiveTab(tab.label)}
          className={`px-4 w-full sm:py-3 py-2 font-semibold sm:text-lg border-2 hover:border-primary rounded-xl whitespace-nowrap hover:text-white transform duration-300 ease-in-out 
                            ${activeTab === tab.label ? "bg-primary text-white border-primary" : "border-gray-300"}`
          }
          key={idx}
        >
          {tab.label}
        </button>
      ))}
    </>
  )
}
