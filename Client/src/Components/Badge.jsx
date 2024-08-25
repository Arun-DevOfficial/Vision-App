// import React from 'react'

export default function Badge({ content }) {
  return (
    <>
      <span className="text-xs capitalize bg-neutral-800 hover:bg-neutral-900 text-white w-16 text-center rounded-full py-1 cursor-pointer leading-relaxed">
        {content}
      </span>
    </>
  );
}
