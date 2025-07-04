import React from 'react'

const Button = ({ text, bg, onclick }) => {
    return (
        <button
            type="button"
            onClick={onclick}
            className={`  w-[70px] bg-[#142850] text-[#FFFFFF] text-[14px] font-black border-none rounded-[50px] flex items-center justify-center cursor-pointer`}  
            style={{
                backgroundColor: bg,

            }}
        >
            {text}

        </button>
    )
}

export default Button