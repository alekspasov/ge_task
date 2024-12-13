
import React from 'react';

// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import { gridSpacing } from '../../store/constant';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import { getRandomColor } from '../../utils/helpers';

//Icon imports
import PetsIcon from '@mui/icons-material/Pets';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import WarningIcon from '@mui/icons-material/Warning';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HistoryIcon from '@mui/icons-material/History';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GavelIcon from '@mui/icons-material/Gavel';
import ChurchIcon from '@mui/icons-material/Church';
import ScienceIcon from '@mui/icons-material/Science';
import FlightIcon from '@mui/icons-material/Flight';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import { useNavigate } from 'react-router-dom';


const iconMap = {
  animal: <PetsIcon />,
  career: <WorkIcon />,
  celebrity: <StarIcon />,
  dev: <CodeIcon />,
  explicit: <WarningIcon />,
  fashion: <CheckroomIcon />,
  food: <FastfoodIcon />,
  history: <HistoryIcon />,
  money: <AttachMoneyIcon />,
  movie: <MovieIcon />,
  music: <MusicNoteIcon />,
  political: <GavelIcon />,
  religion: <ChurchIcon />,
  science: <ScienceIcon />,
  sport: <SportsFootballIcon />,
  travel: <FlightIcon />
};


const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  },
  '&:hover': {
    opacity: 0.5,
    color: theme.palette.primary.contrastText
  }
}));



const JokeCategories = () => {
  const theme = useTheme();
  const categories = useSelector((state) => state.categories.categories);
  const navigate = useNavigate();
  const handleClick = (event,category) => {
    navigate(`/jokes/random/${category}`);
  }

  return (
    <>
      <Grid container spacing={gridSpacing} >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <CardWrapper border={false} content={false} onClick={(e)=>handleClick(e,category)}>
              <Box sx={{ p: 2 }}>
                <List sx={{ py: 0 }}>
                  <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.largeAvatar,
                          bgcolor: `${getRandomColor()}`,
                          color: '#fff'
                        }}
                      >
                        {iconMap[category]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ py: 0, my: 0.45 }}
                      primary={
                        <Typography variant="h4" sx={{ color: '#fff' }}>
                          {category}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </CardWrapper>
          </Grid>
        ))}
      </Grid></>
  )};

export default JokeCategories;
