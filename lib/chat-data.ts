export interface Message {
  id: string
  sender: "user" | "bot"
  content: string
  timestamp: string
  senderName?: string
}

export interface Chat {
  id: string
  storeName: string
  storeIcon: string
  lastMessage: string
  timestamp: string
  status?: string
  messages: Message[]
}

export const chats: Chat[] = [
  {
    id: "1",
    storeName: "Rhinowalk Brand Store",
    storeIcon: "🦏",
    lastMessage: "The 11.11 sale is ending soon! RHINOWALK offers th...",
    timestamp: "Yesterday",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "The 11.11 sale is ending soon! RHINOWALK offers the best deals on luggage and travel accessories.",
        timestamp: "2025-11-18 14:30",
        senderName: "Rhinowalk Brand Store",
      },
    ],
  },
  {
    id: "10",
    storeName: "Home Decor & Furnishing",
    storeIcon: "🛋️",
    lastMessage:
      "That sounds perfect for my living room! I'll place the order now. Thanks for the help!",
    timestamp: "2 hours ago",
    status: "Online",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "Hi, is the 'Nordic Arc Lamp' adjustable in height? I saw it on your website.",
        timestamp: "2025-09-28 11:15",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hello Aayuss! Yes, the Nordic Arc Lamp has an adjustable arm. It can be set between 150cm and 180cm, offering great flexibility for reading or mood lighting.",
        timestamp: "2025-09-28 11:20",
        senderName: "Home Decor Support",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "Great! What is the material of the base and the shade? I want to make sure it's stable and durable.",
        timestamp: "2025-09-28 11:35",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "The base is heavy-duty **polished marble** for stability, weighing about 15kg. The shade is made of durable **brushed aluminum** with a matte finish.",
        timestamp: "2025-09-28 11:40",
        senderName: "Home Decor Support",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "Marble is excellent. Do you offer the shade in any color other than silver/grey?",
        timestamp: "2025-09-29 14:00",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "We do! We currently stock it in **Brushed Silver**, **Matte Black**, and a limited edition **Copper** finish. The copper is quite popular right now.",
        timestamp: "2025-09-29 14:05",
        senderName: "Home Decor Support",
      },
      {
        id: "m7",
        sender: "user",
        content:
          "Ooh, the matte black sounds good. And one final question: what kind of bulb does it use? Is it included?",
        timestamp: "2025-09-29 14:20",
        senderName: "Aayuss",
      },
      {
        id: "m8",
        sender: "bot",
        content:
          "It uses a standard E27 bulb. A 9W warm white LED bulb is included with every purchase. That sounds perfect for my living room! I'll place the order now. Thanks for the help!",
        timestamp: "2025-09-29 14:25",
        senderName: "Home Decor Support",
      },
      {
        id: "m9",
        sender: "user",
        content:
          "That sounds perfect for my living room! I'll place the order now. Thanks for the help!",
        timestamp: "2025-09-29 14:30",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "11",
    storeName: "Gadget Hub Electronics",
    storeIcon: "🎧",
    lastMessage: "Thank you for clarifying! Replacement is much appreciated.",
    timestamp: "Today",
    status: "Active 5m ago",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "I received the noise-cancelling headphones yesterday, but they seem to have a faulty left speaker. I'd like to return them or get a replacement.",
        timestamp: "2025-10-05 08:30",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "I sincerely apologize for the inconvenience, Aayuss. That's certainly not the experience we want you to have. We can process a return or replacement immediately. Was the shipping package intact when it arrived?",
        timestamp: "2025-10-05 08:35",
        senderName: "Gadget Support",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "Yes, the outer packaging was fine. It seems to be a manufacturing defect, perhaps a loose connection inside.",
        timestamp: "2025-10-05 08:38",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "Understood. Based on your description, we recommend a **replacement**. We'll send out a new pair today via expedited shipping at no extra cost, and we will email you the return label for the faulty unit.",
        timestamp: "2025-10-05 08:45",
        senderName: "Gadget Support",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "A replacement sounds great. Do I need to pay for the return shipping?",
        timestamp: "2025-10-06 09:10",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "No, absolutely not. The return shipping for the defective item is completely free. The prepaid label will be in the email we send you within the next hour.",
        timestamp: "2025-10-06 09:15",
        senderName: "Gadget Support",
      },
      {
        id: "m7",
        sender: "user",
        content: "Thank you for clarifying! Replacement is much appreciated.",
        timestamp: "2025-10-06 09:20",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "0",
    storeName: "Freedom Car",
    storeIcon: "🦏",
    lastMessage: "that'll be much helpful ☺️ thankyou",
    timestamp: "Yesterday",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content: "Hey, we've received your order and we'll ship it asap ^_^",
        timestamp: "2025-10-30 14:30",
        senderName: "Freedom Car",
      },
      {
        id: "m2",
        sender: "user",
        content: "thank youu. Please do it as soon as possible",
        timestamp: "2025-10-30 14:58",
        senderName: "Aayuss",
      },
      {
        id: "m3",
        sender: "bot",
        content: "We're about to ship your product",
        timestamp: "2025-10-31 18:30",
        senderName: "Freedom Car",
      },
      {
        id: "m4",
        sender: "bot",
        content: "Does your country imply taxes when importing goods?",
        timestamp: "2025-10-31 18:35",
        senderName: "Freedom Car",
      },
      {
        id: "m5",
        sender: "user",
        content: "yes, it does",
        timestamp: "2025-10-31 18:40",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "got it. we'll declare the value accordingly to avoid high taxes",
        timestamp: "2025-11-1 14:58",
        senderName: "Freedom Car",
      },
      {
        id: "m7",
        sender: "user",
        content: "that'll be much helpful ☺️ thankyou",
        timestamp: "2025-11-2 9:22",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "12",
    storeName: "Aqua Pure Filters",
    storeIcon: "💧",
    lastMessage:
      "The error code is gone! Thank you so much for the clear instructions.",
    timestamp: "18/11",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "My new water filter system keeps flashing the 'Error 03' code. It's been installed correctly following the manual, but it won't stop beeping.",
        timestamp: "2025-10-15 15:00",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hi Aayuss. Error 03 usually means there's a pressure sensor mismatch, often caused by trapped air in the lines. Can you confirm if you bled the air out of the system after installation?",
        timestamp: "2025-10-15 15:05",
        senderName: "Aqua Pure Tech",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "I thought I did, but I'm not entirely sure. What is the most effective way to do that again? I don't want to damage anything.",
        timestamp: "2025-10-15 15:10",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "No problem at all. Please follow these steps carefully: 1) Turn off the main water supply valve to the unit. 2) Open the small **red pressure release valve** on the top of the filter head for about 30 seconds to release trapped air and pressure. 3) Close the red valve. 4) Restore the main water supply. Let us know if the error persists.",
        timestamp: "2025-10-15 15:15",
        senderName: "Aqua Pure Tech",
      },
      {
        id: "m5",
        sender: "user",
        content: "Doing it now... it's taking a while. Should I hear a hiss?",
        timestamp: "2025-10-15 15:25",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "Yes, you should hear a slight hiss or rush of air/water. Once the pressure is fully released, you can proceed to close the red valve and turn the supply back on.",
        timestamp: "2025-10-15 15:28",
        senderName: "Aqua Pure Tech",
      },
      {
        id: "m7",
        sender: "user",
        content:
          "Okay, I followed all steps. The system is running again, and the error code is gone! Thank you so much for the clear instructions.",
        timestamp: "2025-10-15 15:45",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "2",
    storeName: "Shop1104750472 Store",
    storeIcon: "👜",
    lastMessage: "亲爱的，您好，十分抱歉给您造成不便，我们会尽快为...",
    timestamp: "Yesterday",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content: "亲爱的，您好，十分抱歉给您造成不便，我们会尽快为您处理。",
        timestamp: "2025-11-18 10:00",
        senderName: "Shop1104750472 Store",
      },
    ],
  },
  {
    id: "13",
    storeName: "Vintage Vinyl Records",
    storeIcon: "💿",
    lastMessage: "Order placed for the special edition! So excited. Thank you!",
    timestamp: "18/11",
    status: "Busy",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "Hello, I am looking for the limited edition blue vinyl of 'Midnight Train'. Do you have any copies left?",
        timestamp: "2025-11-14 10:15",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hi Aayuss! Great choice! Yes, we have exactly 3 copies remaining of the limited edition blue pressing. They are currently not listed on the main site.",
        timestamp: "2025-11-14 10:20",
        senderName: "Vinyl Store Support",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "That's fantastic news! How can I reserve or purchase one? I'm worried it will sell out quickly.",
        timestamp: "2025-11-14 10:35",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "We can create a private link for you. It will reserve one copy for the next 24 hours. The price is $45 plus shipping. Should I generate the link?",
        timestamp: "2025-11-14 10:40",
        senderName: "Vinyl Store Support",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "Yes, please generate the link! I'll pay right away. Can you also confirm the condition? Is it brand new/sealed?",
        timestamp: "2025-11-14 10:45",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "It is absolutely brand new and still factory sealed (MINT/MINT condition). Here is your private purchase link: [link-to-purchase-12345].",
        timestamp: "2025-11-14 10:50",
        senderName: "Vinyl Store Support",
      },
      {
        id: "m7",
        sender: "user",
        content: "Order placed for the special edition! So excited. Thank you!",
        timestamp: "2025-11-14 11:05",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "14",
    storeName: "Organic Herb & Spice Co.",
    storeIcon: "🌿",
    lastMessage: "Perfect. Please make sure the batch is fresh. Thanks!",
    timestamp: "19/11",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "I want to place a bulk order for organic cinnamon powder (5kg). Do you offer any discount for large quantities?",
        timestamp: "2025-11-17 14:00",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hello Aayuss! For a 5kg order of our premium organic Ceylon Cinnamon, we can offer a 15% bulk discount. This will be automatically applied to your invoice.",
        timestamp: "2025-11-17 14:08",
        senderName: "Organic Spice Sales",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "That's a good discount. Before I confirm, what is the current harvest date for the cinnamon batch you would be shipping?",
        timestamp: "2025-11-17 14:15",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "I just checked the warehouse records. The current batch available for shipping was harvested on **October 25th, 2025**. It's very fresh.",
        timestamp: "2025-11-17 14:25",
        senderName: "Organic Spice Sales",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "Excellent. I will need the shipment delivered to an address different from my billing address. How can I ensure that happens when I check out?",
        timestamp: "2025-11-18 09:30",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "During checkout, after entering your billing information, there will be a separate section labeled 'Shipping Address'. You can enter the new delivery location there.",
        timestamp: "2025-11-18 09:35",
        senderName: "Organic Spice Sales",
      },
      {
        id: "m7",
        sender: "user",
        content: "Perfect. Please make sure the batch is fresh. Thanks!",
        timestamp: "2025-11-18 09:40",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "15",
    storeName: "Digital Art Prints Shop",
    storeIcon: "🖼️",
    lastMessage:
      "I see, I will contact my local printer. Thanks for the quick advice!",
    timestamp: "16/11",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "Hi, I purchased the 'City Lights' digital print file. I need to print it at 40x60 inches. Will the file resolution be high enough?",
        timestamp: "2025-11-16 11:00",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hello Aayuss! The 'City Lights' file is a 300dpi JPEG, maximized for a maximum print size of 36x48 inches (approx 91x122 cm) without loss of quality.",
        timestamp: "2025-11-16 11:05",
        senderName: "Art Print Support",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "Ah, 40x60 inches is slightly larger than that limit. Will the quality look noticeably poor if I push it?",
        timestamp: "2025-11-16 11:10",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "Since 40x60 is a significant jump, there is a risk of pixelation, especially if viewed up close. We recommend asking your print service if they can use upscaling software before printing.",
        timestamp: "2025-11-16 11:15",
        senderName: "Art Print Support",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "Okay. Is there a similar, high-resolution piece in the collection that would support the 40x60 size natively?",
        timestamp: "2025-11-16 11:20",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "Yes, our new 'Skyscraper Dreams' collection files are provided at 6000x9000px, which supports 40x60 inches comfortably at 150dpi. You can find them under the 'Architectural' category.",
        timestamp: "2025-11-16 11:25",
        senderName: "Art Print Support",
      },
      {
        id: "m7",
        sender: "user",
        content:
          "I see, I will contact my local printer about the upscaling first, as I really prefer 'City Lights'. Thanks for the quick advice!",
        timestamp: "2025-11-16 11:30",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "16",
    storeName: "Outdoor Gear HQ",
    storeIcon: "⛰️",
    lastMessage:
      "I'll try applying the heat patch tonight. If not, I will contact you tomorrow. Thanks!",
    timestamp: "15/11",
    status: "Active 2h ago",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "I recently bought the 'Arctic Explorer' sleeping bag. I noticed a very small tear near the zipper seam. It arrived like this.",
        timestamp: "2025-11-12 16:00",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Hi Aayuss, we apologize for the damage! Could you please send a photo of the tear? Depending on the size, we may be able to send you a complimentary repair patch kit instead of requiring a full return.",
        timestamp: "2025-11-12 16:05",
        senderName: "Outdoor Support",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "Sure, I've attached the photo. It's about half an inch long. A patch kit sounds much easier than returning the whole bag.",
        timestamp: "2025-11-12 16:15",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "Thank you for the photo. That size is perfect for our self-adhesive heat-activated repair patch. We will ship a patch kit in the appropriate color (Forest Green) to you today. Shipping details are in the attached file.",
        timestamp: "2025-11-13 09:20",
        senderName: "Outdoor Support",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "That's excellent service. How long does the patch take to adhere? Do I need a special iron?",
        timestamp: "2025-11-13 14:00",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "You just need a standard clothes iron set to medium heat (no steam). Press firmly for about 45 seconds, and it will bond permanently. Wait 24 hours before use. Let us know if you have any trouble applying it.",
        timestamp: "2025-11-13 14:05",
        senderName: "Outdoor Support",
      },
      {
        id: "m7",
        sender: "user",
        content:
          "I'll try applying the heat patch tonight. If not, I will contact you tomorrow. Thanks!",
        timestamp: "2025-11-13 14:10",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "17",
    storeName: "Pet Supply Depot",
    storeIcon: "🐕",
    lastMessage:
      "Got it. I've ordered two large bags. Hopefully, my dog loves this one!",
    timestamp: "14/11",
    messages: [
      {
        id: "m1",
        sender: "user",
        content:
          "I'm looking to switch my large dog to grain-free food. Can you recommend one of your brands that is high in protein?",
        timestamp: "2025-11-10 13:30",
        senderName: "Aayuss",
      },
      {
        id: "m2",
        sender: "bot",
        content:
          "Absolutely, Aayuss. We highly recommend our 'Hunter's Feast' formula. It is grain-free and features real venison and salmon as the first two ingredients, boasting 35% crude protein.",
        timestamp: "2025-11-10 13:35",
        senderName: "Pet Depot Advisor",
      },
      {
        id: "m3",
        sender: "user",
        content:
          "That sounds promising. Are there any artificial colors or fillers in that formula? My dog has a sensitive stomach.",
        timestamp: "2025-11-10 13:40",
        senderName: "Aayuss",
      },
      {
        id: "m4",
        sender: "bot",
        content:
          "Hunter's Feast contains zero artificial colors, flavors, or preservatives, and no potato or corn fillers. It's specifically designed for high digestibility.",
        timestamp: "2025-11-10 13:45",
        senderName: "Pet Depot Advisor",
      },
      {
        id: "m5",
        sender: "user",
        content:
          "Okay, I think I'll try it. I need two large bags (15kg). Do you have enough in stock for immediate shipping?",
        timestamp: "2025-11-11 10:10",
        senderName: "Aayuss",
      },
      {
        id: "m6",
        sender: "bot",
        content:
          "Yes, we have over 50 bags in our main warehouse. If you order within the next 3 hours, we can guarantee same-day shipping.",
        timestamp: "2025-11-11 10:15",
        senderName: "Pet Depot Advisor",
      },
      {
        id: "m7",
        sender: "user",
        content:
          "Got it. I've ordered two large bags. Hopefully, my dog loves this one!",
        timestamp: "2025-11-11 10:30",
        senderName: "Aayuss",
      },
    ],
  },
  {
    id: "3",
    storeName: "hihigh Store",
    storeIcon: "🌳",
    lastMessage: "Trending products you will want to check out",
    timestamp: "Yesterday",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Trending products you will want to check out. We have new arrivals that match your interests!",
        timestamp: "2025-11-18 09:15",
        senderName: "hihigh Store",
      },
    ],
  },
  {
    id: "4",
    storeName: "CD-SmartDevice Office Store",
    storeIcon: "📦",
    lastMessage: "we've shipped it to you.we will update i...",
    timestamp: "17/11",
    status: "Active 1d ago",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content: "Hello! How may I assist you today?",
        timestamp: "2025-11-17 08:00",
        senderName: "CD-SmartDevice Office Store",
      },
      {
        id: "m2",
        sender: "user",
        content: "hello, would it be possible to ship my order asap?",
        timestamp: "2025-11-17 08:05",
      },
      {
        id: "m3",
        sender: "bot",
        content:
          "I understand you'd like your order shipped as soon as possible. I can see that your order is currently being prepared and is within the normal processing time. The order is expected to be shipped by November 26th, 2025. Rest assured that we'll process your order as quickly as possible. Would you like me to help you with anything else?",
        timestamp: "2025-11-17 08:10",
        senderName: "CD-SmartDevice Office Store",
      },
    ],
  },
  {
    id: "5",
    storeName: "Win-win Cooperation UVPS Store",
    storeIcon: "📡",
    lastMessage: "Here's a coupon for items in your cart",
    timestamp: "17/11",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Here's a coupon for items in your cart. Use code UVPS20 for 20% off!",
        timestamp: "2025-11-17 12:30",
        senderName: "Win-win Cooperation UVPS Store",
      },
    ],
  },
  {
    id: "6",
    storeName: "CHASING VEHICLE PARTS Store",
    storeIcon: "🚗",
    lastMessage: "Exclusive discounts on these new arrivals",
    timestamp: "16/11",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Exclusive discounts on these new arrivals. Check out our latest vehicle parts collection!",
        timestamp: "2025-11-16 16:45",
        senderName: "CHASING VEHICLE PARTS Store",
      },
    ],
  },
  {
    id: "7",
    storeName: "FHTD House Store",
    storeIcon: "👩",
    lastMessage: "Trending products you will want to check out",
    timestamp: "16/11",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Trending products you will want to check out. Visit our store for exclusive deals!",
        timestamp: "2025-11-16 14:20",
        senderName: "FHTD House Store",
      },
    ],
  },
  {
    id: "8",
    storeName: "USB Cable Store",
    storeIcon: "🔌",
    lastMessage: "Here's a coupon for items in your cart",
    timestamp: "15/11",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Here's a coupon for items in your cart. Save 15% on all cable products!",
        timestamp: "2025-11-15 11:00",
        senderName: "USB Cable Store",
      },
    ],
  },
  {
    id: "9",
    storeName: "Cantus Store",
    storeIcon: "🎵",
    lastMessage: "Here's a coupon for items in your cart",
    timestamp: "15/11",
    messages: [
      {
        id: "m1",
        sender: "bot",
        content:
          "Here's a coupon for items in your cart. Enjoy 25% off everything!",
        timestamp: "2025-11-15 09:30",
        senderName: "Cantus Store",
      },
    ],
  },
]
