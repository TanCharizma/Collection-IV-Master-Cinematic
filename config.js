/**
 * CLIENT CONFIGURATION
 *
 * Fast client swap:
 * 1. Edit the blocks marked SWAP below.
 * 2. Replace files in /image with the same filenames when possible.
 * 3. Leave optional links or comp-card paths blank ("") to hide unavailable UI.
 * 4. Add image captions only for images that should show modal captions.
 *
 * The template reads window.CLIENT_CONFIG. Keep the exported keys at the bottom
 * unless you are also updating main.js/nav.js/footer.js.
 */
(() => {
    const isUrl = (value) => /^https?:\/\//i.test(String(value || "").trim());
    const cleanHandle = (value) => String(value || "").trim().replace(/^@+/, "");
    const digitsOnly = (value) => String(value || "").replace(/[^\d+]/g, "");

    const instagramLink = (value) => {
        const handle = cleanHandle(value);
        if (!handle) return "";
        return isUrl(handle) ? handle : `https://instagram.com/${handle}`;
    };

    const lineLink = (value) => {
        const input = String(value || "").trim();
        if (!input) return "";
        return isUrl(input) ? input : `https://line.me/ti/p/${input.replace(/^@+/, "")}`;
    };

    const whatsappLink = (value) => {
        const input = String(value || "").trim();
        if (!input) return "";
        return isUrl(input) ? input : `https://wa.me/${digitsOnly(input)}`;
    };

    const path = {
        hero: "image/hero/hero.webp",
        about: "image/about/01.webp",
        compCardWeb: "image/Folio-Lab-Compcard Cinematic.webp",
        compCardDownload: "image/Folio-Lab-Compcard Cinematic.png",
        highlights: [
            "image/highlights/01.webp",
            "image/highlights/IMG_1733.webp",
            "image/highlights/IMG_0470.WEBP",
            "image/highlights/04.webp"
        ],
        portfolio: Array.from({ length: 20 }, (_, index) => {
            const number = String(index + 1).padStart(2, "0");
            return `image/portfolio/${number}.webp`;
        }),
        digitals: [
            "image/digitals/01.webp",
            "image/digitals/02.webp",
            "image/digitals/03.webp",
            "image/digitals/04.webp"
        ]
    };

    // SWAP: client identity, contact, and hero copy.
    const client = {
        name: "Client Name",
        email: "contact@client.com",
        instagram: "yourclient",
        line: "",
        whatsapp: "1234567890",
        taglineEn: "Model · Creative Director",
        taglineTh: "นางแบบ · ครีเอทีฟไดเรกเตอร์",
        splashCaption: "Cinematic Portfolio",
        footerBioEn: "[Short English footer description about the client goes here.]",
        footerBioTh: "[Short Thai footer description about the client goes here.]"
    };

    // SWAP: About page copy for future dynamic upgrades. Current Cinematic HTML keeps this copy inline.
    const about = {
        bioEn: [
            "Client bio opening. Replace this with a concise statement about presence, point of view, and creative direction.",
            "Use this second line for selected campaigns, experience, availability, or the kind of collaborations the client is seeking.",
            "Keep it short, specific, and editorial."
        ],
        bioTh: [
            "ย่อหน้าเปิดประวัติ แทนที่ด้วยคำแนะนำตัวที่กระชับเกี่ยวกับตัวตน มุมมอง และทิศทางสร้างสรรค์",
            "ใช้ย่อหน้าที่สองสำหรับแคมเปญ ประสบการณ์ ความพร้อมรับงาน หรือรูปแบบงานที่ต้องการร่วมงาน",
            "เขียนให้สั้น ชัดเจน และมีโทนแบบเอดิทอเรียล"
        ],
        manifestoEn: "Client manifesto placeholder. Replace with one sharp line that captures their creative presence.",
        manifestoTh: "ตัวอย่างแมนิเฟสโตของลูกค้า แทนที่ด้วยประโยคสั้นคมที่สะท้อนตัวตนและพลังสร้างสรรค์"
    };

    // SWAP: measurements shown on the homepage.
    const measurements = {
        height: "179",
        bust: "84",
        waist: "61",
        hips: "90",
        shoes: "40",
        hairEn: "Blonde",
        hairTh: "บลอนด์",
        eyesEn: "Blue",
        eyesTh: "สีฟ้า"
    };

    // SWAP: optional comp card.
    const compCard = {
        image: path.compCardWeb,
        download: path.compCardDownload
    };

    // SWAP: modal captions. Remove an entry or set showImageCaptions false to hide it.
    // Digitals intentionally ship without captions; they keep fullscreen controls only.
    const captions = {
        showImageCaptions: true,
        items: {
            [path.highlights[0]]: { kicker: "Highlights / 01", en: "A restrained portrait study shaped by cinematic light.", th: "พอร์ตเทรตที่นิ่งและละเมียดภายใต้แสงแบบภาพยนตร์" },
            [path.highlights[1]]: { kicker: "Highlights / 02", en: "Soft movement, editorial poise, and quiet atmosphere.", th: "การเคลื่อนไหวที่นุ่มนวล ท่าทีแบบเอดิทอเรียล และบรรยากาศที่สงบ" },
            [path.highlights[2]]: { kicker: "Highlights / 03", en: "Natural presence framed with a film-still sensibility.", th: "ตัวตนที่เป็นธรรมชาติในกรอบภาพที่ให้ความรู้สึกเหมือนเฟรมจากภาพยนตร์" },
            [path.highlights[3]]: { kicker: "Highlights / 04", en: "A composed visual moment with subtle dramatic tension.", th: "ช่วงเวลาทางภาพที่นิ่ง สงบ และมีแรงดึงดูดอย่างละเอียด" },
            [path.portfolio[0]]: { kicker: "Portfolio / 01", en: "Editorial composition with a quiet, high-contrast mood.", th: "องค์ประกอบแบบเอดิทอเรียลพร้อมอารมณ์ภาพที่นิ่งและมีคอนทราสต์" },
            [path.portfolio[1]]: { kicker: "Portfolio / 02", en: "A cinematic frame focused on posture and presence.", th: "เฟรมแบบภาพยนตร์ที่เน้นท่วงท่าและการปรากฏตัว" },
            [path.portfolio[2]]: { kicker: "Portfolio / 03", en: "Soft styling and direct gaze in a polished portfolio study.", th: "สไตลิ่งที่นุ่มนวลและสายตาที่ชัดเจนในภาพพอร์ตที่เรียบเนี้ยบ" },
            [path.portfolio[3]]: { kicker: "Portfolio / 04", en: "A minimal frame built around shape, shadow, and restraint.", th: "เฟรมมินิมัลที่สร้างจากรูปทรง เงา และความยับยั้งอย่างพอดี" }
        }
    };

    window.CLIENT_CONFIG = {
        name: client.name,
        email: client.email,
        taglineEn: client.taglineEn,
        taglineTh: client.taglineTh,
        splashCaption: client.splashCaption,
        footerBioEn: client.footerBioEn,
        footerBioTh: client.footerBioTh,
        footerDescEn: client.footerBioEn,
        footerDescTh: client.footerBioTh,
        aboutBioEn: about.bioEn,
        aboutBioTh: about.bioTh,
        manifestoEn: about.manifestoEn,
        manifestoTh: about.manifestoTh,
        measurements,
        compCardUrl: compCard.image,
        compCardDownloadUrl: compCard.download,
        showImageCaptions: captions.showImageCaptions,
        imageCaptions: captions.items,
        instagram: instagramLink(client.instagram),
        line: lineLink(client.line),
        whatsapp: whatsappLink(client.whatsapp),
        client,
        about,
        assets: path,
        compCard,
        captions
    };
})();
