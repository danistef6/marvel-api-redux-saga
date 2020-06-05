import React, { useEffect } from 'react'
import { Formik } from 'formik';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { LabelStyle, 
         DivTituloStyle, 
         DivImgStyle, 
         DivDesStyle, 
         DivContenidoStyle, 
         LabelDescriptionStyle } from './styles';

const DetailPage = ({ handleSearchComics, details }) => {

    let id = useParams();
    useEffect(() => {
        function searchComics() {
            handleSearchComics(id.Id);
        }

        searchComics();
    }, [handleSearchComics, id.Id]);

    console.log("Esto trae el store", details);
    return (
        <div>
            <Formik>
                {({
                    handleSubmit
                }) => (
                        <form onSubmit={handleSubmit}>
                            <h1>
                                <DivTituloStyle>
                                    <LabelStyle htmlFor = "img">{details.data.name}</LabelStyle>
                                </DivTituloStyle>
                            </h1>
                            <h2>
                                <DivContenidoStyle>
                                    <DivImgStyle>
                                        <CardMedia
                                            id="img"
                                            component="img"
                                            alt={`selected superhero ${details.data.name}`}
                                            height="500"
                                            image={`${details.data.thumbnail}.${details.data.extension}`}
                                            title={details.data.resourceURI}
                                        />
                                    </DivImgStyle>
                                    <DivDesStyle>
                                        <LabelDescriptionStyle htmlFor="img">{details.data.description}</LabelDescriptionStyle>
                                    </DivDesStyle>
                                </DivContenidoStyle>
                            </h2>
                        </form>
                    )}
            </Formik>
        </div>
    );
};

const mapStateToProps = state => ({
    details: state.details,
});

export default connect(
    mapStateToProps,
)(DetailPage);