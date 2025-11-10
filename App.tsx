import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
              Welcome to Hovedopgave App
            </Text>
            <Text style={[styles.subtitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
              A simple React Native app to build onto
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
              Step One
            </Text>
            <Text style={[styles.sectionDescription, {color: isDarkMode ? '#ccc' : '#666'}]}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
              Step Two
            </Text>
            <Text style={[styles.sectionDescription, {color: isDarkMode ? '#ccc' : '#666'}]}>
              Build your app by adding more components and features.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  highlight: {
    fontWeight: '700',
    fontFamily: 'monospace',
  },
});

export default App;
