import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
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
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: 'right',
    color: '#888',
    backgroundColor:'gray'
  },
});
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};
export const Template2 = ({ users }) => (
  <Document>
    {users.map((user, index) => (
      <Page key={user.id} size="A4" style={styles.page}>
        <Text style={styles.title}>Customer Certificate</Text>

        <View style={styles.section}>
          <Text style={styles.field}>Full Name: {user.name}</Text>
          <Text style={styles.field}>Email: {user.email}</Text>
          <Text style={styles.field}>City: {user.address.city}</Text>
          <Text style={styles.field}>Address: {user.address.street}</Text>
        </View>

        <View style={styles.box}>
          <Text>Approved by: Bank Manager</Text>
          <Text>Date: {formatDate(new Date())}</Text>
          <Text>Signature: ____________________</Text>
        </View>

        <Text style={styles.footer}>Page {index + 1}</Text>
      </Page>
    ))}
  </Document>
);
