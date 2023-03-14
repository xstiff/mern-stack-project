
//  Removes all .active from menu elements
export const MenuResetAll = () => {
    const docs = document.querySelector('.menu-items-container').children;
    const logo = document.querySelector(".menu-logo");
    for (const child of docs) {
        if ( child.classList.contains('active') ) {
            child.classList.remove('active')
        }
    }
    if ( logo.classList.contains('active') ) logo.classList.remove('active');

    return;
}

// Add .active to current directory on menu
export const MenuSetActive = ( menuLink ) => {
    try {
        const doc = document.querySelector(`.${menuLink}`);
        if (doc) doc.classList.add('active');
    }
    catch ( err ) {
        console.log( err )
    }
    
    return;
}
