import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, Dialog, DialogTitle, Box, TextField, Button, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import ModalDetail from "src/components/modal-detail";
import ActionColumn from "src/components/action-column ";

export default function DiningRoomTable() {
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }

    const rows = [
        { id: 1, stt: 1, nameTable: 'Bàn 1', viTri: 'Nhà A1', notes: "Ưu đãi giảm giá cao" },
        { id: 2, stt: 2, nameTable: 'bàn 2', viTri: 'Nhà A2', notes: "Ưu đãi giảm giá cao" },
        { id: 3, stt: 3, nameTable: 'bàn 3', viTri: 'Nhà A3', notes: " Ưu đãi giảm giá cao" },

    ];

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        { field: "nameTable", headerName: "Tên Bàn", width: 140 },
        { field: "viTri", headerName: "Vị trí", width: 250 },
        { field: "notes", headerName: "Ghi chú", width: 350 },
        {
            field: "action",
            headerName: "Thao tác",
            headerAlign: "center",
            width: 150,
            renderCell: (params) => (
                <ActionColumn
                    handleViewDetail={handleViewDetail}
                    // openDialogEdit={handleOpenEditCar}
                    params={params}
                    handleDelete={() => handleDelete(params.row)}
                />
            ),
        },
    ];


    return (
        <Stack
            spacing={1}
            sx={{
                margin: "30px 0px",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center'
                }}
            >
                <TextField
                    sx={{ margin: "12px 0px", width: '50%' }}
                    size="small"
                    label="Nhập nội dung tìm kiếm"
                    variant="outlined"
                />
                <Button
                    sx={{
                        margin: '8px',
                        backgroundColor: '#1C2536',
                        color: 'white'
                    }}
                    size='small'
                    variant="contained"
                >Tìm kiếm</Button>
            </Box>
            <Box style={{ width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    sx={{
                        borderColor: 'rgb(224, 224, 224)',
                        '& .MuiDataGrid-row': {
                            border: '0.1px solid rgb(224, 224, 224) !important',
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#f0f0f0',
                            borderBottom: '1px solid #ccc '
                        },
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    pageSizeOptions={[20, 50]}
                    checkboxSelection
                />
            </Box>
            <ModalDetail
                open={isModalDetailOpen}
                onClose={handleCloseDetail}
                rowData={selectedRow}
                columns={columns}
            />
        </Stack>
    );
}
