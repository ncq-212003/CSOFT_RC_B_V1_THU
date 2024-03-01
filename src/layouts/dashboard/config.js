import {
  ChartBarIcon,
  UserIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  CpuChipIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ConstructionIcon from '@mui/icons-material/Construction';
import {
  Group,
  Add,
  Settings,
  ReceiptLong,
  Psychology,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Tổng quan",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài chính",
    path: "/finance",
    icon: (
      <SvgIcon fontSize="small">
        <MonetizationOnIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Phòng Bàn",
    path: "/dining-room",
    icon: (
      <SvgIcon fontSize="small">
        <TableRestaurantIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Hàng hóa",
    path: "/goods",
    icon: (
      <SvgIcon fontSize="small">
        <DinnerDiningIcon />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Kho",
        path: "/warehouse",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Thiết lập giá",
        path: "/pricing",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Đối tác",
    path: "/partner",
    icon: (
      <SvgIcon fontSize="small">
        <Group />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Khách hàng",
        path: "/customers",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Nhà cung cấp",
        path: "/supplier",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Giao dịch",
    path: "/transaction",
    icon: (
      <SvgIcon fontSize="small">
        <HandshakeIcon />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Hóa đơn",
        path: "/invoice",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Trả hàng",
        path: "/exchange-goods",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Nhập hàng",
        path: "/receive-goods",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Xuất hủy",
        path: "/rejection",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Nhân viên",
    path: "/employee",
    icon: (
      <SvgIcon fontSize="small">
        <Group />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Nhân viên",
        path: "/employee",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Chấm công",
        path: "/timekeeping",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Bảng tính lương",
        path: "/salary-sheet",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Bảng hoa hồng",
        path: "/commission-chart",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Sổ quỹ",
    path: "/cash-log",
    icon: (
      <SvgIcon fontSize="small">
        <RequestPageIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Báo cáo",
    path: "/report",
    icon: (
      <SvgIcon fontSize="small">
        <ReceiptLong />
      </SvgIcon>
    ),

  },
  {
    title: "Nhà bếp",
    path: "/kitchen",
    icon: (
      <SvgIcon fontSize="small">
        <KitchenIcon />
      </SvgIcon>
    ),

  },
  {
    title: "Thiết bị",
    path: "/equipment",
    icon: (
      <SvgIcon fontSize="small">
        <ConstructionIcon />
      </SvgIcon>
    ),

  },
  {
    title: "Liên kết AI",
    path: "/ai",
    icon: (
      <SvgIcon fontSize="small">
        <Psychology />
      </SvgIcon>
    ),
  },
  {
    title: "Cấu hình",
    icon: (
      <SvgIcon fontSize="small">
        <Settings />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Cấu hình chung",
        path: "/setting",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Hệ thống",
    path: "/system",
    icon: (
      <SvgIcon fontSize="small">
        <CpuChipIcon />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Phân quyền hệ thống",
        path: "/system/role-system",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Module",
        path: "/system/module",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Chức năng",
        path: "/system/feature",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ]
  },
];
