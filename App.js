import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const NAME = 'Sachith';
const EMAIL = 'info@sdkaluwitharana.lk';

function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      <View style={[styles.appBar, { paddingTop: insets.top }]}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      <View style={styles.body}>
        <Image source={require('./assets/avatar.png')} style={styles.avatar} />
        <View style={styles.divider} />

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{NAME}</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <MaterialIcons name="email" size={20} color="black" />
          <Text style={styles.rowText}>{EMAIL}</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <MaterialIcons name="star" size={20} color="black" />
          <Text style={styles.rowText}>{points}</Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add point"
        onPress={() => setPoints((current) => current + 1)}
        style={({ pressed }) => [
          styles.fab,
          { bottom: insets.bottom + 20 },
          pressed && styles.fabPressed,
        ]}
      >
        <MaterialIcons name="add" size={26} color="white" />
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  appBar: {
    backgroundColor: 'black',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#222',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  rowText: {
    fontSize: 16,
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabPressed: {
    opacity: 0.7,
  },
});
