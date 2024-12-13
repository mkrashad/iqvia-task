import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { mockData } from '../../countries';
import styles from '../../styles';

const CountryList = ({ navigation }) => {
  const [countries, setCountries] = useState(mockData);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sortCountries = (field) => {
    let order = sortOrder === 'asc' ? 'desc' : 'asc';
    if (sortField !== field) order = 'asc';

    const sorted = [...countries].sort((a, b) => {
      if (order === 'asc') return a[field] > b[field] ? 1 : -1;
      return a[field] < b[field] ? 1 : -1;
    });

    setSortField(field);
    setSortOrder(order);
    setCountries(sorted);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('CountryDetail', { country: item })}
    >
      <Text style={styles.cell}>{item.country}</Text>
      <Text style={styles.cell}>{item.confirmed}</Text>
      <Text style={styles.cell}>{item.deaths}</Text>
      <Text style={styles.cell}>{item.recovered}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Country</Text>
        <Text style={styles.headerCell} onPress={() => sortCountries('confirmed')}>Confirmed</Text>
        <Text style={styles.headerCell} onPress={() => sortCountries('deaths')}>Deaths</Text>
        <Text style={styles.headerCell} onPress={() => sortCountries('recovered')}>Recovered</Text>
      </View>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.country}
      />
    </View>
  );
};

export default CountryList;
