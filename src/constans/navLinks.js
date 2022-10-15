import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export const navLinks = [
  {
    id: "home",
    name: "Domov",
    path: "/",
    icon: <HomeOutlinedIcon />,
    end: true,
  },
  {
    id: "cakes",
    name: "Torty",
    path: "/torty",
    icon: <CakeOutlinedIcon />,
    end: false,
  },
  {
    id: "smallCakes",
    name: "Koláče",
    path: "/kolace",
    icon: <BakeryDiningOutlinedIcon />,
    end: false,
  },
  {
    id: "specialties",
    name: "Špeciality",
    path: "/speciality",
    icon: <GradeOutlinedIcon />,
    end: false,
  },
  {
    id: "order",
    name: "Objednávka",
    path: "/objednavka",
    icon: <LocalGroceryStoreOutlinedIcon />,
    end: false,
  },
];
