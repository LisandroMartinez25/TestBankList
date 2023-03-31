import React, { useCallback } from 'react'
import { Button, Linking } from 'react-native';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const BtnLink = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default BtnLink