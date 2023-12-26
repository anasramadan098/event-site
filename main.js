// Scroll

// Get All Elements With Scroll Classes
document.querySelectorAll('.slide-left,.slide-top,.slide-right,.slide-bottom').forEach(e => {

    // Remove All 
    

    // Get It's Sreen Y 
    const scrollElement = e.scrollHeight;

    if (scrollY - 300 <= scrollElement) {
        console.log('OK');
    }
    window.onscroll = function () {
        if (scrollY - 300 <= scrollElement) {
            console.log('OK');
        }
    }
})