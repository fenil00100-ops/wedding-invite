/**
 * WEDDING CONFIGURATION
 * All texts, dates, couple details, venue information, and image paths
 * can be edited directly in this file.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: {
      firstName: "Aayush",
      fullName: "Aayush Mehta",
      relation: "Son of",
      parents: "Smt. Hetal Mehta & Shri Rajesh Mehta",
      initial: "A"
    },
    bride: {
      firstName: "Nikita",
      fullName: "Nikita Patel",
      relation: "Daughter of",
      parents: "Smt. Bhavna Patel & Shri Mahesh Patel",
      initial: "N"
    },
    hashtag: "#AayushWedsNikita",
    monogram: "A & N"
  },

  // Key Dates
  dates: {
    weddingDate: "2027-02-14T18:30:00",
    weddingFormatted: "14 FEBRUARY 2027",
    sangeetFormatted: "13 FEBRUARY 2027",
    postmarkDate: "14-02-27",
    rsvpDeadline: "20 January 2027"
  },

  // Section 1: Intro Gate & Night Reveal
  intro: {
    bannerText: "Aayush  WEDS  Nikita",
    subText: "Together with their families, invite you to celebrate",
    gateSubtitle: "TAP OR SWIPE TO OPEN THE ROYAL GATES",
    skipText: "SKIP"
  },

  // Section 2: Invitation Card
  invitation: {
    omSymbol: "ॐ",
    sanskritShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation: "O Lord Ganesha of curved trunk and boundless brilliance, please remove all obstacles from our new path.",
    heading: "We Cordially Invite You",
    paragraph: "With the divine blessings of Lord Ganesha and our beloved ancestors, we invite you and your family to grace the auspicious celebrations as our two families unite in joy, love, and tradition."
  },

  // Section 3: Scratch-to-Reveal
  scratchCard: {
    heading: "A Special Surprise",
    subheading: "Scratch the heart to reveal our wedding date",
    revealDate: "14 FEBRUARY 2027",
    revealSubtitle: "Valentine's Day • The Sacred Pheras",
    hintText: "Scratch to reveal ✨"
  },

  // Section 4: Live Countdown
  countdown: {
    heading: "The Big Day Approaches",
    subheading: "Counting every second until our two souls unite",
    targetDate: "2027-02-14T18:30:00"
  },

  // Section 5: Our Story Carousel
  story: {
    heading: "Our Story",
    subheading: "Two lives, one destined path, written in laughter & love",
    chapters: [
      {
        id: "ch-1",
        year: "2022",
        title: "A Serendipitous Coffee",
        description: "What was planned as a formal 30-minute introductory coffee turned into 4 enchanting hours of non-stop stories, mutual laughter, and an electric spark neither of us could deny.",
        photo: "./assets/story-1.svg",
        caption: "Ahmedabad • The First Spark"
      },
      {
        id: "ch-2",
        year: "2024",
        title: "Adventures Across the Hills",
        description: "From spontaneous highway food crawls to watching the sunrise paint the Aravali mountains in gold, every adventure confirmed that home wasn't a place—it was each other.",
        photo: "./assets/story-2.svg",
        caption: "Aravali Trails • Wanderlust Souls"
      },
      {
        id: "ch-3",
        year: "2025",
        title: "The Udaipur Lake Proposal",
        description: "Under the silver shimmer of a full moon on Lake Pichola, with floating diyas and royal palace lights reflecting in her eyes, Aayush asked Nikita to be his forever. She said YES!",
        photo: "./assets/story-3.svg",
        caption: "Lake Pichola • She Said Yes!"
      },
      {
        id: "ch-4",
        year: "2027",
        title: "Forever Begins",
        description: "Surrounded by our cherished family and friends, holding hands around the sacred fire, we begin our greatest journey yet. We cannot wait to celebrate with you!",
        photo: "./assets/story-4.svg",
        caption: "14 Feb 2027 • The Royal Beginning"
      }
    ]
  },

  // Section 6: Events
  events: [
    {
      id: "sangeet-cocktail",
      title: "Sangeet & Cocktail Party",
      dateBadge: "13 Feb 2027 • Saturday",
      time: "7:00 PM onwards",
      venueName: "THE HOUSE OF MG",
      address: "Opp. Sidi Saiyyed Mosque, Lal Darwaja, Ahmedabad, Gujarat 380001",
      state: "Ahmedabad, Gujarat",
      mapLink: "https://maps.google.com/?q=The+House+of+MG+Ahmedabad",
      dressCode: "Indo-Western & Shimmering Glitz",
      artwork: "./assets/event-sangeet.svg",
      tag: "DANCE & MUSIC"
    },
    {
      id: "mandap-haldi",
      title: "Wedding Rites & Mandap Muhurat",
      dateBadge: "14 Feb 2027 • Sunday",
      time: "10:00 AM to 1:30 PM",
      venueName: "ITC NARMADA, A LUXURY COLLECTION HOTEL",
      address: "Judges Bungalow Rd, Vastrapur, Ahmedabad, Gujarat 380015",
      state: "Ahmedabad, Gujarat",
      mapLink: "https://maps.google.com/?q=ITC+Narmada+Vastrapur+Ahmedabad",
      dressCode: "Sunset Yellows & Festive Pastels",
      artwork: "./assets/event-haldi.svg",
      tag: "AUSPICIOUS RITUALS"
    },
    {
      id: "royal-wedding",
      title: "The Royal Wedding & Reception",
      dateBadge: "14 Feb 2027 • Sunday",
      time: "6:30 PM onwards (Baraat 6:30 PM | Pheras 8:30 PM)",
      venueName: "THE LEELA PALACE, LAKE PICHOLA",
      address: "Lake Pichola, Udaipur, Rajasthan 313001",
      state: "Udaipur, Rajasthan",
      mapLink: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
      dressCode: "Regal Indian Heritage & Royal Sherwanis",
      artwork: "./assets/event-wedding.svg",
      tag: "SACRED PHERAS"
    }
  ],

  // Section 7: Travel Journey
  travelJourney: {
    originCity: "AHMEDABAD",
    originSubtitle: "Sangeet & Cultural Heritage",
    destinationCity: "UDAIPUR",
    destinationSubtitle: "The Grand Royal Pheras",
    distance: "260 KM (approx. 4.5 hrs scenic drive / 45 min flight)",
    description: "Guests joining the royal wedding at Lake Pichola will travel along the scenic Aravali corridor from Ahmedabad to Udaipur.",
    transportNote: "Private guest shuttle coaches & airport concierge desk available at Udaipur (UDR) and Ahmedabad (AMD)."
  },

  // Section 8: Blessings From Family
  blessings: {
    heading: "With Blessings From",
    subheading: "Our loving elders, family, and cherished ones",
    groups: [
      {
        category: "Grandparents",
        icon: "crown",
        members: [
          "Late Smt. Shardaben & Shri Chimanlal Mehta",
          "Smt. Taraben & Shri Ramanbhai Patel",
          "Late Smt. Kokilaben & Shri Kantilal Shah"
        ]
      },
      {
        category: "Bhabhi & Brother",
        icon: "heart",
        members: [
          "Pooja & Rohan Mehta",
          "Devangi & Hardik Patel"
        ]
      },
      {
        category: "Sister & Jiju",
        icon: "sparkles",
        members: [
          "Kavita & Dr. Anand Trivedi",
          "Riddhi & Pratik Desai"
        ]
      },
      {
        category: "Nieces & Nephew",
        icon: "smile",
        members: [
          "Aanvi",
          "Kabir",
          "Kiara",
          "Aarav"
        ]
      }
    ]
  },

  // Section 9: RSVP Form
  rsvp: {
    heading: "Kindly Respond",
    subheading: "Please celebrate this golden milestone with us",
    deadlineText: "Kindly RSVP by 20 January 2027",
    buttonText: "CONFIRM RSVP",
    barcodeNumber: "WED-2027-AY-NK-0214"
  },

  // Section 10: Thank You
  thankYou: {
    heading: "Thank You",
    message: "Your warm presence, prayers, and heartfelt blessings are the most precious gifts as we step into our new life together. We are eternally grateful to have you in our lives.",
    signOff: "With boundless love & gratitude,",
    coupleNames: "Aayush & Nikita",
    postmarkDate: "14-02-27",
    waxInitials: "A & N"
  },

  // Audio settings
  audio: {
    title: "Royal Shehnai & Sitar Harmony",
    // Can point to an MP3 file in /public/assets/wedding-music.mp3 or let built-in synth play
    customAudioSrc: ""
  }
};

export default weddingConfig;
