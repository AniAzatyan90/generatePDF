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
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  content: {
    marginBottom: 20,
    lineHeight: 1.5,
  },
  field: {
    marginBottom: 10,
  },
  signatureBox: {
    marginTop: 30,
    padding: 10,
    border: '1pt solid black',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    color: '#999',
    textAlign: 'right',
  },
});

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

export const Template1 = ({ users }) => (
  <Document>
    {users.map((user, index) => (
      <Page key={user.id} size="A4" style={styles.page}>
        <Text style={styles.title}>Residence Certificate</Text>

        <View style={styles.content}>
          <Text style={styles.field}>
            This document certifies that <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
            {' '}resides in the city of <Text style={{ fontWeight: 'bold' }}>{user.address.city}</Text>, at
            {' '}<Text style={{ fontWeight: 'bold' }}>{user.address.street}</Text>.
          </Text>

          <Text style={styles.field}>
            The certificate is issued upon the request of the citizen for submission to relevant authorities.
          </Text>
        </View>

        <View style={styles.signatureBox}>
          <Text>Date of Issue: {formatDate(new Date())}</Text>
          <Text>Authorized by: Municipality Officer</Text>
          <Text>Signature: __________________________</Text>
        </View>

        <Text style={styles.footer}>Page {index + 1}</Text>
      </Page>
    ))}
  </Document>
);
