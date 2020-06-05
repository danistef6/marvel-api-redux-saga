import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { FormattedMessage, injectIntl } from 'react-intl';
import { SelectComponent } from '../commons/SelectComponent/selectComponent';
import {
  DivMainStyle,
  DivSearchStyle,
  LabelStyle,
  ErrorStyle,
  SearchStyle,
  ButtonStyle,
  DivErrorStyle,
} from './styles';

const FilterBar = ({ handleSearchComics, handleSetLocale, intl: { formatMessage } }) => {
  const [input, setInput] = useState('');

  const cambioLocale = (e) => {
    setInput(e.currentTarget.value);
    console.log("LLegue del select", e.currentTarget.value);
  }

  const validation = values => {
    let errors = {};

    if (!values.buscar) {
      errors.buscar = <FormattedMessage id="dashboard.inputError" />;
    }
    console.log("ERROR", errors.buscar);
    return errors;
  }

  useEffect(() => {
    function searchSelect() {
      handleSetLocale(input);
    }

    searchSelect();
  }, [handleSetLocale, input]);

  return (
    <h1>
      <div>
        <Formik
          initialValues={{ buscar: '' }}
          onSubmit={(values, { resetForm }) => {
            handleSearchComics(values.buscar);
            resetForm({})
          }}
          validate={validation}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
              <form onSubmit={handleSubmit}>
                <DivMainStyle>
                  <DivSearchStyle>
                    <LabelStyle id="searchLabel" htmlFor="inputSearch">
                      <FormattedMessage id="dashboard.titulo"
                        defaultMessage="Type a character:"
                        description="Type a character" />
                    </LabelStyle>
                    <DivErrorStyle>
                      <SearchStyle
                        id="inputSearch"
                        aria-label={formatMessage({
                          id: 'dashboard.searchField',
                          defaultMessage: "Enter the character you want to search",
                          description: "Enter the character you want to search"
                        })}
                        type="text"
                        name="buscar"
                        value={values.buscar}
                        error={touched.buscar && errors.buscar}
                      />
                      {errors.buscar && touched.buscar && < ErrorStyle>{errors.buscar}</ErrorStyle>}
                    </DivErrorStyle>
                    <ButtonStyle id="buscar" type="submit" aria-label={formatMessage({
                      id: 'dashboard.searchButton',
                      defaultMessage: "Press enter to search for your character",
                      description: "Press enter to search for your character"
                    })}>
                      <FormattedMessage id="dashboard.button"
                        defaultMessage="Search"
                        description="Search" />
                    </ButtonStyle>
                  </DivSearchStyle>
                  <SelectComponent
                    id="languageSelection"
                    label={formatMessage({
                      id: 'dashboard.language',
                      defaultMessage: "Language",
                      description: "Language"
                    })}
                    labelHidden
                    onChangeSelect={cambioLocale}
                    required={false}
                    input={{}}
                    wcagObject={{
                      id: 'language-selection',
                      message: formatMessage({
                        id: 'dashboard.languageSelection',
                        defaultMessage: "It´s in a drop-down field with 3 options to select your preferred language",
                        description: "It´s in a drop-down field with 3 options to select your preferred language"
                      }),
                    }}
                  >
                    <option value="en" >
                      {formatMessage({
                        id: 'dashboard.english',
                        defaultMessage: "English",
                        description: "English"
                      })}
                    </option>
                    <option value="es" >
                      {formatMessage({
                        id: 'dashboard.spanish',
                        defaultMessage: "Español",
                        description: "Español"
                      })}
                    </option>
                    <option value="pt">
                      {formatMessage({
                        id: 'dashboard.portuguese',
                        defaultMessage: "Português",
                        description: "Português"
                      })}
                    </option>
                  </SelectComponent>
                </DivMainStyle>
              </form>
            )}
        </Formik>
      </div>
    </h1>
  );
};

export default injectIntl(FilterBar);