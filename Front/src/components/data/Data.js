import sidibou from "./../../assets/images/list/cafe-resto/sidibou.jpg" 
import elgrotte from "./../../assets/images/list/cafe-resto/elgrotte.jpg"
import ribat from "./../../assets/images/list/hist/ribat.jpg"

import gym from "./../../assets/icons/gym.png"
import historic from "./../../assets/icons/historic-site.png"
import hotel from "./../../assets/icons/hotel.png"
import park from "./../../assets/icons/park.png"
import restaurant from "./../../assets/icons/restaurant.png"

import djerbahood from "./../../assets/images/djerbahood.jpg"
import sidibousaid from "./../../assets/images/sidibousaid.jpg"
import tozeur from "./../../assets/images/tozeur.jpg"


import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

export const nav = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "about",
        path: "/about",
    },
    {
        text: "services",
        path: "/services/All",
    },
    {
        text: "contact",
        path: "/contact",
    },
]

export const menuItems = [
    {
        text: "All",
        icon: <BorderAllOutlinedIcon></BorderAllOutlinedIcon>,
    },
    {
        text: "Cafe-Resto",
        icon: <RestaurantOutlinedIcon></RestaurantOutlinedIcon>,
    },
    {
        text: "Hotel",
        icon: <HotelOutlinedIcon></HotelOutlinedIcon>,
    },
    {
        text: "Park",
        icon: <AttractionsOutlinedIcon></AttractionsOutlinedIcon>,
    },
    {
        text: "Site historique",
        icon: <MosqueOutlinedIcon/>,
    },
    {
        text: "Gym",
        icon: <FitnessCenterOutlinedIcon/>,
    },
    {
        text: "Transport",
        icon: <DepartureBoardOutlinedIcon/>,
    },
    {
        text: "Package",
        icon: <InventoryOutlinedIcon/>,
    },
]

export const featured = [
    {
    cover: hotel,
    name: "Hotel",
    total: "122 Property",
    },
    {
    cover: restaurant,
    name: "Restaurant",
    total: "155 Property",
    },
    {
    cover: historic,
    name: "Historical site",
    total: "80 Site",
    },
    {
    cover: park,
    name: "Park",
    total: "15 Site",
    },
    {
    cover: gym,
    name: "Gym",
    total: "50 Property",
    },
]

export const list = [
    {
        id: 1,
        cover: sidibou,
        name: "Sidi Bou Said",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        location: "Marina, Monastir",
        type: "Open",
        price: "$8,000",
        category: "Cafe-Resto",
    },
    {
        id: 2,
        cover: elgrotte,
        name: "El Grotte",
        description:"lorem ipsum yess miled hdsuhusu iadda dadnkndz yessine miledsdakn sjdnbf",
        location: "Route el karraiya, Monastir",
        type: "Open",
        price: "$9,750",
        category: "Cafe-Resto",
    },
    {
        id: 3,
        cover: ribat,
        name: "Forte El Ribat",
        description:"lorem ipsum yess miled hdsuhusu iadda dadnkndz yessine miledsdakn sjdnbf",
        location: "Route de la Falaise, Monastir",
        type: "Closed",
        price: "$2,000",
        category: "Site historique",
    },
    {
        id: 4,
        cover: elgrotte,
        name: "El Grotteeeee",
        description:"lorem ipsum yess miled hdsuhusu iadda dadnkndz yessine miledsdakn sjdnbf",
        location: "Route el karraiya, Monastir",
        type: "Open",
        price: "$9,750",
        category: "Gym",
    },
    {
        id: 5,
        cover: ribat,
        name: "Forte El Ribat yasss",
        description:"lorem ipsum yess miled hdsuhusu iadda dadnkndz yessine miledsdakn sjdnbf",
        location: "Route de la Falaise, Monastir",
        type: "Closed",
        price: "$2,000",
        category: "Park",
    },
    {
        id: 6,
        cover: ribat,
        name: "Forte El Ribat hmilaa",
        description:"lorem ipsum yess miled hdsuhusu iadda dadnkndz yessine miledsdakn sjdnbf",
        location: "Route de la Falaise, Monastir",
        type: "Closed",
        price: "$2,000",
        category: "Park",
    },
]
export const listHome = [
    {
    id: 1,
    cover: sidibou,
    name: "Sidi Bou Said",
    location: "Marina, Monastir",
    type: "Open",
    price: "$8,000",
    category: "Cafe-Resto",
    },
    {
    id: 2,
    cover: elgrotte,
    name: "El Grotte",
    location: "Route el karraiya, Monastir",
    type: "Open",
    price: "$9,750",
    category: "Cafe-Resto",
    },
    {
    id: 3,
    cover: ribat,
    name: "Forte El Ribat",
    location: "Route de la Falaise, Monastir",
    type: "Closed",
    price: "$2,000",
    category: "Site historique",
    },
]
export const location = [
    {
    id: 1,
    name: "Sidi Bou Said, Tunis",
    cover: sidibousaid,
    },
    {
    id: 2,
    name: "StarWars site, Tozeur",
    cover: tozeur,
    },
    {
    id: 3,
    name: "Djerba Hood, Djerba",
    cover: djerbahood,
    },
    
]

export const pack = [
    {
        id:1,
        plan: "Basic",
        price: "29",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Bus tours",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Air-conditioned vehicle" },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Lunch" },
        ],
        },
        {
        id:2,
        best: "Best Value",
        plan: "Standard",
        price: "49",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            change: "color",
            icon: <i class='fa-solid fa-x'></i>,
            text: "Lunch",
            },
        ],
        },
        {
        id:3,
        plan: "Platinum",
        price: "79",
        ptext: "2 people",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Lunch",
            },
        ],
        },
]

export const footer = [
    {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Contact Page" }],
    },
    {
    title: "ALL CATEGORIES",
    text: [{ list: "Cafe" }, { list: "Restaurant" }, { list: "Historical Site" },{ list: "Park" }, { list: "Gym" }, { list: "Bar" }],
    },
    {
    title: "COMPANY",
    text: [{ list: "About" }],
    },
]

export const categoryList = [
    {
        id: 1,
        value: 'Site historique',
        label: '🚩 Site historique',
    },
    {
        id: 2,
        value: 'Cafe-Resto',
        label: '🍕 Cafe-Resto',
    },
];
