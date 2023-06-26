import React from 'react'

const GreenIndicator = ({text}) => {
  return (
    <span class="inline-flex items-center bg-green-100 text-green-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        <span class="w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                {text}
    </span>
  )
}

export default GreenIndicator;