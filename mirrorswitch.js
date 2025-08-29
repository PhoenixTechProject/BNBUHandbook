const alternateLink = document.querySelector('a[rel="alternate"]');
alternateLink.addEventListener('click', () => {
    if (window.location.hostname === 'bnbutech.cn') {
        alternateLink.href = 'https://u.xiedada.net' + window.location.pathname;
    } else {
        alternateLink.querySelector('span').innerText = "Switch to main site"
        alternateLink.href = 'https://bnbutech.cn' + window.location.pathname;
    }
})



