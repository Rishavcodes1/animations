import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex p-4 rounded-xl shadow-md bg-white w-max'>
            {children}
        </div>
    )
}

export default Card
