
import { Container, Button, Typography, Box, TextField, Slider, Select, Checkbox, Radio, FormControl, FormLabel, RadioGroup, Card, FormControlLabel, FormGroup, MenuItem } from '@mui/material'
import './Form.css'
import { useState } from 'react'

const Form = () => {

    const [inputValues, setInputValues] = useState({
        car_make: '',
        car_model: '',
        year: '',
        mileage: '',
        condition: '',
        features: {
            air_condition: false,
            power_steering: false,
            power_windows: false,
            abs: false,
            navigation_system: false,
        },

        transmission: 'manual',
        price_range: '',
        contact_number: ''
    })

    const handleChange = (e) => {

        setInputValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = () => {
        console.log(inputValues)
        alert('form submitted, check browser  console')
    }
    return (
        <Container

            sx={{ minHeight: '100vh' }}>

            <Card

                className='form-card'
            >

                <Box>
                    <Typography
                        variant='h5'
                        sx={{mb:4}}
                    >
                        Enter your car's information !
                    </Typography>
                    <Box className='input-div'>
                        <TextField
                            name='car_make'
                            onChange={(e) => handleChange(e)}
                            fullWidth
                            multiline={false}
                            placeholder='car make'
                            label='car make'
                            value={inputValues.car_make}
                        />

                    </Box>
                    <Box className='input-div'>
                        <TextField
                            fullWidth
                            name='car_model'
                            onChange={(e) => handleChange(e)}
                            multiline={false}
                            placeholder='car model'
                            label='car model'
                            value={inputValues.car_model}
                        />

                    </Box>
                    <Box className='input-div'>
                        <input type='date'
                            name='year'
                            value={inputValues.year}
                            onChange={(e) => handleChange(e)}
                        />
                    </Box>
                    <Box className='input-div'>
                        <TextField
                            fullWidth
                            name='mileage'
                            label="mileage"
                            placeholder='mileage'
                            onChange={(e) => handleChange(e)}
                            value={inputValues.mileage}
                        />
                    </Box>
                    <Box className='input-div'>
                        <FormControl>
                            <FormLabel id="Condition">Condition</FormLabel>

                            <RadioGroup
                                row
                                defaultValue={'Excellent'}
                                name='condition'
                                aria-labelledby='Condition'
                                onChange={(e) => handleChange(e)}
                            >
                                <FormControlLabel value='Excellent' control={<Radio />} label='Excellent' />

                                <FormControlLabel value='Good' control={<Radio />} label='Good' />
                                <FormControlLabel value='Fair' control={<Radio />} label='Fair' />
                                <FormControlLabel value='Poor' control={<Radio />} label='Poor' />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className='input-div'>
                        <FormControl>
                            <FormLabel
                                id='features'
                            >
                                Features
                            </FormLabel>
                            <FormGroup

                                row
                            >

                                <FormControlLabel

                                    control={<Checkbox
                                        onChange={() => setInputValues(prev => ({ ...prev, features: { ...inputValues.features, air_condition: !inputValues.features.air_condition } }))}
                                        checked={inputValues.features.air_condition}
                                    />} label="Air conditioning" />


                                <FormControlLabel control={<Checkbox
                                    onChange={() => setInputValues(prev => ({ ...prev, features: { ...inputValues.features, power_steering: !inputValues.features.power_steering } }))}
                                    checked={inputValues.features.power_steering}
                                />} label="Power steering" />
                                <FormControlLabel control={<Checkbox
                                    onChange={() => setInputValues(prev => ({ ...prev, features: { ...inputValues.features, power_windows: !inputValues.features.power_windows } }))}
                                    checked={inputValues.features.power_windows}
                                />} label="Power windows" />
                                <FormControlLabel control={<Checkbox
                                    onChange={() => setInputValues(prev => ({ ...prev, features: { ...inputValues.features, abs: !inputValues.features.abs } }))}
                                    checked={inputValues.features.abs}
                                />} label="ABS " />
                                <FormControlLabel control={<Checkbox
                                    onChange={() => setInputValues(prev => ({ ...prev, features: { ...inputValues.features, navigation_system: !inputValues.features.navigation_system } }))}
                                    checked={inputValues.features.navigation_system}
                                />} label="Navigation Sytem " />
                            </FormGroup>
                        </FormControl>
                    </Box>

                    <Box className='input-div'>
                        <FormControl
                            fullWidth
                        >
                            <FormLabel
                                id='transmission'
                            >
                                Transmission method
                            </FormLabel>

                            <Select
                                onChange={e => handleChange(e)}
                                fullWidth
                                name="transmission"
                                defaultValue='manual'
                                labelId='transmission'
                                value={inputValues.transmission}

                            >
                                <MenuItem value="automatic">Automatic</MenuItem>
                                <MenuItem value='manual'>Manual</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl
                            fullWidth
                        >
                            <FormLabel
                                id='price'
                            >
                                Price range
                            </FormLabel>

                            <FormControlLabel
                                control={<Slider
                                    name='price_range'
                                    onChange={e => handleChange(e)}
                                    sx={{ width: '70%', m: '0 auto' }} />}
                            />
                        </FormControl>
                    </Box>

                    <Box className="input-div">
                        <TextField
                            fullWidth
                            name='contact_number'
                            onChange={e => handleChange(e)}
                            label="contact number"
                        />
                    </Box>

                    <Box className="input-div">
                        <Button
                            onClick={() => handleSubmit()}
                            variant='outlined'
                            color='success'
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    )
}

export default Form