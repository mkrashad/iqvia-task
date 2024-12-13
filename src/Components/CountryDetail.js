import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../styles';

const CountryDetail = ({ route }) => {
  const { country } = route.params;
  const [updatedCountry, setUpdatedCountry] = useState(country);

  const handleUpdate = (field, value) => {
    setUpdatedCountry({ ...updatedCountry, [field]: Number(value) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{updatedCountry.country}</Text>
      <Text>Population: {updatedCountry.population}</Text>
      <Text>Area: {updatedCountry.areaInSqKm} sq km</Text>
      <Text>Life Expectancy: {updatedCountry.lifeExpectancy}</Text>
      <Text>Deaths:</Text>
      <TextInput
        style={styles.input}
        value={String(updatedCountry.deaths)}
        keyboardType="numeric"
        onChangeText={(value) => handleUpdate('deaths', value)}
      />
      <Text>Recovered:</Text>
      <TextInput
        style={styles.input}
        value={String(updatedCountry.recovered)}
        keyboardType="numeric"
        onChangeText={(value) => handleUpdate('recovered', value)}
      />
    </View>
  );
};

export default CountryDetail;
