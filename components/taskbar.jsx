import React from 'react';
import Link from 'next/link';

export default function Taskbar() {
    return (
        <div className="top-0 left-0 w-full h-16 bg-black flex justify-around items-center p-16 text-xl border-solid border-b-2 border-white">
            <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bushidosocietytx/" className="group">
                <div className="text-white border-b-2 border-transparent group-hover:border-white transition duration-300">
                    @bushidosocietytx
                </div>
            </Link>
            <div className="flex space-x-8">
                <Link href="/" className="group">
                    <div className="text-white border-b-2 border-transparent group-hover:border-white transition duration-300">
                        Home
                    </div>
                </Link>
                <Link href="/Events" className="group">
                    <div className="text-white border-b-2 border-transparent group-hover:border-white transition duration-300">
                        Events
                    </div>
                </Link>
                <Link href="/Gallery" className="group">
                    <div className="text-white border-b-2 border-transparent group-hover:border-white transition duration-300">
                        Gallery
                    </div>
                </Link>
                <Link href="/MeetUs" className="group">
                    <div className="text-white border-b-2 border-transparent group-hover:border-white transition duration-300">
                        Meet Us
                    </div>
                </Link>
            </div>
        </div>
    );
}
