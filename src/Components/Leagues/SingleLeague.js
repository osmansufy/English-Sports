import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
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
    const {idLeague,strBadge,strLeague,strSport}=props?.data
 
    const classes = useStyles();
    const history=useHistory()
    const onDetails=()=>{
        history.push(`/league/${idLeague}`)
    }
    return (
        <Card className={classes.root}>
        <CardActionArea >
         
                <CardMedia
                className={classes.media}
                image={strBadge}
                // src={league?.strBanner}
                title="Contemplative Reptile"
              /> 
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strLeague}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Sports Type: {strSport}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: "center"}}>
        
          <Button onClick={onDetails} 
          
        endIcon={<i class="fa fa-arrow-right"></i>}
          variant="contained" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
};

export default SingleLeague;