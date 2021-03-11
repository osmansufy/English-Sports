import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const SingleLeague = (props) => {
    const league=props?.data
    console.log(league);
    const classes = useStyles();
    const history=useHistory()
    const onDetails=()=>{
        history.push(`/league/${league.idLeague}`)
    }
    return (
        <Card className={classes.root}>
        <CardActionArea >
         
                <CardMedia
                className={classes.media}
                image={league?.strBadge}
                // src={league?.strBanner}
                title="Contemplative Reptile"
              /> 
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {league.strLeague}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Sports Type: {league.strSport}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: "center"}}>
        
          <Button onClick={onDetails} variant="contained" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
};

export default SingleLeague;