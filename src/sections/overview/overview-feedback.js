import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { DocumentIcon } from '@heroicons/react/24/solid';
import { Forum } from '@mui/icons-material';

export const OverviewFeedback = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Phản hồi & Tương tác
            </Typography>
            <Typography variant="h6">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <Forum />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={52}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

OverviewFeedback.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
