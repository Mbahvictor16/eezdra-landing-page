import Image from 'next/image'
import React from 'react'

import logo from '/public/logo.png';

export default function Logo() {
    return (
        <div>
            <Image src={logo} alt='logo' width={150} />
        </div>
    )
}