import React from 'react';
import { connect } from 'react-redux';
import CardItem from './components/CardItem';
import { Container, DivStyle, DivNotFoundStyle, LabelStyle } from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import NotFound from "../../../assets/images/Spider.png";
import { FormattedMessage } from 'react-intl';

const style = {
    height: 368,
    maxWidth: 375
};

const List = ({ comics }) => {
    console.log("Estas son las props", comics);
    console.log("Respuesta de fetching", comics.fetching);
    console.log("aqui empieza", comics.data.length);
    return (
        <h1>
            <>
                {comics.fetching === true ?
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="marvel logo"
                            image={'https://1.bp.blogspot.com/-j2IiGUcUkSI/XFIK2fT7wOI/AAAAAAAB2GQ/Lo0-g2Z5AYQBtx24rlpIcBPbqbJwdUEDACLcBGAs/s640/2.gif'}
                            title={comics.data.resourceURI}
                        />
                    </CardActionArea> : null

                }
                {comics.loading === true ?
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="looking for character"
                            image={'https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-32.gif'}
                            title={comics.data.resourceURI}
                        />
                    </CardActionArea> : null
                }
                <Container>
                    {comics.data.length > 0 ? (
                        <DivStyle>
                            {comics.data.map(item => (
                                <Link to={`/Detail/${item.id}`} target="_blank" key={item.id}>
                                    <CardItem data={item} />
                                </Link>
                            ))}
                        </DivStyle>
                    ) : comics.fetching === false ?
                            (<DivNotFoundStyle>
                                <LabelStyle id="notFoundLabel" htmlFor="imgNotFound" >
                                    <FormattedMessage id="dashboard.notFound" />
                                </LabelStyle>
                                <CardActionArea>
                                    <CardMedia
                                        id="imgNotFound"
                                        component="img"
                                        style={style}
                                        alt="spiderman disappearing"
                                        image={NotFound}
                                        title={"comics.data.resourceURI"}
                                    />
                                </CardActionArea>
                            </DivNotFoundStyle>) : null}
                </Container>
            </>
        </h1>
    );
};

const mapStateToProps = state => ({
    comics: state.comics,
});

export default connect(
    mapStateToProps,
)(List);
