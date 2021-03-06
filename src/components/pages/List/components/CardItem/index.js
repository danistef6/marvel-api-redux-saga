import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 275,
        marginTop: 20,
        height:240,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

function CardItem({ classes, data }) {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={`image ${data.name}`} 
                    className={classes.media}
                    height="140"
                    image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    title={data.resourceURI}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CardItem.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(CardItem);
