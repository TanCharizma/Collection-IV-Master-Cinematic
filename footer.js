/**
 * Shared Footer Component
 * Injects the global footer into the page.
 */
(function() {
    const currentYear = new Date().getFullYear();
    const clientName = window.CLIENT_CONFIG.name;
    const footerBioEn = window.CLIENT_CONFIG.footerBioEn || "[Short English footer description about the client goes here.]";
    const footerBioTh = window.CLIENT_CONFIG.footerBioTh || "[Short Thai footer description about the client goes here.]";

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-column">
                <p class="footer-label">${clientName}</p>
                <p class="footer-bio" lang="en">${footerBioEn}</p>
                <p class="footer-bio" lang="th">${footerBioTh}</p>
            </div>
            <div class="footer-column">
                <p class="footer-label" lang="en">Inquiries</p>
                <p class="footer-label" lang="th">ติดต่อสอบถาม</p>
                <a href="mailto:${window.CLIENT_CONFIG.email}">${window.CLIENT_CONFIG.email}</a>
                <a href="booking.html">
                    <span lang="en">Booking & Availability</span>
                    <span lang="th">จองคิวและตารางงาน</span>
                </a>
            </div>
            <div class="footer-column">
                <p class="footer-label" lang="en">Follow</p>
                <p class="footer-label" lang="th">ติดตาม</p>
                <a href="${window.CLIENT_CONFIG.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div class="footer-bottom">
                <div>&copy; ${currentYear} ${clientName} Portfolio. All rights reserved.</div>
                <div class="attribution">Crafted by <a href="https://thefoliolab.vercel.app/" class="designer-link" target="_blank" rel="noopener noreferrer">The Folio Lab</a></div>
            </div>
        </div>
    </footer>`;

    document.currentScript.insertAdjacentHTML('beforebegin', footerHTML);
})();
