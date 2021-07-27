import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            <Button
                color="blue"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-20 w-20 border-0"
            >

            <Icon name="menu" size="3xl"/>
            </Button>
            <Icon name="description" size="5xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 text-2xl">
                Doc Creator
            </h1>
            <div className="md:inline-flex md:mx-20 flex flex-grow items-center px-1 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input
                type="text"
                placeholder="Search"
                className="flex-grow px-5 text-base bg-transparent outline-none"
                />
            </div>
            <Button
                color="gray"
                buttonType="outline"
                rounded
                iconOnly
                ripple="dark"
                className="md:inline-flex ml-5 md:ml-20 h-20 w-20 !border-0"
            >
            <Icon name="apps" size="3xl" color="gray" />
            </Button>
            <img
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src="http://a.abcnews.com/images/Travel/abc_golden_subnosed_monkey_mi_130424_wblog.jpg"
                alt=""
            />
        </div>
    )
}

export default Header
