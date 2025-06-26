// components/pdf/Template3PDF.js
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Կառուցիր ոճերը
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  field: {
    marginBottom: 6,
  },
  box: {
    border: '1pt solid black',
    padding: 10,
    marginTop: 20,
  },
  signature: {
    marginTop: 20,
    fontSize: 12,
  },
});

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

export const Template3 = ({ users }) => (
  <Document>
    {users.map((user, index) => (
      <Page key={user.id} size="A4" style={styles.page}>
        <Text style={styles.title}> Customer Info</Text>

        <View style={styles.section}>
          <Text style={styles.field}> Name: {user.name}</Text>
          <Text style={styles.field}> Email: {user.email}</Text>
          <Text style={styles.field}> City: {user.address.city}</Text>
          <Text style={styles.field}> Address: {user.address.street}</Text>
        </View>

        <View style={styles.box}>
          <Text> Approved by:  Manager</Text>
          <Text></Text>

          <Text> Date: {formatDate(new Date())}</Text>
          <Text></Text>
          <Text style={styles.signature}> Signature: ____________________</Text>
        </View>

        <Text style={{ marginTop: 30, textAlign: 'right' }}> Page: {index + 1}</Text>
      </Page>
    ))}
  </Document>
);


