import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import {
	Box,
	Container,
	Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewDiemDanh } from "src/sections/overview/overview-doanhthu";
import { OverviewCustomer } from "src/sections/overview/overview-customer";
import { OverviewCongno } from "src/sections/overview/overview-congno";
import { OverviewOrder } from "src/sections/overview/overview-order";
import { OverviewView } from "src/sections/overview/overview-view";
import { OverviewFeedback } from "src/sections/overview/overview-feedback";



const now = new Date();

const Page = () => {
	return (
		<>
			<Head>
				<title>Tổng quan | CSoft RC</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
					backgroundColor: '$primary-color'
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={3}>
						<Grid xs={12} sm={6} lg={3}>
							<OverviewOrder difference={12} positive sx={{ height: "100%" }} value="120" />
						</Grid>
						<Grid xs={12} sm={6} lg={3}>
							<OverviewView difference={16} positive={false} sx={{ height: "100%" }} value="2.305.300" />
						</Grid>
						<Grid xs={12} sm={6} lg={3}>
							<OverviewFeedback sx={{ height: "100%" }} value="1.200.438" />
						</Grid>
						<Grid xs={12} sm={6} lg={3}>
							<OverviewCustomer difference={27} positive sx={{ height: "100%" }} value="592.030" />
						</Grid>

						<Grid xs={12} lg={8}>
							<OverviewDiemDanh
								chartSeries={[
									{
										name: "This year",
										data: [18, 16, 12, 10, 14, 15, 14, 16, 12, 19, 18, 20],
									},
									{
										name: "Last year",
										data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
									},
								]}
								sx={{ height: "100%" }}
							/>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<OverviewCongno
								chartSeries={[61, 10, 29]}
								labels={["Like", "Comment", "Share"]}
								sx={{ height: "100%" }}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;