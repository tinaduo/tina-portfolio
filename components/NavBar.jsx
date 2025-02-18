import React from 'react';

const navLinks = [
    { href: '/', label: 'home' },
    { href: '/work', label: 'work' },
    { href: '/about', label: 'about' },
    { href: 'https://drive.google.com/file/d/1SYBD-p3pOFEPXoXfBztsl3QD5hqA9oK_/view?usp=sharing', label: 'resume' }
];

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-center py-14 z-10">
            {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                    <a className="text-center text-2xl font-roobert hover:underline" href={link.href}>{link.label}</a>
                    {index < navLinks.length - 1 && (
                        <span className="text-center text-2xl font-roobert px-2"> / </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default NavBar;
