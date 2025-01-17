import React, {FunctionComponent} from 'react';
import {Rect, Text, TextProps} from 'react-native-svg';
import PropTypes from 'prop-types';

interface LegendItemProps {
  baseLegendItemX: number;
  index: number;
  legendOffset: number;
  legendText: string;
  labelProps: TextProps;
  iconColor: string;
}

const CIRCLE_WIDTH = 16;
const PADDING_LEFT = 4;
const CHARACTER_WIDTH = 6;

const LegendItem: FunctionComponent<LegendItemProps> = props => {
  const {baseLegendItemX, index} = props;
  /* half the height of the legend Rect, minus half the height of the circle to align the
     circle from its center, rather than its top. */
  const centerAlignedCircle = props.legendOffset / 2 - CIRCLE_WIDTH / 2;
  // 65% of the legend container height centers the text in relation to the circles
  const centerAlignedText = props.legendOffset * 0.65;
  // to center the legendItem on the baseLegendItemX
  const textLengthOffset = (props.legendText.length * CHARACTER_WIDTH) / 2;
  const legendItemNumber = index + 1;

  return (
    <>
      <Rect
        width={CIRCLE_WIDTH}
        height={CIRCLE_WIDTH}
        fill={props.iconColor}
        rx={8}
        ry={8}
        x={
          baseLegendItemX * legendItemNumber - (CIRCLE_WIDTH + textLengthOffset)
        }
        y={centerAlignedCircle}
      />
      <Text
        x={
          baseLegendItemX * legendItemNumber + (PADDING_LEFT - textLengthOffset)
        }
        y={centerAlignedText}
        {...props.labelProps}>
        {props.legendText}
      </Text>
    </>
  );
};

LegendItem.propTypes = {
  index: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  baseLegendItemX: PropTypes.number.isRequired,
  legendText: PropTypes.string.isRequired,
  legendOffset: PropTypes.number.isRequired,
  labelProps: PropTypes.object.isRequired,
};

export default LegendItem;
