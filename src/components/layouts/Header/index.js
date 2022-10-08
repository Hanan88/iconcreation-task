import React  from 'react'
import Logo from '../../../images/logo.jpg'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { MdShoppingBasket } from 'react-icons/md';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'About', href: '#', current: false },
        { name: 'Mattress', href: '#', current: false },
        { name: 'Beds&Headboards', href: '#', current: false },
        { name: 'Pillows', href: '#', current: false },
        { name: 'Sleep Accessories', href: '#', current: false },
        { name: 'Contact Us', href: '#', current: false },

    ]

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl 8">
                        <div className="relative flex h-32 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-main-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="hidden h-20 w-auto lg:block"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <div className="hidden mt-16 sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'underline underline-offset-[23px] text-main-orange' : 'text-main-blue hover:underline hover:underline-offset-[23px] hover:text-main-orange',
                                                    'px-1 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div
                                >
                                    <div className='flex justify-between items-center'>
                                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 block rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-main-orange focus:ring-main-orange focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search" />
                                        <div className='flex justify-between w-1/4 text-slate-400 text-xl'>
                                            <AiFillInstagram className='hover:text-main-orange cursor-pointer' />
                                            <AiOutlineTwitter className='hover:text-main-orange cursor-pointer' />
                                            <FaFacebookF className='hover:text-main-orange cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <button className='py-2 px-5 rounded mt-3 mx-5 text-white bg-main-blue hover:bg-main-orange'><GoPerson className='float-left text-2xl mr-2' />My Account</button>
                                        <button className='py-2 px-5 rounded mt-3 text-white bg-main-blue hover:bg-main-orange'><MdShoppingBasket className='float-left text-2xl mr-2' /> (5)Items</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-main-orange text-white' : 'text-main-blue hover:bg-main-orange hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header