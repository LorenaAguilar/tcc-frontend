/* eslint-disable camelcase */
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import { Field, FieldProps } from 'formik';
import throttle from 'lodash/throttle';
import React, { useEffect, useMemo } from 'react';
import { GOOGLE_API_KEY } from '../../constants';
import useAutoCompletePlacesStyles from './FormikAutoCompletePlaces.styles';

interface Props {
  label: string;
  name: string;
}

interface PlaceType {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      }
    ];
  };
}

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const AutoCompletePlaces: React.FunctionComponent<Props> = ({ name, label }) => {
  const { labelStyle, icon } = useAutoCompletePlacesStyles();

  const [value, setValue] = React.useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<PlaceType[]>([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps'
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle((request: { input: string }, callback: (results?: PlaceType[]) => void) => {
        (autocompleteService.current as any).getPlacePredictions(request, callback);
      }, 200),
    []
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: PlaceType[]) => {
      if (active) {
        let newOptions = [] as PlaceType[];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Field name={name}>
      {({ form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);
        console.log(form.errors, form.touched, value);
        return (
          <div>
            <InputLabel className={labelStyle} error={hasError}>
              {label}
            </InputLabel>
            <Autocomplete
              getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
              }
              filterOptions={(x) => x}
              options={options}
              autoComplete
              fullWidth
              includeInputInList
              filterSelectedOptions
              onBlur={form.handleBlur}
              value={value}
              onChange={(_event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                form.setFieldValue(name, newValue?.place_id, true);
              }}
              onInputChange={(_event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  error={hasError}
                  helperText={hasError && meta.error}
                  fullWidth
                />
              )}
              renderOption={(option) => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match: any) => [match.offset, match.offset + match.length])
                );

                return (
                  <Grid container alignItems="center">
                    <Grid item>
                      <LocationOnIcon className={icon} />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span
                          key={`part-${part}-${`000${index}`}`}
                          style={{ fontWeight: part.highlight ? 700 : 400 }}
                        >
                          {part.text}
                        </span>
                      ))}
                      <Typography variant="body2" color="textSecondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              }}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default AutoCompletePlaces;
