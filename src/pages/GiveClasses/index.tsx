import React from 'react';
import { View, ImageBackground, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import PageHeader from '../../components/PageHeader';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    Linking.openURL('https://proffyweb.vercel.app');
    goBack();
  }

  return (
    <>
      <PageHeader />
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={GiveClassesBgImage}
          style={styles.content}
        >
          <Text style={styles.title}>Quer ser um Proffy?</Text>
          <Text style={styles.description}>
            Para começar, você precisa se cadastrar como professor na nossa plataforma web.
          </Text>
        </ImageBackground>

        <RectButton
          
          onPress={handleNavigateBack}
          style={styles.okButton}
        >
          <Text style={styles.okButtonText}>Vamos lá</Text>
        </RectButton>
      </View>
    </>
  );
}

export default GiveClasses;