// import React from 'react'

export default function Badge({ content }) {
  return (
    <>
      <span className="text-sm capitalize bg-neutral-800 hover:bg-neutral-900 text-white px-4 rounded-full py-1 cursor-pointer">
        {content}
      </span>
    </>
  );
}
