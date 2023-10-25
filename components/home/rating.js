import React from 'react';
import { View, Image } from 'react-native';
import { StarIcon as FilledStarIcon } from 'react-native-heroicons/solid';
import { StarIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../../theme';

const Rating = ({ rating, maxRating = 5, size = 10 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;

    // Use a custom filled or empty star icon
    const Icon = isFilled ? FilledStarIcon : StarIcon;

    stars.push(
      <Icon
        key={i}
        style={{
          marginRight: 0,
        }}
        size={size}
        color={themeColors.gold}
      />
    );
  }

  return <View style={{ flexDirection: 'row' }}>{stars}</View>;
};

export default Rating;
