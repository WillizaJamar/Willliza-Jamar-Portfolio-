// SECTION SWITCHING (Tabs)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(link.getAttribute('data-section')).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// PORTFOLIO POPUP
const sketchPhotos = [
    "art 1.jpg","art2.jpg","art 3.jpg","art 4.jpg","art 5.jpg","art 6.jpg"
];

const editPhotos = [
    "Edit 1.jpg","Edit 2.jpg","Edit 3.jpg","Edit 4.jpg","Edit 5.jpg"
];

const photoPhotos = [
    "photo 1.jpg","photo 2.jpg","photo 3.jpg","photo 4.jpg","photo 5.jpg"
];

function openGallery(type) {
    const popup = document.getElementById('gallery-popup');
    const gallery = document.getElementById('gallery-photos');
    gallery.innerHTML = '';

    let images = [];

    if (type === 'sketch') {
        images = sketchPhotos;
    } else if (type === 'edit') {
        images = editPhotos;
    } else if (type === 'photo') {
        images = photoPhotos;
    }

    images.forEach(img => {
        const imageEl = document.createElement('img');
        imageEl.src = img;
        gallery.appendChild(imageEl);
    });

    popup.style.display = 'block';
}

function closeGallery() {
    document.getElementById('gallery-popup').style.display = 'none';
}
// CHATBOT LOGIC
const chatbot = document.getElementById('chatbot');
const closeBtn = document.querySelector('.chatbot-close');
closeBtn.addEventListener('click', () => { chatbot.style.display = 'none'; });

const chatbotButtons = document.querySelectorAll('.chatbot-buttons button');
const msgContainer = document.querySelector('.chatbot-body');
chatbotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        let reply = "";
        if(btn.textContent.includes("Show me your work")) {
            reply = `Check out my Portfolio section above and click 
                <a id="viewSketch">View Sketches</a> or 
                <a id="viewEdits">View Edits</a> to see my gallery!`;
        } else if(btn.textContent.includes("fun fact")) {
            reply = "Did you know? Creativity can help your brain learn faster, and pink inspires positivity and imagination!";
        } else if(btn.textContent.includes("contact")) {
            reply = "You can contact me via Instagram, Facebook, or Email—see my Contact section for all details!";
        } else {
            reply = "I'm here to help! What would you like to know?";
        }
        const replyBubble = document.createElement("div");
        replyBubble.className = "chatbot-reply";
        replyBubble.innerHTML = reply;
        msgContainer.appendChild(replyBubble);
        msgContainer.scrollTop = msgContainer.scrollHeight;

        // Add event for clickable reply links
        if(document.getElementById('viewSketch')) {
            document.getElementById('viewSketch').onclick = () => {
                navLinks.forEach(l=>l.classList.remove('active'));
                document.querySelector('[data-section="portfolio"]').classList.add('active');
                sections.forEach(sec => sec.classList.remove('active'));
                document.getElementById("portfolio").classList.add('active');
                openGallery('sketch');
            }
        }
        if(document.getElementById('viewEdits')) {
            document.getElementById('viewEdits').onclick = () => {
                navLinks.forEach(l=>l.classList.remove('active'));
                document.querySelector('[data-section="portfolio"]').classList.add('active');
                sections.forEach(sec => sec.classList.remove('active'));
                document.getElementById("portfolio").classList.add('active');
                openGallery('edit');
            }
        }
    });
});
