import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";

export const DiningRoomAdd = () => {
    const [formData, setFormData] = useState({
        tenBan: "",
        viTri: "",
        ghiChu: "",
    });

    const handleSubmit = () => {
        alert("thanh cong")
        console.log("Dữ liệu mới được nhập vào là :", formData)
    }

    return (
        <Stack>
            <Box
                sx={{
                    border: "1px soild black"
                }}
            >
                <TextField
                    required
                    label="Tên Bàn"
                    variant="outlined"
                    size="small"
                    value={formData.tenBan}
                    onChange={e => setFormData({ ...formData, tenBan: e.target.value })}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <Autocomplete
                    options={["Nhà A1", "Nhà A2", "Nhà A3"]}
                    sx={{ width: "100% " }}
                    size="small"
                    value={formData.viTri}
                    onChange={(event, newValue) => {
                        setFormData({
                            ...formData, // rest
                            viTri: newValue
                        })
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Vị Trí"
                            variant="outlined"
                        />}
                />

                <TextField
                    required
                    label="Ghi chú"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={2}
                    value={formData.ghiChu}
                    onChange={e => setFormData({ ...formData, ghiChu: e.target.value })}
                    style={{ width: "100%", marginTop: "10px" }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "10px"
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >Save</Button>
                </Box>
            </Box>
        </Stack>
    )
}