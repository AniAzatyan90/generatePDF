// // components/PdfDocument.js
// import React from 'react';
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Font,
// } from '@react-pdf/renderer';

// // Можно подключить кастомный шрифт (по желанию)
// // Font.register({ family: 'DejaVu', src: '/fonts/DejaVuSans.ttf' });

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     fontFamily: 'Helvetica',
//   },
//   section: {
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   field: {
//     marginBottom: 4,
//   },
// });

// export const PdfDocument = ({ users, template }) => (
//   <Document>
//     {users.map((user, index) => (
//       <Page key={user.id} size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.title}>
//             {template === '1'
//               ? 'Հաստատագիր (Հայերեն)'
//               : template === '2'
//               ? 'Certificate (Latin)'
//               : 'Combined Certificate'}
//           </Text>

//           <Text style={styles.field}>Անուն (Name): {user.name}</Text>
//           <Text style={styles.field}>Էլ․ հասցե (Email): {user.email}</Text>
//           <Text style={styles.field}>Հասցե (Address): {user.address.city}, {user.address.street}</Text>

//           <Text style={{ marginTop: 20 }}>Էջ {index + 1}</Text>
//         </View>
//       </Page>
//     ))}
//   </Document>
// );
