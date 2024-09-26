const placesData = {
    tab1: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'team logo/9.png',
        mainImageCaption: "Founder",
        images: [
            {src: 'board/a.png'},
            {src: 'board/r.png'},
            {src: 'board/t.png'}
        ]
    },
    tab2: {
        name: "Operations Manager",
        shortDescription: "Efficient Planning",
        mainImage: 'team logo/9.png',
        mainImageCaption: "Strategy",
        images: [
            {src: 'op managers/1.png', },
            {src: 'op managers/2.png', },
            {src: 'op managers/3.png', }
        ]
    },
    tab3: {
        name: "Tech Team",
        shortDescription: " The Tech Team manages the club’s website and tech infrastructure. They are responsible for building and updating the website, ensuring smooth registration portals, and implementing technical solutions for the club’s needs. The team also works on web development and app-related projects.",
        mainImage: 'tech/27-removebg-preview.png',
        mainImageCaption: "Tech Lead",
        images: [
            {src: 'tech/28-removebg-preview.png', },
            {src: 'tech/31-removebg-preview.png',},
            {src: 'tech/29-removebg-preview.png', }
        ]
    },
    tab4: {
        name: "Corporate Team",
        shortDescription: " The Corporate Team handles sponsorships and partnerships for the club. They reach out to potential sponsors, companies, and guest speakers to support club events,workshops, and fests. ",
        mainImage: 'cooprate/22-removebg-preview.png',
        mainImageCaption: "Corporate Lead",
        images: [
            {src: 'cooprate/23-removebg-preview.png', },
            {src: 'cooprate/24-removebg-preview.png', },
            {src: 'cooprate/25-removebg-preview.png', },
            {src: 'cooprate/26-removebg-preview.png', },
            {src: 'cooprate/30-removebg-preview.png', }
        ]
    },
    tab5: {
        name: "Content Team",
        shortDescription: " The Content Team is responsible for crafting engaging, informative, and well-structured content for the club's website, newsletters, blogs, and social media platforms. ",
        mainImage: 'content/32-removebg-preview.png',
        mainImageCaption: "Content Lead",
        images: [
            {src: 'content/33-removebg-preview.png', },
            {src: 'content/34-removebg-preview.png', },
            {src: 'content/35-removebg-preview.png', },
            {src: 'content/36-removebg-preview.png', }
        ]
    },
    tab6: {
        name: "Operation Team",
        shortDescription: " The Operations Team ensures the smooth execution of all club events. They are responsible for event management, from planning to logistics",
        mainImage: 'operation/15-removebg-preview.png',
        mainImageCaption: "Operation Lead",
        images: [
            {src: 'operation/16-removebg-preview.png',},
            {src: 'operation/17-removebg-preview.png',},
            {src: 'operation/18-removebg-preview.png', },
            {src: 'operation/19-removebg-preview.png', },
            {src: 'operation/20-removebg-preview.png', },
            {src: 'operation/21-removebg-preview.png', }
        ]
    },
    tab7: {
        name: "Outreach Team",
        shortDescription: " The Outreach Team spreads awareness about the club’s events and activities through various platforms like Instagram, LinkedIn, and WhatsApp. ",
        mainImage: 'outreach/5-removebg-preview.png',
        mainImageCaption: "Outreach Lead",
        images: [
            {src: 'outreach/6-removebg-preview.png',},
            {src: 'outreach/7-removebg-preview.png',},
            {src: 'outreach/8-removebg-preview.png',},
            {src: 'outreach/9-removebg-preview.png', }]
    },
    tab8: {
        name: "Anchoring Team",
        shortDescription: " The Anchoring Team is the voice of the club at events. They lead the audience through the event, introducing speakers, engaging with the crowd, and ensuring smooth transitions throughout the program. They are responsible for creating and delivering scripts and handling unexpected situations on stage.",
        mainImage: 'ancoharing/1.png',
        mainImageCaption: "Anchoring Lead",
        images: [
            {src: 'ancoharing/2.png', },
            {src: 'ancoharing/3.png', },
            {src: 'ancoharing/4.png', }
        ]
    },
    tab9: {
        name: "Creative Team",
        shortDescription: "The Creative Team designs visual content for the club’s events and promotional campaigns. Using tools like Canva and Figma, they create posters, banners, and social media graphics to capture the attention of the audience. The team works closely with other teams to brainstorm creative ideas and ensure brand consistency across all platforms.",
        mainImage: 'creative/1-removebg-preview.png',
        mainImageCaption: "Creative Lead",
        images: [
            {src: 'creative/2-removebg-preview.png', },
            {src: 'creative/3-removebg-preview.png', },
            {src: 'creative/4-removebg-preview.png', }
        ]
    },
    tab10: {
        name: "Media Team",
        shortDescription: " The Media Team captures and edits videos and photos for the club’s events, creating engaging reels, event coverage, and promotional videos.",
        mainImage: 'media/10-removebg-preview.png',
        mainImageCaption: "Media Lead",
        images: [
            {src: 'media/11-removebg-preview.png', },
            {src: 'media/12-removebg-preview.png', },
            {src: 'media/13-removebg-preview.png',},
            {src: 'media/14-removebg-preview.png',}
        ]
    }
};


// Function to display the place details and images
function showPlaceDetails(tabId) {
    const place = placesData[tabId];
    const gallery = document.getElementById('gallery');

    // Clear previous content
    gallery.innerHTML = '';

    // HTML structure for the place content
    const placeContent = `
       <div class="main-image-container">
    <h3 class="main-title">${place.name}</h3>
    <p class="main-description">${place.shortDescription}</p>
    <img src="${place.mainImage}" class="main-image" alt="${place.name}">
    <p class="image-caption">${place.mainImageCaption}</p>
</div>
<div class="image-grid">
    ${place.images.map(image => `
    <div class="image-container">
        <div class="image-grid-item">
            <img src="${image.src}" alt="${image.title}">
        </div>
    </div>
    `).join('')}
</div>
    `;

    // Insert content into the gallery
    gallery.innerHTML = placeContent;
}
