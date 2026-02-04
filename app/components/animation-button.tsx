import React from 'react'

const AnimationButton = ({ play }: { play: () => void }) => {
    return (
        <button className='py-2 px-4 cursor-pointer hover:bg-black bg-black/80 text-white rounded-xl' onClick={play}>
            <span>▶</span>
        </button>
    )
}

export default AnimationButton
