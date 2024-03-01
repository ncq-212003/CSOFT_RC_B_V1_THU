import { CreditCardIcon, PencilSquareIcon, Squares2X2Icon, UserIcon } from "@heroicons/react/24/solid";
import {
    AccessibilityNew,
    SettingsApplications,
    Adjust,
    Translate,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";


const settingsConfig = [
    {
        title: "Cấu hình hệ thống",
        path: "/setting/config-system",
        icon: <SvgIcon fontSize="medium" style={{ color: '#2196f3' }}><SettingsApplications /></SvgIcon>,
        group: "Hệ Thống"
    },
    {
        title: "Trình độ văn hóa",
        path: "/setting/educationLevel",
        icon: <SvgIcon fontSize="medium" style={{ color: '#3f51b5' }}><AccessibilityNew /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Trạng thái",
        path: "/setting/status",
        icon: <SvgIcon fontSize="medium" style={{ color: '#ff9800' }}><Adjust /></SvgIcon>,
        group: "Khác"
    },
    {
        title: "Từ vựng",
        path: "/setting/vocabulary",
        icon: <SvgIcon fontSize="medium" style={{ color: '#e91e63' }}><Translate /></SvgIcon>,
        group: "Khác    "
    },
    {
        title: "Hình thức thanh toán",
        path: "/setting/payment-type",
        icon: <SvgIcon fontSize="medium" style={{ color: '#3f51b5' }}><CreditCardIcon /></SvgIcon>,
        group: "Khác"
    },
];

export default settingsConfig;
