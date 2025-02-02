import React from 'react';

const navLinks = [
    { href: '/', label: 'home' },
    { href: 'play', label: 'play' },
    { href: 'about', label: 'about' },
    { href: 'resume', label: 'resume' }
];

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-center py-14 z-10 bg-white">
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
