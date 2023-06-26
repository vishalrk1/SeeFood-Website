import React from 'react'

const RedIndicator = ({text}) => {
  return (
    <span class="inline-flex items-center bg-red-100 text-red-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <span class="w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
                {text}
            </span>
  )
}

export default RedIndicator